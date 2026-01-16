export const styles: Record<string, React.CSSProperties> = {
  title: {
    fontSize: "48px",
    fontWeight: 700,
    color: "#111",
    marginBottom: "12px",
    letterSpacing: "-1px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "48px",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: 600,
    color: "#111",
    marginBottom: "16px",
  },
  text: {
    fontSize: "16px",
    color: "#444",
    lineHeight: 1.7,
    marginBottom: "12px",
  },
  inlineCode: {
    background: "#1a1a1a",
    color: "#f8f8f8",
    padding: "4px 8px",
    borderRadius: "6px",
    fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
    fontSize: "14px",
  },
  codeBlock: {
    background: "#1a1a1a",
    padding: "16px 24px",
    borderRadius: "8px",
    marginBottom: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  codeBlockText: {
    color: "#f8f8f8",
    fontSize: "14px",
    fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
    lineHeight: 1.6,
    whiteSpace: "pre-wrap",
    display: "block",
  },
  link: {
    color: "inherit",
    textDecorationLine: "underline",
    textDecorationColor: "rgb(248, 145, 37)",
    textUnderlineOffset: "3px",
  },
  list: {
    fontSize: "16px",
    color: "#444",
    lineHeight: 1.8,
    paddingLeft: "24px",
    marginBottom: "12px",
  },
  stackGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  stackItem: {
    display: "flex",
    gap: "16px",
    alignItems: "baseline",
  },
  stackLabel: {
    fontWeight: 600,
    color: "#111",
    minWidth: "180px",
  },
  stackValue: {
    color: "#444",
  },
};
