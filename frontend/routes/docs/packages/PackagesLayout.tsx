import { Outlet, useLocation } from "@tanstack/react-router";
import { AnimatedTabs } from "../../../components/AnimatedTabs";

const packageItems = [
  { path: "/docs/packages/bun", label: "Bun" },
  { path: "/docs/packages/hono", label: "Hono" },
  { path: "/docs/packages/react", label: "React + TanStack" },
  { path: "/docs/packages/zod", label: "Zod" },
  { path: "/docs/packages/drizzle", label: "Drizzle" },
  { path: "/docs/packages/better-auth", label: "Better Auth" },
  { path: "/docs/packages/alchemy", label: "Alchemy" },
  { path: "/docs/packages/cloudflare", label: "Cloudflare" },
];

export function PackagesLayout() {
  const location = useLocation();

  return (
    <div style={styles.container}>
      <AnimatedTabs items={packageItems} currentPath={location.pathname} />
      <Outlet />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
};
