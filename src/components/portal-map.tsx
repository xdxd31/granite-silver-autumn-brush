import { useEffect, useLayoutEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { MAP_SIZE, PORTALS, PORTAL_ENDS, type Portal, type Pt } from "@/lib/portals";

const MAX_SCALE = 8;
const HIT = 22;

type View = { x: number; y: number; s: number };

type Gesture =
  | { kind: "idle" }
  | {
      kind: "pan";
      id: number;
      x0: number;
      y0: number;
      lx: number;
      ly: number;
      moved: boolean;
      pointerType: string;
    }
  | {
      kind: "pinch";
      dist: number;
      s: number;
      mx: number;
      my: number;
      vx: number;
      vy: number;
    };

function fitView(vw: number, vh: number): View {
  const s = Math.min(vw / MAP_SIZE, vh / MAP_SIZE);
  return { s, x: (vw - MAP_SIZE * s) / 2, y: (vh - MAP_SIZE * s) / 2 };
}

function clampView(v: View, vw: number, vh: number): View {
  const mw = MAP_SIZE * v.s;
  const mh = MAP_SIZE * v.s;
  const x = mw <= vw ? Math.min(vw - mw, Math.max(0, v.x)) : Math.min(0, Math.max(vw - mw, v.x));
  const y = mh <= vh ? Math.min(vh - mh, Math.max(0, v.y)) : Math.min(0, Math.max(vh - mh, v.y));
  return { x, y, s: v.s };
}

function sameView(a: View, b: View) {
  return Math.abs(a.x - b.x) < 0.4 && Math.abs(a.y - b.y) < 0.4 && Math.abs(a.s - b.s) < 0.0004;
}

function arcControl(a: Pt, b: Pt): Pt {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  let px = -dy / len;
  let py = dx / len;
  if (py > 0) {
    px = -px;
    py = -py;
  }
  const bulge = Math.min(Math.max(len * 0.28, 56), 320);
  const inside = (x: number, y: number) => x > 48 && x < MAP_SIZE - 48 && y > 36 && y < MAP_SIZE - 36;
  const at = (f: number, flip: boolean) => ({
    x: mx + (flip ? -px : px) * bulge * f,
    y: my + (flip ? -py : py) * bulge * f,
  });
  for (const f of [1, 0.72, 0.46]) {
    const p = at(f, false);
    if (inside(p.x, p.y)) return p;
  }
  for (const f of [0.85, 0.5]) {
    const p = at(f, true);
    if (inside(p.x, p.y)) return p;
  }
  return at(0.35, false);
}

function pathD(a: Pt, c: Pt, b: Pt) {
  return `M ${a.x} ${a.y} Q ${c.x} ${c.y} ${b.x} ${b.y}`;
}

function arrowPoints(ctrl: Pt, end: Pt, s: number) {
  const dx = end.x - ctrl.x;
  const dy = end.y - ctrl.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const px = -uy;
  const py = ux;
  const length = 16 / s;
  const width = 10 / s;
  const tipx = end.x - ux * (9 / s);
  const tipy = end.y - uy * (9 / s);
  const bx = tipx - ux * length;
  const by = tipy - uy * length;
  return `${tipx},${tipy} ${bx + px * width},${by + py * width} ${bx - px * width},${by - py * width}`;
}

function bubbleOffset(portal: Pt, other: Pt) {
  let dx = portal.x - other.x;
  let dy = portal.y - other.y;
  let len = Math.hypot(dx, dy) || 1;
  dx /= len;
  dy /= len;
  dy -= 0.42;
  len = Math.hypot(dx, dy) || 1;
  dx /= len;
  dy /= len;
  const dist = 74;
  const ox = dx * dist;
  const oy = dy * dist;
  const room = (x: number, y: number) =>
    Math.min(x - 28, MAP_SIZE - 28 - x, y - 28, MAP_SIZE - 28 - y);
  const cx = portal.x + ox;
  const cy = portal.y + oy;
  if (room(cx, cy) >= room(portal.x - ox, portal.y - oy)) return { x: ox, y: oy };
  return { x: -ox, y: -oy };
}

const byId = new Map(PORTALS.map((p) => [p.id, p]));

export function PortalMap() {
  const vpRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<View | null>(null);
  const [anim, setAnim] = useState(false);
  const [panning, setPanning] = useState(false);
  const [hoverId, setHoverId] = useState<number | null>(null);
  const [pinnedId, setPinnedId] = useState<number | null>(null);
  const viewRef = useRef<View | null>(null);
  const userMoved = useRef(false);
  const animOn = useRef(false);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const gesture = useRef<Gesture>({ kind: "idle" });
  const hoverRef = useRef<number | null>(null);
  const animTimer = useRef(0);

  viewRef.current = view;

  function setAnimated(on: boolean) {
    if (animOn.current === on) return;
    animOn.current = on;
    setAnim(on);
  }

  function viewportSize() {
    const r = vpRef.current!.getBoundingClientRect();
    return { w: r.width, h: r.height, rect: r };
  }

  function commit(next: View, animate: boolean) {
    const { w, h } = viewportSize();
    const fit = fitView(w, h);
    const resolved =
      next.s <= fit.s * 1.02
        ? ((userMoved.current = false), fit)
        : ((userMoved.current = true), clampView(next, w, h));
    viewRef.current = resolved;
    setAnimated(animate);
    setView((cur) => (cur && sameView(cur, resolved) ? cur : resolved));
    if (animate) {
      window.clearTimeout(animTimer.current);
      animTimer.current = window.setTimeout(() => setAnimated(false), 300);
    }
  }

  function zoomAt(clientX: number, clientY: number, factor: number, animate: boolean) {
    const v = viewRef.current;
    if (!v || !vpRef.current) return;
    const { w, h, rect } = viewportSize();
    const fit = fitView(w, h);
    const ns = Math.min(MAX_SCALE, Math.max(fit.s, v.s * factor));
    const mx = clientX - rect.left;
    const my = clientY - rect.top;
    const k = ns / v.s;
    commit({ x: mx - (mx - v.x) * k, y: my - (my - v.y) * k, s: ns }, animate);
  }

  function clientToMap(clientX: number, clientY: number) {
    const r = worldRef.current!.getBoundingClientRect();
    return {
      x: ((clientX - r.left) / r.width) * MAP_SIZE,
      y: ((clientY - r.top) / r.height) * MAP_SIZE,
    };
  }

  function pick(clientX: number, clientY: number, maxDist: number) {
    const p = clientToMap(clientX, clientY);
    let best: { id: number; dist: number } | null = null;
    for (const e of PORTAL_ENDS) {
      const dx = p.x - e.x;
      const dy = p.y - e.y;
      const dyLabel = p.y - (e.y - 12);
      const d = Math.sqrt(Math.min(dx * dx + dy * dy, dx * dx + dyLabel * dyLabel));
      if (d <= maxDist && (!best || d < best.dist)) best = { id: e.id, dist: d };
    }
    return best;
  }

  function setHover(id: number | null) {
    if (hoverRef.current === id) return;
    hoverRef.current = id;
    setHoverId(id);
  }

  useLayoutEffect(() => {
    const el = vpRef.current;
    if (!el) return;
    const apply = () => {
      const r = el.getBoundingClientRect();
      const fit = fitView(r.width, r.height);
      setView((cur) => {
        if (!cur || !userMoved.current) return cur && sameView(cur, fit) ? cur : fit;
        const next = clampView(cur, r.width, r.height);
        return sameView(cur, next) ? cur : next;
      });
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = vpRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      let dy = e.deltaY;
      if (e.deltaMode === 1) dy *= 16;
      if (e.deltaMode === 2) dy *= 400;
      zoomAt(e.clientX, e.clientY, Math.exp(-dy * 0.0016), false);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
    // zoomAt reads refs; rebinding every render would drop the listener mid-gesture.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    e.currentTarget.setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size >= 2) {
      const pts = [...pointers.current.values()];
      const a = pts[0]!;
      const b = pts[1]!;
      const v = viewRef.current;
      if (!v) return;
      gesture.current = {
        kind: "pinch",
        dist: Math.hypot(a.x - b.x, a.y - b.y) || 1,
        s: v.s,
        mx: (a.x + b.x) / 2,
        my: (a.y + b.y) / 2,
        vx: v.x,
        vy: v.y,
      };
      setPanning(true);
      return;
    }
    gesture.current = {
      kind: "pan",
      id: e.pointerId,
      x0: e.clientX,
      y0: e.clientY,
      lx: e.clientX,
      ly: e.clientY,
      moved: false,
      pointerType: e.pointerType,
    };
  }

  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!pointers.current.has(e.pointerId)) {
      if (e.pointerType === "mouse" && e.buttons === 0 && viewRef.current) {
        setHover(pick(e.clientX, e.clientY, HIT)?.id ?? null);
      }
      return;
    }
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const g = gesture.current;
    if (g.kind === "pinch" && pointers.current.size >= 2 && viewRef.current) {
      const pts = [...pointers.current.values()];
      const a = pts[0]!;
      const b = pts[1]!;
      const dist = Math.hypot(a.x - b.x, a.y - b.y) || 1;
      const midX = (a.x + b.x) / 2;
      const midY = (a.y + b.y) / 2;
      const { w, h, rect } = viewportSize();
      const fit = fitView(w, h);
      const ns = Math.min(MAX_SCALE, Math.max(fit.s, g.s * (dist / g.dist)));
      const lx = g.mx - rect.left;
      const ly = g.my - rect.top;
      const nx = midX - rect.left;
      const ny = midY - rect.top;
      const imgX = (lx - g.vx) / g.s;
      const imgY = (ly - g.vy) / g.s;
      commit({ x: nx - imgX * ns, y: ny - imgY * ns, s: ns }, false);
      return;
    }
    if (g.kind === "pan" && g.id === e.pointerId) {
      const dx = e.clientX - g.lx;
      const dy = e.clientY - g.ly;
      g.lx = e.clientX;
      g.ly = e.clientY;
      if (!g.moved && Math.hypot(e.clientX - g.x0, e.clientY - g.y0) > 8) {
        g.moved = true;
        setPanning(true);
        setHover(null);
      }
      if (g.moved && viewRef.current) {
        const v = viewRef.current;
        const { w, h } = viewportSize();
        const next = clampView({ x: v.x + dx, y: v.y + dy, s: v.s }, w, h);
        if (next.s > fitView(w, h).s * 1.02) userMoved.current = true;
        viewRef.current = next;
        setAnimated(false);
        setView((cur) => (cur && sameView(cur, next) ? cur : next));
      }
    }
  }

  function finishPointer(e: ReactPointerEvent<HTMLDivElement>) {
    const g = gesture.current;
    pointers.current.delete(e.pointerId);
    if (g.kind === "pan" && g.id === e.pointerId && !g.moved) {
      const v = viewRef.current;
      const hit = v ? pick(e.clientX, e.clientY, HIT) : null;
      const touch = g.pointerType !== "mouse";
      if (touch && v && v.s < 0.9) {
        zoomAt(e.clientX, e.clientY, Math.max(2.4, 1 / v.s), true);
      } else if (hit) {
        setPinnedId((cur) => (cur === hit.id ? null : hit.id));
      } else if (!touch) {
        setPinnedId(null);
      } else if (v && v.s < 4) {
        zoomAt(e.clientX, e.clientY, 2, true);
      } else {
        setPinnedId(null);
      }
    }
    if (pointers.current.size === 0) {
      gesture.current = { kind: "idle" };
      setPanning(false);
      if (e.pointerType === "mouse") setHover(pick(e.clientX, e.clientY, HIT)?.id ?? null);
    } else if (g.kind === "pinch" && pointers.current.size === 1) {
      const [id, pos] = [...pointers.current.entries()][0]!;
      gesture.current = {
        kind: "pan",
        id,
        x0: pos.x,
        y0: pos.y,
        lx: pos.x,
        ly: pos.y,
        moved: true,
        pointerType: "touch",
      };
    }
  }

  const shownId = hoverId ?? pinnedId;
  const active = shownId != null ? byId.get(shownId) : undefined;
  const s = view?.s ?? 1;

  const vpClass = [
    "viewport",
    view ? "ready" : "",
    panning ? "is-panning" : "",
    !panning && hoverId != null ? "has-hit" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <main className="h-full w-full">
      <h1 className="sr-only">どんぐリアドベンチャー</h1>
      <div
        ref={vpRef}
        className={vpClass}
        role="application"
        aria-label="ポータルマップ"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={finishPointer}
        onPointerCancel={finishPointer}
        onPointerLeave={() => {
          if (pointers.current.size === 0) setHover(null);
        }}
      >
        <div
          ref={worldRef}
          className={anim ? "world is-anim" : "world"}
          style={
            view
              ? {
                  width: MAP_SIZE,
                  height: MAP_SIZE,
                  transform: `translate(${view.x}px, ${view.y}px) scale(${view.s})`,
                }
              : undefined
          }
        >
          <img src="/map.png" alt="どんぐリアドベンチャーのマップ" draggable={false} />
          <svg viewBox={`0 0 ${MAP_SIZE} ${MAP_SIZE}`} aria-hidden="true">
            <defs>
              <filter id="warp-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation={7 / s} />
              </filter>
              <filter id="bubble-shadow" x="-40%" y="-40%" width="180%" height="180%">
                <feDropShadow dx="0" dy={2 / s} stdDeviation={2.4 / s} floodColor="#041018" floodOpacity="0.55" />
              </filter>
              {active ? (
                <linearGradient
                  id="warp"
                  gradientUnits="userSpaceOnUse"
                  x1={active.from.x}
                  y1={active.from.y}
                  x2={active.to.x}
                  y2={active.to.y}
                >
                  <stop offset="0%" stopColor="#3ec8ff" />
                  <stop offset="46%" stopColor="#7a78ff" />
                  <stop offset="100%" stopColor="#ff2d55" />
                </linearGradient>
              ) : null}
            </defs>
            {active ? <Warp portal={active} scale={s} /> : null}
          </svg>
        </div>
        <p className="sr-only" aria-live="polite">
          {active ? `ポータル ${active.id}。入口から出口へつながっています。` : ""}
        </p>
      </div>
    </main>
  );
}

