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
import { Start } from "./routes/docs/Start";
import { Deploy } from "./routes/docs/Deploy";
import { Why } from "./routes/docs/Why";
import { Auth } from "./routes/docs/Auth";
import { Infrastructure } from "./routes/docs/Infrastructure";
import { Prioritizing } from "./routes/docs/Prioritizing";
import { Stack } from "./routes/docs/Stack";

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

const authRoute = createRoute({
  getParentRoute: () => docsRoute,
  path: "/auth",
  component: Auth,
});

const infrastructureRoute = createRoute({
  getParentRoute: () => docsRoute,
  path: "/infrastructure",
  component: Infrastructure,
});

const prioritizingRoute = createRoute({
  getParentRoute: () => docsRoute,
  path: "/prioritizing",
  component: Prioritizing,
});

const stackRoute = createRoute({
  getParentRoute: () => docsRoute,
  path: "/stack",
  component: Stack,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  docsRoute.addChildren([
    docsIndexRoute,
    gettingStartedRoute,
    deployRoute,
    whyRoute,
    authRoute,
    infrastructureRoute,
    prioritizingRoute,
    stackRoute,
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
