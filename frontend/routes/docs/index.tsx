import { MarkdownPage } from "./MarkdownPage";
import deployContent from "./content/deploy.md" with { type: "text" };
import whyContent from "./content/why.md" with { type: "text" };
import gettingStartedContent from "./content/getting-started.md" with { type: "text" };
import architectureContent from "./content/architecture.md" with { type: "text" };

export function Deploy() {
  return <MarkdownPage content={deployContent} />;
}

export function Why() {
  return <MarkdownPage content={whyContent} />;
}

export function Start() {
  return <MarkdownPage content={gettingStartedContent} />;
}

export function Architecture() {
  return <MarkdownPage content={architectureContent} />;
}
