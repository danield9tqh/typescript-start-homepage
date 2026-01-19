import Markdown from "react-markdown";
import { CodeBlock } from "../../components/CodeBlock";
import { styles } from "./styles";

interface MarkdownPageProps {
  content: string;
}

export function MarkdownPage({ content }: MarkdownPageProps) {
  return (
    <Markdown
      components={{
        h1: ({ children }) => <h1 style={styles.title}>{children}</h1>,
        h2: ({ children }) => (
          <h2 style={styles.sectionTitleLarge}>{children}</h2>
        ),
        h3: ({ children }) => <h3 style={styles.sectionTitle}>{children}</h3>,
        p: ({ children }) => <p style={styles.text}>{children}</p>,
        a: ({ href, children }) => (
          <a href={href} style={styles.link}>
            {children}
          </a>
        ),
        code: ({ className, children }) => {
          const isBlock = className?.includes("language-");
          if (isBlock) {
            return <CodeBlock code={String(children).trim()} />;
          }
          return <code style={styles.inlineCode}>{children}</code>;
        },
        pre: ({ children }) => <>{children}</>,
        ul: ({ children }) => <ul style={styles.list}>{children}</ul>,
        ol: ({ children }) => <ol style={styles.list}>{children}</ol>,
        li: ({ children }) => <li style={styles.listItem}>{children}</li>,
      }}
    >
      {content}
    </Markdown>
  );
}
