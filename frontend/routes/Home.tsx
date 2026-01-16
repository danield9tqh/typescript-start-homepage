import { useState } from "react";

export function Home() {
  const [copied, setCopied] = useState(false);
  const installCommand =
    "bun create github.com/danield9tqh/bun-starter-app my-app";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={styles.container}>
      <header style={{ ...styles.header, position: "relative", zIndex: 1 }}>
        <a href="/docs" style={styles.docsLink}>
          Docs
        </a>
      </header>

      <main style={styles.main}>
        <h1 style={styles.title}>Typescript Start</h1>
        <p style={styles.subtitle}>
          Full-stack starter template with Bun, Hono, and React
        </p>

        <div style={styles.codeBlock} onClick={handleCopy}>
          <code style={styles.code}>{installCommand}</code>
          <span style={styles.copyHint}>
            {copied ? "Copied!" : "Click to copy"}
          </span>
        </div>

        <p style={styles.tagline}>
          All local. All typescript. All open source. Deploy to Cloudflare in
          minutes
        </p>

        <div style={styles.techLogos}>
          <img
            src="https://cdn.svgporn.com/logos/typescript-icon.svg"
            alt="TypeScript"
            style={styles.techLogo}
          />
          <img
            src="https://cdn.svgporn.com/logos/bun.svg"
            alt="Bun"
            style={styles.techLogo}
          />
          <img
            src="https://cdn.svgporn.com/logos/hono.svg"
            alt="Hono"
            style={styles.techLogo}
          />
          <img
            src="https://cdn.svgporn.com/logos/react.svg"
            alt="React"
            style={styles.techLogo}
          />
          <img
            src="https://cdn.svgporn.com/logos/cloudflare.svg"
            alt="Cloudflare"
            style={styles.techLogoWide}
          />
          <img
            src="https://alchemy.run/_astro/alchemy-logo-light.BAkZH2YP.svg"
            alt="Alchemy"
            style={styles.techLogoWide}
          />
        </div>
      </main>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "#fdf6ed",
  },
  header: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "24px 32px",
  },
  docsLink: {
    color: "#666",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 500,
    padding: "8px 16px",
    borderRadius: "6px",
    transition: "color 0.2s",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 24px",
    marginTop: "-80px",
  },
  title: {
    fontSize: "48px",
    fontWeight: 700,
    color: "rgb(248, 145, 37)",
    marginBottom: "12px",
    letterSpacing: "-1px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "48px",
    textAlign: "center",
  },
  codeBlock: {
    background: "#1a1a1a",
    padding: "16px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  code: {
    color: "#f8f8f8",
    fontSize: "14px",
    fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
  },
  copyHint: {
    color: "#888",
    fontSize: "12px",
    whiteSpace: "nowrap",
  },
  tagline: {
    marginTop: "48px",
    fontSize: "14px",
    color: "#999",
  },
  techLogos: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    marginTop: "32px",
  },
  techLogo: {
    height: "32px",
    opacity: 0.7,
  },
  techLogoWide: {
    height: "28px",
    opacity: 0.7,
  },
};
