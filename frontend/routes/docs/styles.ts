export const styles: Record<string, React.CSSProperties> = {
  title: {
    fontSize: "53px",
    fontWeight: 700,
    color: "#111",
    marginBottom: "13px",
    letterSpacing: "-1px",
  },
  subtitle: {
    fontSize: "20px",
    color: "#666",
    marginBottom: "53px",
  },
  section: {
    marginBottom: "44px",
  },
  sectionTitle: {
    fontSize: "26px",
    fontWeight: 600,
    color: "#111",
    marginBottom: "18px",
  },
  text: {
    fontSize: "18px",
    color: "#444",
    lineHeight: 1.7,
    marginBottom: "13px",
  },
  inlineCode: {
    background: "#1a1a1a",
    color: "#f8f8f8",
    padding: "4px 9px",
    borderRadius: "7px",
    fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
    fontSize: "15px",
  },
  codeBlock: {
    background: "#1a1a1a",
    padding: "18px 26px",
    borderRadius: "9px",
    marginBottom: "13px",
    boxShadow: "0 4px 13px rgba(0,0,0,0.1)",
  },
  codeBlockText: {
    color: "#f8f8f8",
    fontSize: "15px",
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
    fontSize: "18px",
    color: "#444",
    lineHeight: 1.8,
    paddingLeft: "26px",
    marginBottom: "13px",
  },
  stackGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "13px",
  },
  stackItem: {
    display: "flex",
    gap: "18px",
    alignItems: "baseline",
  },
  stackLabel: {
    fontWeight: 600,
    color: "#111",
    minWidth: "198px",
  },
  stackValue: {
    color: "#444",
  },
};
