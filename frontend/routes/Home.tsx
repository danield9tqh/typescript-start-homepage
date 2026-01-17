import { useState } from "react";
import { Header } from "../components/Header";

export function Home() {
  const [copied, setCopied] = useState(false);
  const installCommand = "bun create danield9tqh/typescript-start my-app";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={styles.container}>
      <Header />

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
          <a href="https://www.typescriptlang.org/">
            <img
              src="https://cdn.svgporn.com/logos/typescript-icon.svg"
              alt="TypeScript"
              style={styles.techLogo}
            />
          </a>
          <a href="https://bun.sh/">
            <img
              src="https://cdn.svgporn.com/logos/bun.svg"
              alt="Bun"
              style={styles.techLogo}
            />
          </a>
          <a href="https://hono.dev/">
            <img
              src="https://cdn.svgporn.com/logos/hono.svg"
              alt="Hono"
              style={styles.techLogo}
            />
          </a>
          <a href="https://react.dev/">
            <img
              src="https://cdn.svgporn.com/logos/react.svg"
              alt="React"
              style={styles.techLogo}
            />
          </a>
          <a href="https://www.cloudflare.com/">
            <img
              src="https://cdn.svgporn.com/logos/cloudflare.svg"
              alt="Cloudflare"
              style={styles.techLogoWide}
            />
          </a>
          <a href="https://alchemy.run/">
            <img
              src="https://alchemy.run/_astro/alchemy-logo-light.BAkZH2YP.svg"
              alt="Alchemy"
              style={styles.techLogoWide}
            />
          </a>
          <a href="https://www.better-auth.com/">
            <img
              src="https://svgl.app/library/better-auth_dark.svg"
              alt="Better Auth"
              style={styles.techLogoWide}
            />
          </a>
          <a href="https://zod.dev/">
            <img
              src="https://cdn.svgporn.com/logos/zod.svg"
              alt="Zod"
              style={styles.techLogo}
            />
          </a>
          <a href="https://mui.com/">
            <img
              src="https://cdn.svgporn.com/logos/material-ui.svg"
              alt="Material UI"
              style={styles.techLogo}
            />
          </a>
          <a href="https://tanstack.com/">
            <img
              src="https://svgl.app/library/tanstack.svg"
              alt="TanStack"
              style={styles.techLogo}
            />
          </a>
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
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 26px",
    marginTop: "-88px",
  },
  title: {
    fontSize: "53px",
    fontWeight: 700,
    color: "rgb(248, 145, 37)",
    marginBottom: "13px",
    letterSpacing: "-1px",
  },
  subtitle: {
    fontSize: "20px",
    color: "#666",
    marginBottom: "53px",
    textAlign: "center",
  },
  codeBlock: {
    background: "#1a1a1a",
    padding: "18px 26px",
    borderRadius: "9px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: "0 4px 13px rgba(0,0,0,0.1)",
  },
  code: {
    color: "#f8f8f8",
    fontSize: "15px",
    fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
  },
  copyHint: {
    color: "#888",
    fontSize: "13px",
    whiteSpace: "nowrap",
  },
  tagline: {
    marginTop: "53px",
    fontSize: "15px",
    color: "#999",
  },
  techLogos: {
    display: "flex",
    alignItems: "center",
    gap: "26px",
    marginTop: "35px",
  },
  techLogo: {
    height: "35px",
    opacity: 0.7,
  },
  techLogoWide: {
    height: "31px",
    opacity: 0.7,
  },
};
