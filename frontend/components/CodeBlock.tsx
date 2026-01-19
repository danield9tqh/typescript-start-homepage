import { useState } from "react";

interface CodeBlockProps {
  code: string;
  children?: React.ReactNode;
}

export function CodeBlock({ code, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={styles.codeBlock} onClick={handleCopy}>
      <code style={styles.codeBlockText}>{children ?? code}</code>
      <span style={styles.copyHint}>{copied ? "Copied!" : "Click to copy"}</span>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  codeBlock: {
    background: "#1a1a1a",
    padding: "18px 26px",
    borderRadius: "9px",
    marginBottom: "13px",
    boxShadow: "0 4px 13px rgba(0,0,0,0.1)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "18px",
  },
  codeBlockText: {
    color: "#f8f8f8",
    fontSize: "15px",
    fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
    lineHeight: 1.6,
    whiteSpace: "pre-wrap",
  },
  copyHint: {
    color: "#888",
    fontSize: "13px",
    whiteSpace: "nowrap",
  },
};