function Warp({ portal, scale }: { portal: Portal; scale: number }) {
  const c = arcControl(portal.from, portal.to);
  const d = pathD(portal.from, c, portal.to);
  const sw = 6.5 / scale;
  const dash = 22 / scale;
  const gap = 78 / scale;
  const bs = Math.min(3.2, Math.max(0.55, 1.15 / scale));

  return (
    <g key={portal.id}>
      <path d={d} fill="none" stroke="#041018" strokeWidth={sw + 8 / scale} strokeLinecap="round" opacity={0.72} />
      <path
        className="motion"
        d={d}
        fill="none"
        stroke="url(#warp)"
        strokeWidth={sw + 10 / scale}
        strokeLinecap="round"
        opacity={0.45}
        filter="url(#warp-glow)"
      />
      <path d={d} fill="none" stroke="url(#warp)" strokeWidth={sw} strokeLinecap="round" />
      <path
        className="motion"
        d={d}
        fill="none"
        stroke="#ffffff"
        strokeWidth={Math.max(1.5 / scale, sw * 0.34)}
        strokeLinecap="round"
        opacity={0.92}
        strokeDasharray={`${dash} ${gap}`}
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to={String(-(dash + gap))}
          dur="1.15s"
          repeatCount="indefinite"
        />
      </path>
      <polygon points={arrowPoints(c, portal.to, scale)} fill="#ff2d55" stroke="#ffffff" strokeWidth={1.6 / scale} />
      <EndRing x={portal.from.x} y={portal.from.y} color="#3ec8ff" scale={scale} />
      <EndRing x={portal.to.x} y={portal.to.y} color="#ff2d55" scale={scale} />
      <circle className="motion" r={5.4 / scale} fill="#ffffff" opacity={0.95}>
        <animateMotion dur="1.55s" repeatCount="indefinite" path={d} />
      </circle>
      <circle className="motion" r={3.4 / scale} fill="#ffffff" opacity={0.45}>
        <animateMotion dur="1.55s" begin="-0.42s" repeatCount="indefinite" path={d} />
      </circle>
      <Balloon portal={portal.from} other={portal.to} id={portal.id} kind="in" bubbleScale={bs} />
      <Balloon portal={portal.to} other={portal.from} id={portal.id} kind="out" bubbleScale={bs} />
    </g>
  );
}

