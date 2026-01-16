import { styles } from "./styles";

export function Stack() {
  return (
    <>
      <h1 style={styles.title}>Stack</h1>
      <p style={styles.subtitle}>The technologies powering this template.</p>

      <section style={styles.section}>
        <div style={styles.stackGrid}>
          <div style={styles.stackItem}>
            <span style={styles.stackLabel}>Backend</span>
            <span style={styles.stackValue}>
              Hono with Zod validation, type-safe client
            </span>
          </div>
          <div style={styles.stackItem}>
            <span style={styles.stackLabel}>Frontend</span>
            <span style={styles.stackValue}>React 19 + TanStack Router</span>
          </div>
          <div style={styles.stackItem}>
            <span style={styles.stackLabel}>Dev Runtime</span>
            <span style={styles.stackValue}>Bun</span>
          </div>
          <div style={styles.stackItem}>
            <span style={styles.stackLabel}>Infrastructure</span>
            <span style={styles.stackValue}>
              Cloudflare Workers, Cloudflare D1 Database, Alchemy IaC
            </span>
          </div>
          <div style={styles.stackItem}>
            <span style={styles.stackLabel}>Auth</span>
            <span style={styles.stackValue}>BetterAuth</span>
          </div>
          <div style={styles.stackItem}>
            <span style={styles.stackLabel}>SQL Schema Management</span>
            <span style={styles.stackValue}>Drizzle</span>
          </div>
          <div style={styles.stackItem}>
            <span style={styles.stackLabel}>Type Input Validation</span>
            <span style={styles.stackValue}>Zod</span>
          </div>
        </div>
      </section>
    </>
  );
}
