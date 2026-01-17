import { styles } from "../styles";

export function Drizzle() {
  return (
    <>
      <h1 style={styles.title}>Drizzle</h1>
      <p style={styles.subtitle}>SQL schema management.</p>

      <section style={styles.section}>
        <p style={styles.text}>
          <a href="https://orm.drizzle.team/">Drizzle</a> handles SQL schema
          management with type-safe queries.
        </p>
      </section>
    </>
  );
}
