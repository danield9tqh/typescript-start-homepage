import { MarkdownPage } from "../MarkdownPage";
import alchemyContent from "../content/packages/alchemy.md" with { type: "text" };
import betterAuthContent from "../content/packages/better-auth.md" with { type: "text" };
import bunContent from "../content/packages/bun.md" with { type: "text" };
import cloudflareContent from "../content/packages/cloudflare.md" with { type: "text" };
import drizzleContent from "../content/packages/drizzle.md" with { type: "text" };
import honoContent from "../content/packages/hono.md" with { type: "text" };
import reactTanstackContent from "../content/packages/react-tanstack.md" with { type: "text" };
import zodContent from "../content/packages/zod.md" with { type: "text" };

export function Alchemy() {
  return <MarkdownPage content={alchemyContent} />;
}

export function BetterAuth() {
  return <MarkdownPage content={betterAuthContent} />;
}

export function Bun() {
  return <MarkdownPage content={bunContent} />;
}

export function Cloudflare() {
  return <MarkdownPage content={cloudflareContent} />;
}

export function Drizzle() {
  return <MarkdownPage content={drizzleContent} />;
}

export function Hono() {
  return <MarkdownPage content={honoContent} />;
}

export function ReactTanstack() {
  return <MarkdownPage content={reactTanstackContent} />;
}

export function Zod() {
  return <MarkdownPage content={zodContent} />;
}
