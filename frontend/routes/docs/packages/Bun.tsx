import { styles } from "../styles";

export function Bun() {
  return (
    <>
      <h1 style={styles.title}>Bun</h1>
      <p style={styles.subtitle}>The development runtime.</p>

      <section style={styles.section}>
        <p style={styles.text}>
          <a href="https://bun.sh/">Bun</a> is the development runtime. It
          handles bundling, running TypeScript, and package management. In
          production, the backend runs on Cloudflare Workers.
        </p>
      </section>
    </>
  );
}
