import { styles } from "../styles";

export function Zod() {
  return (
    <>
      <h1 style={styles.title}>Zod</h1>
      <p style={styles.subtitle}>TypeScript-first schema validation.</p>

      <section style={styles.section}>
        <p style={styles.text}>
          <a href="https://zod.dev/">Zod</a> provides TypeScript-first schema
          validation with static type inference for API input validation.
        </p>
      </section>
    </>
  );
}
