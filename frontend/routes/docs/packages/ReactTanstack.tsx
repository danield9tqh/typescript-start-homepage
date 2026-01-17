import { styles } from "../styles";

export function ReactTanstack() {
  return (
    <>
      <h1 style={styles.title}>React + TanStack Router</h1>
      <p style={styles.subtitle}>The frontend framework.</p>

      <section style={styles.section}>
        <p style={styles.text}>
          <a href="https://react.dev/">React 19</a> with{" "}
          <a href="https://tanstack.com/router">TanStack Router</a> for
          client-side routing. The frontend creates a simple JS/HTML/CSS bundle
          which can be hosted anywhere.
        </p>
      </section>
    </>
  );
}