function EndRing({ x, y, color, scale }: { x: number; y: number; color: string; scale: number }) {
  const r0 = 7 / scale;
  const r1 = 20 / scale;
  return (
    <g>
      <circle className="motion" cx={x} cy={y} r={r0} fill="none" stroke={color} strokeWidth={2.4 / scale} opacity={0.85}>
        <animate attributeName="r" values={`${r0};${r1}`} dur="1.45s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0" dur="1.45s" repeatCount="indefinite" />
      </circle>
      <circle cx={x} cy={y} r={6.5 / scale} fill={color} stroke="#ffffff" strokeWidth={2 / scale} />
    </g>
  );
}

function Balloon({
  portal,
  other,
  id,
  kind,
  bubbleScale,
}: {
  portal: Pt;
  other: Pt;
  id: number;
  kind: "in" | "out";
  bubbleScale: number;
}) {
  const o = bubbleOffset(portal, other);
  const digits = String(id).length;
  const w = digits >= 3 ? 88 : digits === 2 ? 76 : 64;
  const h = 50;
  const absx = w / 2 - 1;
  const absy = h / 2 - 1;
  const pdx = -o.x;
  const pdy = -o.y;
  const edge = 1 / Math.max(Math.abs(pdx) / absx, Math.abs(pdy) / absy);
  const ex = o.x + pdx * edge;
  const ey = o.y + pdy * edge;
  const len = Math.hypot(pdx, pdy) || 1;
  const nx = -pdy / len;
  const ny = pdx / len;
  const spread = 8;
  const klass = kind === "in" ? "bubble-in" : "bubble-out";

  return (
    <g
      className={klass}
      transform={`translate(${portal.x} ${portal.y}) scale(${bubbleScale})`}
      filter="url(#bubble-shadow)"
    >
      <polygon
        strokeWidth={2.4}
        points={`${ex + nx * spread},${ey + ny * spread} 0,0 ${ex - nx * spread},${ey - ny * spread}`}
      />
      <rect x={o.x - w / 2} y={o.y - h / 2} width={w} height={h} rx={14} strokeWidth={2.6} />
      <text className="bubble-kicker" x={o.x} y={o.y - 10} fontSize={12} textAnchor="middle" dominantBaseline="middle">
        {kind === "in" ? "入口" : "出口"}
      </text>
      <text className="bubble-num" x={o.x} y={o.y + 11} fontSize={22} textAnchor="middle" dominantBaseline="middle">
        {id}
      </text>
    </g>
  );
}
