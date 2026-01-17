import { styles } from "../styles";

export function Cloudflare() {
  return (
    <>
      <h1 style={styles.title}>Cloudflare</h1>
      <p style={styles.subtitle}>Production infrastructure.</p>

      <section style={styles.section}>
        <p style={styles.text}>
          <a href="https://www.cloudflare.com/">Cloudflare</a> provides the
          production infrastructure: Workers for serverless compute, D1 for the
          database, and Pages for static hosting.
        </p>
      </section>
    </>
  );
}
