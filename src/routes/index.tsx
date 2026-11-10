import { createFileRoute } from "@tanstack/react-router";
import { PortalMap } from "@/components/portal-map";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <PortalMap />;
}
