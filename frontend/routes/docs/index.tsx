import { MarkdownPage } from "./MarkdownPage";
import deployContent from "./content/deploy.md" with { type: "text" };

export function Deploy() {
  return <MarkdownPage content={deployContent} />;
}
