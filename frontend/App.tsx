import {
  createRouter,
  createRootRoute,
  createRoute,
  RouterProvider,
  Outlet,
  redirect,
} from "@tanstack/react-router";
import { Global, css } from "@emotion/react";
import { Home } from "./routes/Home";
import { DocsLayout } from "./routes/docs/DocsLayout";
import { Start, Deploy, Why } from "./routes/docs";
import {
  PackagesLayout,
  Bun,
  Hono,
  ReactTanstack,
  Zod,
  Drizzle,
  BetterAuth,
  Alchemy,
  Cloudflare,
} from "./routes/docs/PackagesLayout";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const docsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/docs",
  component: DocsLayout,
});

const docsIndexRoute = createRoute({
  getParentRoute: () => docsRoute,
  path: "/",
  beforeLoad: () => {
    throw redirect({ to: "/docs/getting-started" });
  },
});

const gettingStartedRoute = createRoute({
  getParentRoute: () => docsRoute,
  path: "/getting-started",
  component: Start,
});

const deployRoute = createRoute({
  getParentRoute: () => docsRoute,
  path: "/deploy",
  component: Deploy,
});

const whyRoute = createRoute({
  getParentRoute: () => docsRoute,
  path: "/why",
  component: Why,
});

const packagesRoute = createRoute({
  getParentRoute: () => docsRoute,
  path: "/packages",
  component: PackagesLayout,
});

const packagesIndexRoute = createRoute({
  getParentRoute: () => packagesRoute,
  path: "/",
  beforeLoad: () => {
    throw redirect({ to: "/docs/packages/bun" });
  },
});

const bunRoute = createRoute({
  getParentRoute: () => packagesRoute,
  path: "/bun",
  component: Bun,
});

const honoRoute = createRoute({
  getParentRoute: () => packagesRoute,
  path: "/hono",
  component: Hono,
});

const reactRoute = createRoute({
  getParentRoute: () => packagesRoute,
  path: "/react",
  component: ReactTanstack,
});

const zodRoute = createRoute({
  getParentRoute: () => packagesRoute,
  path: "/zod",
  component: Zod,
});

const drizzleRoute = createRoute({
  getParentRoute: () => packagesRoute,
  path: "/drizzle",
  component: Drizzle,
});

const betterAuthRoute = createRoute({
  getParentRoute: () => packagesRoute,
  path: "/better-auth",
  component: BetterAuth,
});

const alchemyRoute = createRoute({
  getParentRoute: () => packagesRoute,
  path: "/alchemy",
  component: Alchemy,
});

const cloudflareRoute = createRoute({
  getParentRoute: () => packagesRoute,
  path: "/cloudflare",
  component: Cloudflare,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  docsRoute.addChildren([
    docsIndexRoute,
    gettingStartedRoute,
    deployRoute,
    whyRoute,
    packagesRoute.addChildren([
      packagesIndexRoute,
      bunRoute,
      honoRoute,
      reactRoute,
      zodRoute,
      drizzleRoute,
      betterAuthRoute,
      alchemyRoute,
      cloudflareRoute,
    ]),
  ]),
]);

const router = createRouter({ routeTree });

const globalStyles = css({
  a: {
    color: "inherit",
    textDecorationLine: "underline",
    textDecorationColor: "rgb(248, 145, 37)",
    textUnderlineOffset: "3px",
  },
});

export function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
