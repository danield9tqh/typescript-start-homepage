import { styles } from "../styles";

export function Hono() {
  return (
    <>
      <h1 style={styles.title}>Hono</h1>
      <p style={styles.subtitle}>The backend framework.</p>

      <section style={styles.section}>
        <p style={styles.text}>
          <a href="https://hono.dev/">Hono</a> powers the backend with Zod
          validation and a type-safe client. It can be deployed to pretty much
          any serverless infrastructure.
        </p>
      </section>
    </>
  );
}
