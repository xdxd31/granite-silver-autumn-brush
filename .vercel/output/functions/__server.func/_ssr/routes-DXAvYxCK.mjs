import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DXAvYxCK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Portal pairs on the どんぐリアドベンチャー map. Pixels match map.png (2000²). */
var MAP_SIZE = 2e3;
function pt(x, y) {
	return {
		x: 182.423 + .106422 * x,
		y: 111.896 + .106554 * y
	};
}
var PORTALS = [
	{
		id: 1,
		from: pt(1429, 7164),
		to: pt(4139, 8543)
	},
	{
		id: 2,
		from: pt(1471, 7936),
		to: pt(7170, 2740)
	},
	{
		id: 3,
		from: pt(1648, 6503),
		to: pt(10463, 6589)
	},
	{
		id: 4,
		from: pt(1692, 5841),
		to: pt(6210, 11997)
	},
	{
		id: 5,
		from: pt(1767, 8736),
		to: pt(10490, 6835)
	},
	{
		id: 6,
		from: pt(1808, 9549),
		to: pt(12236, 12119)
	},
	{
		id: 7,
		from: pt(1861, 9220),
		to: pt(6941, 4150)
	},
	{
		id: 8,
		from: pt(1911, 5055),
		to: pt(14197, 10285)
	},
	{
		id: 9,
		from: pt(2085, 7799),
		to: pt(12453, 10939)
	},
	{
		id: 10,
		from: pt(2468, 10560),
		to: pt(12720, 13068)
	},
	{
		id: 11,
		from: pt(2481, 5710),
		to: pt(2966, 10492)
	},
	{
		id: 12,
		from: pt(2539, 5014),
		to: pt(11158, 8421)
	},
	{
		id: 13,
		from: pt(2572, 9810),
		to: pt(9027, 8737)
	},
	{
		id: 14,
		from: pt(2634, 6494),
		to: pt(10171, 14887)
	},
	{
		id: 15,
		from: pt(2638, 7158),
		to: pt(5704, 2873)
	},
	{
		id: 16,
		from: pt(2938, 2743),
		to: pt(8243, 9430)
	},
	{
		id: 17,
		from: pt(3002, 4379),
		to: pt(12110, 4992)
	},
	{
		id: 18,
		from: pt(3060, 3651),
		to: pt(14267, 8931)
	},
	{
		id: 19,
		from: pt(3151, 8533),
		to: pt(12638, 4685)
	},
	{
		id: 20,
		from: pt(3175, 1941),
		to: pt(12079, 4416)
	},
	{
		id: 21,
		from: pt(3195, 5310),
		to: pt(8299, 10038)
	},
	{
		id: 22,
		from: pt(3281, 7717),
		to: pt(10900, 6194)
	},
	{
		id: 23,
		from: pt(3412, 6815),
		to: pt(12324, 11367)
	},
	{
		id: 24,
		from: pt(3586, 6006),
		to: pt(12005, 13036)
	},
	{
		id: 25,
		from: pt(3661, 4606),
		to: pt(7664, 13055)
	},
	{
		id: 26,
		from: pt(3669, 10320),
		to: pt(7281, 12807)
	},
	{
		id: 27,
		from: pt(3739, 11560),
		to: pt(10869, 5010)
	},
	{
		id: 28,
		from: pt(3751, 12707),
		to: pt(3857, 10358)
	},
	{
		id: 29,
		from: pt(3873, 2595),
		to: pt(14006, 6151)
	},
	{
		id: 30,
		from: pt(4017, 8729),
		to: pt(6093, 12582)
	},
	{
		id: 31,
		from: pt(4058, 3249),
		to: pt(6120, 7478)
	},
	{
		id: 32,
		from: pt(4224, 3906),
		to: pt(13666, 4353)
	},
	{
		id: 33,
		from: pt(4228, 7680),
		to: pt(9126, 15068)
	},
	{
		id: 34,
		from: pt(4230, 6742),
		to: pt(12612, 11221)
	},
	{
		id: 35,
		from: pt(4393, 10729),
		to: pt(12980, 6441)
	},
	{
		id: 36,
		from: pt(4590, 13046),
		to: pt(11609, 7432)
	},
	{
		id: 37,
		from: pt(4593, 4752),
		to: pt(12174, 6437)
	},
	{
		id: 38,
		from: pt(4610, 12095),
		to: pt(13057, 12179)
	},
	{
		id: 39,
		from: pt(4673, 8356),
		to: pt(7516, 14592)
	},
	{
		id: 40,
		from: pt(4689, 9175),
		to: pt(9640, 2855)
	},
	{
		id: 41,
		from: pt(4706, 5568),
		to: pt(3917, 12023)
	},
	{
		id: 42,
		from: pt(4726, 2978),
		to: pt(3833, 7143)
	},
	{
		id: 43,
		from: pt(4914, 13691),
		to: pt(9838, 6854)
	},
	{
		id: 44,
		from: pt(4973, 7198),
		to: pt(14017, 9160)
	},
	{
		id: 45,
		from: pt(5120, 10731),
		to: pt(12211, 3509)
	},
	{
		id: 46,
		from: pt(5374, 6476),
		to: pt(3118, 4549)
	},
	{
		id: 47,
		from: pt(5383, 3205),
		to: pt(9305, 15621)
	},
	{
		id: 48,
		from: pt(5443, 3932),
		to: pt(1812, 6202)
	},
	{
		id: 49,
		from: pt(5476, 8628),
		to: pt(13721, 10426)
	},
	{
		id: 50,
		from: pt(5482, 12403),
		to: pt(9452, 13162)
	},
	{
		id: 51,
		from: pt(5536, 13421),
		to: pt(7192, 8846)
	},
	{
		id: 52,
		from: pt(5537, 7949),
		to: pt(10279, 7771)
	},
	{
		id: 53,
		from: pt(5614, 1515),
		to: pt(2131, 9696)
	},
	{
		id: 54,
		from: pt(5667, 4871),
		to: pt(6727, 11866)
	},
	{
		id: 55,
		from: pt(5699, 14544),
		to: pt(9215, 10135)
	},
	{
		id: 56,
		from: pt(5715, 7315),
		to: pt(8864, 11169)
	},
	{
		id: 57,
		from: pt(5881, 11703),
		to: pt(5041, 2735)
	},
	{
		id: 58,
		from: pt(6002, 6333),
		to: pt(5843, 12789)
	},
	{
		id: 59,
		from: pt(6080, 2960),
		to: pt(8374, 2334)
	},
	{
		id: 60,
		from: pt(6119, 2274),
		to: pt(5857, 13594)
	},
	{
		id: 61,
		from: pt(6161, 9080),
		to: pt(13360, 6528)
	},
	{
		id: 62,
		from: pt(6166, 3667),
		to: pt(12025, 5962)
	},
	{
		id: 63,
		from: pt(6192, 13766),
		to: pt(2895, 5394)
	},
	{
		id: 64,
		from: pt(6320, 8179),
		to: pt(12694, 4939)
	},
	{
		id: 65,
		from: pt(6331, 12700),
		to: pt(4259, 2900)
	},
	{
		id: 66,
		from: pt(6649, 6667),
		to: pt(4071, 12575)
	},
	{
		id: 67,
		from: pt(6652, 4725),
		to: pt(6019, 6761)
	},
	{
		id: 68,
		from: pt(6661, 7453),
		to: pt(6068, 10921)
	},
	{
		id: 69,
		from: pt(6668, 14418),
		to: pt(4347, 11775)
	},
	{
		id: 70,
		from: pt(6759, 2160),
		to: pt(1849, 8264)
	},
	{
		id: 71,
		from: pt(6793, 2892),
		to: pt(8348, 14516)
	},
	{
		id: 72,
		from: pt(6869, 9556),
		to: pt(12095, 8534)
	},
	{
		id: 73,
		from: pt(6883, 15493),
		to: pt(9379, 10593)
	},
	{
		id: 74,
		from: pt(6931, 11782),
		to: pt(5066, 6545)
	},
	{
		id: 75,
		from: pt(7006, 12444),
		to: pt(7274, 2300)
	},
	{
		id: 76,
		from: pt(7119, 13180),
		to: pt(4148, 11734)
	},
	{
		id: 77,
		from: pt(7201, 8628),
		to: pt(6337, 4474)
	},
	{
		id: 78,
		from: pt(7341, 13940),
		to: pt(8222, 10580)
	},
	{
		id: 79,
		from: pt(7367, 3859),
		to: pt(3663, 4887)
	},
	{
		id: 80,
		from: pt(7404, 7679),
		to: pt(9684, 11938)
	},
	{
		id: 81,
		from: pt(7508, 10949),
		to: pt(6487, 2494)
	},
	{
		id: 82,
		from: pt(7520, 6885),
		to: pt(5941, 2695)
	},
	{
		id: 83,
		from: pt(7564, 3109),
		to: pt(10181, 5773)
	},
	{
		id: 84,
		from: pt(7587, 10299),
		to: pt(4944, 8218)
	},
	{
		id: 85,
		from: pt(7650, 9248),
		to: pt(13118, 7799)
	},
	{
		id: 86,
		from: pt(7668, 14951),
		to: pt(4422, 12817)
	},
	{
		id: 87,
		from: pt(7827, 13250),
		to: pt(7665, 9919)
	},
	{
		id: 88,
		from: pt(7913, 2490),
		to: pt(12019, 4702)
	},
	{
		id: 89,
		from: pt(8043, 7871),
		to: pt(2314, 7071)
	},
	{
		id: 90,
		from: pt(8206, 7163),
		to: pt(8905, 13409)
	},
	{
		id: 91,
		from: pt(8438, 10806),
		to: pt(5513, 11485)
	},
	{
		id: 92,
		from: pt(8454, 3539),
		to: pt(13743, 7178)
	},
	{
		id: 93,
		from: pt(8488, 9623),
		to: pt(5286, 7713)
	},
	{
		id: 94,
		from: pt(8551, 14486),
		to: pt(5454, 11968)
	},
	{
		id: 95,
		from: pt(8568, 12441),
		to: pt(11611, 6192)
	},
	{
		id: 96,
		from: pt(8586, 2876),
		to: pt(3960, 2858)
	},
	{
		id: 97,
		from: pt(8641, 11524),
		to: pt(10424, 14725)
	},
	{
		id: 98,
		from: pt(8715, 8090),
		to: pt(3494, 7254)
	},
	{
		id: 99,
		from: pt(9115, 15480),
		to: pt(4730, 7743)
	},
	{
		id: 100,
		from: pt(9179, 6847),
		to: pt(1540, 6034)
	},
	{
		id: 101,
		from: pt(9197, 13214),
		to: pt(4907, 4833)
	},
	{
		id: 102,
		from: pt(9216, 9910),
		to: pt(6815, 8914)
	},
	{
		id: 103,
		from: pt(9323, 2655),
		to: pt(10678, 14389)
	},
	{
		id: 104,
		from: pt(9338, 11719),
		to: pt(5696, 12064)
	},
	{
		id: 105,
		from: pt(9361, 14057),
		to: pt(10444, 7978)
	},
	{
		id: 106,
		from: pt(9380, 14727),
		to: pt(5439, 10700)
	},
	{
		id: 107,
		from: pt(9428, 8939),
		to: pt(8209, 3525)
	},
	{
		id: 108,
		from: pt(9543, 3291),
		to: pt(11381, 13723)
	},
	{
		id: 109,
		from: pt(9618, 10630),
		to: pt(6001, 7674)
	},
	{
		id: 110,
		from: pt(9844, 13164),
		to: pt(13989, 8626)
	},
	{
		id: 111,
		from: pt(9888, 5776),
		to: pt(9077, 10946)
	},
	{
		id: 112,
		from: pt(9890, 15365),
		to: pt(7775, 13654)
	},
	{
		id: 113,
		from: pt(9975, 6569),
		to: pt(6463, 7518)
	},
	{
		id: 114,
		from: pt(10075, 11614),
		to: pt(7089, 13725)
	},
	{
		id: 115,
		from: pt(10127, 7238),
		to: pt(12420, 12654)
	},
	{
		id: 116,
		from: pt(10163, 14657),
		to: pt(5992, 7122)
	},
	{
		id: 117,
		from: pt(10233, 13902),
		to: pt(5532, 13817)
	},
	{
		id: 118,
		from: pt(10464, 3262),
		to: pt(5988, 8679)
	},
	{
		id: 119,
		from: pt(10559, 5919),
		to: pt(9305, 13508)
	},
	{
		id: 120,
		from: pt(10639, 8058),
		to: pt(9898, 11907)
	},
	{
		id: 121,
		from: pt(10778, 6544),
		to: pt(6218, 6570)
	},
	{
		id: 122,
		from: pt(10820, 12935),
		to: pt(4587, 12277)
	},
	{
		id: 123,
		from: pt(10830, 2622),
		to: pt(11997, 6826)
	},
	{
		id: 124,
		from: pt(10920, 7173),
		to: pt(13333, 4405)
	},
	{
		id: 125,
		from: pt(10951, 5234),
		to: pt(13963, 9792)
	},
	{
		id: 126,
		from: pt(10992, 12112),
		to: pt(6107, 3273)
	},
	{
		id: 127,
		from: pt(11010, 13582),
		to: pt(4120, 13249)
	},
	{
		id: 128,
		from: pt(11069, 14230),
		to: pt(6827, 4183)
	},
	{
		id: 129,
		from: pt(11308, 5860),
		to: pt(4479, 3093)
	},
	{
		id: 130,
		from: pt(11474, 11132),
		to: pt(8300, 2895)
	},
	{
		id: 131,
		from: pt(11499, 7832),
		to: pt(11157, 13141)
	},
	{
		id: 132,
		from: pt(11501, 3106),
		to: pt(5110, 6322)
	},
	{
		id: 133,
		from: pt(11597, 8628),
		to: pt(8649, 10253)
	},
	{
		id: 134,
		from: pt(11611, 5217),
		to: pt(2292, 6638)
	},
	{
		id: 135,
		from: pt(11695, 6956),
		to: pt(13548, 9620)
	},
	{
		id: 136,
		from: pt(11794, 14117),
		to: pt(6184, 13034)
	},
	{
		id: 137,
		from: pt(11802, 12850),
		to: pt(7846, 14385)
	},
	{
		id: 138,
		from: pt(11982, 10391),
		to: pt(11528, 8255)
	},
	{
		id: 139,
		from: pt(12111, 4155),
		to: pt(8855, 9527)
	},
	{
		id: 140,
		from: pt(12212, 11134),
		to: pt(5819, 13292)
	},
	{
		id: 141,
		from: pt(12262, 7682),
		to: pt(2438, 6110)
	},
	{
		id: 142,
		from: pt(12327, 11848),
		to: pt(14287, 5180)
	},
	{
		id: 143,
		from: pt(12365, 5897),
		to: pt(7370, 2797)
	},
	{
		id: 144,
		from: pt(12381, 3151),
		to: pt(14077, 5606)
	},
	{
		id: 145,
		from: pt(12432, 13841),
		to: pt(9579, 6836)
	},
	{
		id: 146,
		from: pt(12509, 8487),
		to: pt(6334, 13337)
	},
	{
		id: 147,
		from: pt(12822, 3963),
		to: pt(3985, 13071)
	},
	{
		id: 148,
		from: pt(12849, 12606),
		to: pt(4017, 7615)
	},
	{
		id: 149,
		from: pt(12977, 6943),
		to: pt(4263, 8832)
	},
	{
		id: 150,
		from: pt(13018, 6228),
		to: pt(12045, 13881)
	},
	{
		id: 151,
		from: pt(13141, 8214),
		to: pt(12251, 5339)
	},
	{
		id: 152,
		from: pt(13145, 4686),
		to: pt(3025, 7448)
	},
	{
		id: 153,
		from: pt(13243, 11136),
		to: pt(4257, 8325)
	},
	{
		id: 154,
		from: pt(13401, 5391),
		to: pt(10183, 14411)
	},
	{
		id: 155,
		from: pt(13446, 11953),
		to: pt(2753, 10030)
	},
	{
		id: 156,
		from: pt(13617, 7003),
		to: pt(8626, 13901)
	},
	{
		id: 157,
		from: pt(13777, 9382),
		to: pt(4265, 7895)
	},
	{
		id: 158,
		from: pt(13796, 10234),
		to: pt(4517, 4138)
	},
	{
		id: 159,
		from: pt(13806, 8745),
		to: pt(8027, 9134)
	},
	{
		id: 160,
		from: pt(13808, 6274),
		to: pt(10493, 2935)
	},
	{
		id: 161,
		from: pt(13868, 4553),
		to: pt(5037, 3710)
	},
	{
		id: 162,
		from: pt(14022, 7731),
		to: pt(5317, 5007)
	},
	{
		id: 163,
		from: pt(14099, 5395),
		to: pt(6894, 13396)
	},
	{
		id: 164,
		from: pt(14111, 10899),
		to: pt(3944, 3819)
	},
	{
		id: 165,
		from: pt(14452, 9979),
		to: pt(11349, 7190)
	}
];
var PORTAL_ENDS = PORTALS.flatMap((p) => [{
	id: p.id,
	x: p.from.x,
	y: p.from.y
}, {
	id: p.id,
	x: p.to.x,
	y: p.to.y
}]);
var MAX_SCALE = 8;
var HIT = 22;
function fitView(vw, vh) {
	const s = Math.min(vw / MAP_SIZE, vh / MAP_SIZE);
	return {
		s,
		x: (vw - MAP_SIZE * s) / 2,
		y: (vh - MAP_SIZE * s) / 2
	};
}
function clampView(v, vw, vh) {
	const mw = MAP_SIZE * v.s;
	const mh = MAP_SIZE * v.s;
	const pad = 28;
	let x = v.x;
	let y = v.y;
	if (mw <= vw) x = (vw - mw) / 2;
	else x = Math.min(pad, Math.max(vw - mw - pad, v.x));
	if (mh <= vh) y = (vh - mh) / 2;
	else y = Math.min(pad, Math.max(vh - mh - pad, v.y));
	return {
		x,
		y,
		s: v.s
	};
}
function sameView(a, b) {
	return Math.abs(a.x - b.x) < .4 && Math.abs(a.y - b.y) < .4 && Math.abs(a.s - b.s) < 4e-4;
}
function arcControl(a, b) {
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
	const bulge = Math.min(Math.max(len * .28, 56), 320);
	const inside = (x, y) => x > 48 && x < 1952 && y > 36 && y < 1964;
	const at = (f, flip) => ({
		x: mx + (flip ? -px : px) * bulge * f,
		y: my + (flip ? -py : py) * bulge * f
	});
	for (const f of [
		1,
		.72,
		.46
	]) {
		const p = at(f, false);
		if (inside(p.x, p.y)) return p;
	}
	for (const f of [.85, .5]) {
		const p = at(f, true);
		if (inside(p.x, p.y)) return p;
	}
	return at(.35, false);
}
function pathD(a, c, b) {
	return `M ${a.x} ${a.y} Q ${c.x} ${c.y} ${b.x} ${b.y}`;
}
function arrowPoints(ctrl, end, s) {
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
function bubbleOffset(portal, other) {
	let dx = portal.x - other.x;
	let dy = portal.y - other.y;
	let len = Math.hypot(dx, dy) || 1;
	dx /= len;
	dy /= len;
	dy -= .42;
	len = Math.hypot(dx, dy) || 1;
	dx /= len;
	dy /= len;
	const dist = 74;
	const ox = dx * dist;
	const oy = dy * dist;
	const room = (x, y) => Math.min(x - 28, MAP_SIZE - 28 - x, y - 28, MAP_SIZE - 28 - y);
	if (room(portal.x + ox, portal.y + oy) >= room(portal.x - ox, portal.y - oy)) return {
		x: ox,
		y: oy
	};
	return {
		x: -ox,
		y: -oy
	};
}
var byId = new Map(PORTALS.map((p) => [p.id, p]));
function PortalMap() {
	const vpRef = (0, import_react.useRef)(null);
	const worldRef = (0, import_react.useRef)(null);
	const [view, setView] = (0, import_react.useState)(null);
	const [anim, setAnim] = (0, import_react.useState)(false);
	const [panning, setPanning] = (0, import_react.useState)(false);
	const [hoverId, setHoverId] = (0, import_react.useState)(null);
	const [pinnedId, setPinnedId] = (0, import_react.useState)(null);
	const viewRef = (0, import_react.useRef)(null);
	const userMoved = (0, import_react.useRef)(false);
	const animOn = (0, import_react.useRef)(false);
	const pointers = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const gesture = (0, import_react.useRef)({ kind: "idle" });
	const hoverRef = (0, import_react.useRef)(null);
	const animTimer = (0, import_react.useRef)(0);
	viewRef.current = view;
	function setAnimated(on) {
		if (animOn.current === on) return;
		animOn.current = on;
		setAnim(on);
	}
	function viewportSize() {
		const r = vpRef.current.getBoundingClientRect();
		return {
			w: r.width,
			h: r.height,
			rect: r
		};
	}
	function commit(next, animate) {
		const { w, h } = viewportSize();
		const fit = fitView(w, h);
		let resolved = next;
		if (next.s <= fit.s * 1.02) {
			resolved = fit;
			userMoved.current = false;
		} else {
			resolved = clampView(next, w, h);
			userMoved.current = true;
		}
		setAnimated(animate);
		setView((cur) => cur && sameView(cur, resolved) ? cur : resolved);
		if (animate) {
			window.clearTimeout(animTimer.current);
			animTimer.current = window.setTimeout(() => setAnimated(false), 300);
		}
	}
	function zoomAt(clientX, clientY, factor, animate) {
		const v = viewRef.current;
		if (!v || !vpRef.current) return;
		const { w, h, rect } = viewportSize();
		const fit = fitView(w, h);
		const ns = Math.min(MAX_SCALE, Math.max(fit.s, v.s * factor));
		const mx = clientX - rect.left;
		const my = clientY - rect.top;
		const k = ns / v.s;
		commit({
			x: mx - (mx - v.x) * k,
			y: my - (my - v.y) * k,
			s: ns
		}, animate);
	}
	function clientToMap(clientX, clientY) {
		const r = worldRef.current.getBoundingClientRect();
		return {
			x: (clientX - r.left) / r.width * MAP_SIZE,
			y: (clientY - r.top) / r.height * MAP_SIZE
		};
	}
	function pick(clientX, clientY, maxDist) {
		const p = clientToMap(clientX, clientY);
		let best = null;
		for (const e of PORTAL_ENDS) {
			const dx = p.x - e.x;
			const dy = p.y - e.y;
			const dyLabel = p.y - (e.y - 12);
			const d = Math.sqrt(Math.min(dx * dx + dy * dy, dx * dx + dyLabel * dyLabel));
			if (d <= maxDist && (!best || d < best.dist)) best = {
				id: e.id,
				dist: d
			};
		}
		return best;
	}
	function setHover(id) {
		if (hoverRef.current === id) return;
		hoverRef.current = id;
		setHoverId(id);
	}
	(0, import_react.useLayoutEffect)(() => {
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
	(0, import_react.useEffect)(() => {
		const el = vpRef.current;
		if (!el) return;
		const onWheel = (e) => {
			e.preventDefault();
			let dy = e.deltaY;
			if (e.deltaMode === 1) dy *= 16;
			if (e.deltaMode === 2) dy *= 400;
			zoomAt(e.clientX, e.clientY, Math.exp(-dy * .0016), false);
		};
		el.addEventListener("wheel", onWheel, { passive: false });
		return () => el.removeEventListener("wheel", onWheel);
	}, []);
	function onPointerDown(e) {
		if (e.button !== 0 && e.pointerType === "mouse") return;
		e.currentTarget.setPointerCapture(e.pointerId);
		pointers.current.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		});
		if (pointers.current.size >= 2) {
			const pts = [...pointers.current.values()];
			const a = pts[0];
			const b = pts[1];
			const v = viewRef.current;
			if (!v) return;
			gesture.current = {
				kind: "pinch",
				dist: Math.hypot(a.x - b.x, a.y - b.y) || 1,
				s: v.s,
				mx: (a.x + b.x) / 2,
				my: (a.y + b.y) / 2,
				vx: v.x,
				vy: v.y
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
			pointerType: e.pointerType
		};
	}
	function onPointerMove(e) {
		if (!pointers.current.has(e.pointerId)) {
			if (e.pointerType === "mouse" && e.buttons === 0 && viewRef.current) setHover(pick(e.clientX, e.clientY, HIT)?.id ?? null);
			return;
		}
		pointers.current.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		});
		const g = gesture.current;
		if (g.kind === "pinch" && pointers.current.size >= 2 && viewRef.current) {
			const pts = [...pointers.current.values()];
			const a = pts[0];
			const b = pts[1];
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
			commit({
				x: nx - imgX * ns,
				y: ny - imgY * ns,
				s: ns
			}, false);
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
				const next = clampView({
					x: v.x + dx,
					y: v.y + dy,
					s: v.s
				}, w, h);
				if (next.s > fitView(w, h).s * 1.02) userMoved.current = true;
				setAnimated(false);
				setView((cur) => cur && sameView(cur, next) ? cur : next);
			}
		}
	}
	function finishPointer(e) {
		const g = gesture.current;
		pointers.current.delete(e.pointerId);
		if (g.kind === "pan" && g.id === e.pointerId && !g.moved) {
			const v = viewRef.current;
			const hit = v ? pick(e.clientX, e.clientY, HIT) : null;
			const touch = g.pointerType !== "mouse";
			if (touch && v && v.s < .9) zoomAt(e.clientX, e.clientY, Math.max(2.4, 1 / v.s), true);
			else if (hit) setPinnedId((cur) => cur === hit.id ? null : hit.id);
			else if (!touch) setPinnedId(null);
			else if (v && v.s < 4) zoomAt(e.clientX, e.clientY, 2, true);
			else setPinnedId(null);
		}
		if (pointers.current.size === 0) {
			gesture.current = { kind: "idle" };
			setPanning(false);
			if (e.pointerType === "mouse") setHover(pick(e.clientX, e.clientY, HIT)?.id ?? null);
		} else if (g.kind === "pinch" && pointers.current.size === 1) {
			const [id, pos] = [...pointers.current.entries()][0];
			gesture.current = {
				kind: "pan",
				id,
				x0: pos.x,
				y0: pos.y,
				lx: pos.x,
				ly: pos.y,
				moved: true,
				pointerType: "touch"
			};
		}
	}
	const shownId = hoverId ?? pinnedId;
	const active = shownId != null ? byId.get(shownId) : void 0;
	const s = view?.s ?? 1;
	const vpClass = [
		"viewport",
		view ? "ready" : "",
		panning ? "is-panning" : "",
		!panning && hoverId != null ? "has-hit" : ""
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "h-full w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "sr-only",
			children: "どんぐリアドベンチャー"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: vpRef,
			className: vpClass,
			role: "application",
			"aria-label": "ポータルマップ",
			onPointerDown,
			onPointerMove,
			onPointerUp: finishPointer,
			onPointerCancel: finishPointer,
			onPointerLeave: () => {
				if (pointers.current.size === 0) setHover(null);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: worldRef,
				className: anim ? "world is-anim" : "world",
				style: view ? {
					width: MAP_SIZE,
					height: MAP_SIZE,
					transform: `translate(${view.x}px, ${view.y}px) scale(${view.s})`
				} : void 0,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/map.png",
					alt: "どんぐリアドベンチャーのマップ",
					draggable: false
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: `0 0 ${MAP_SIZE} ${MAP_SIZE}`,
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
							id: "warp-glow",
							x: "-30%",
							y: "-30%",
							width: "160%",
							height: "160%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", { stdDeviation: 7 / s })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
							id: "bubble-shadow",
							x: "-40%",
							y: "-40%",
							width: "180%",
							height: "180%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", {
								dx: "0",
								dy: 2 / s,
								stdDeviation: 2.4 / s,
								floodColor: "#041018",
								floodOpacity: "0.55"
							})
						}),
						active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "warp",
							gradientUnits: "userSpaceOnUse",
							x1: active.from.x,
							y1: active.from.y,
							x2: active.to.x,
							y2: active.to.y,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "#3ec8ff"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "46%",
									stopColor: "#7a78ff"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "#ff2d55"
								})
							]
						}) : null
					] }), active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Warp, {
						portal: active,
						scale: s
					}) : null]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sr-only",
				"aria-live": "polite",
				children: active ? `ポータル ${active.id}。入口から出口へつながっています。` : ""
			})]
		})]
	});
}
function Warp({ portal, scale }) {
	const c = arcControl(portal.from, portal.to);
	const d = pathD(portal.from, c, portal.to);
	const sw = 6.5 / scale;
	const dash = 22 / scale;
	const gap = 78 / scale;
	const bs = Math.min(3.2, Math.max(.55, 1.15 / scale));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d,
			fill: "none",
			stroke: "#041018",
			strokeWidth: sw + 8 / scale,
			strokeLinecap: "round",
			opacity: .72
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			className: "motion",
			d,
			fill: "none",
			stroke: "url(#warp)",
			strokeWidth: sw + 10 / scale,
			strokeLinecap: "round",
			opacity: .45,
			filter: "url(#warp-glow)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d,
			fill: "none",
			stroke: "url(#warp)",
			strokeWidth: sw,
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			className: "motion",
			d,
			fill: "none",
			stroke: "#ffffff",
			strokeWidth: Math.max(1.5 / scale, sw * .34),
			strokeLinecap: "round",
			opacity: .92,
			strokeDasharray: `${dash} ${gap}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
				attributeName: "stroke-dashoffset",
				from: "0",
				to: String(-(dash + gap)),
				dur: "1.15s",
				repeatCount: "indefinite"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: arrowPoints(c, portal.to, scale),
			fill: "#ff2d55",
			stroke: "#ffffff",
			strokeWidth: 1.6 / scale
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EndRing, {
			x: portal.from.x,
			y: portal.from.y,
			color: "#3ec8ff",
			scale
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EndRing, {
			x: portal.to.x,
			y: portal.to.y,
			color: "#ff2d55",
			scale
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			className: "motion",
			r: 5.4 / scale,
			fill: "#ffffff",
			opacity: .95,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateMotion", {
				dur: "1.55s",
				repeatCount: "indefinite",
				path: d
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			className: "motion",
			r: 3.4 / scale,
			fill: "#ffffff",
			opacity: .45,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateMotion", {
				dur: "1.55s",
				begin: "-0.42s",
				repeatCount: "indefinite",
				path: d
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Balloon, {
			portal: portal.from,
			other: portal.to,
			id: portal.id,
			kind: "in",
			bubbleScale: bs
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Balloon, {
			portal: portal.to,
			other: portal.from,
			id: portal.id,
			kind: "out",
			bubbleScale: bs
		})
	] }, portal.id);
}
function EndRing({ x, y, color, scale }) {
	const r0 = 7 / scale;
	const r1 = 20 / scale;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("circle", {
		className: "motion",
		cx: x,
		cy: y,
		r: r0,
		fill: "none",
		stroke: color,
		strokeWidth: 2.4 / scale,
		opacity: .85,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
			attributeName: "r",
			values: `${r0};${r1}`,
			dur: "1.45s",
			repeatCount: "indefinite"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
			attributeName: "opacity",
			values: "0.8;0",
			dur: "1.45s",
			repeatCount: "indefinite"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: x,
		cy: y,
		r: 6.5 / scale,
		fill: color,
		stroke: "#ffffff",
		strokeWidth: 2 / scale
	})] });
}
function Balloon({ portal, other, id, kind, bubbleScale }) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		className: kind === "in" ? "bubble-in" : "bubble-out",
		transform: `translate(${portal.x} ${portal.y}) scale(${bubbleScale})`,
		filter: "url(#bubble-shadow)",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				strokeWidth: 2.4,
				points: `${ex + nx * spread},${ey + ny * spread} 0,0 ${ex - nx * spread},${ey - ny * spread}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: o.x - w / 2,
				y: o.y - h / 2,
				width: w,
				height: h,
				rx: 14,
				strokeWidth: 2.6
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				className: "bubble-kicker",
				x: o.x,
				y: o.y - 10,
				fontSize: 12,
				textAnchor: "middle",
				dominantBaseline: "middle",
				children: kind === "in" ? "入口" : "出口"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				className: "bubble-num",
				x: o.x,
				y: o.y + 11,
				fontSize: 22,
				textAnchor: "middle",
				dominantBaseline: "middle",
				children: id
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalMap, {});
}
//#endregion
export { Home as component };
