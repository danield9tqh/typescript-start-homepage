import { styles } from "./styles";

export function Start() {
  return (
    <>
      <h1 style={styles.title}>Getting Started</h1>
      <p style={styles.subtitle}>
        After installing{" "}
        <a href="https://bun.sh/" style={styles.link}>
          Bun
        </a>{" "}
        you can create a new Bun app from the template
      </p>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Installation</h2>
        <div style={styles.codeBlock}>
          <code style={styles.codeBlockText}>
            bun create danield9tqh/typescript-start{" "}
            <span style={{ color: "rgb(248, 145, 37)" }}>app-name</span>
          </code>
        </div>
        <div style={styles.codeBlock}>
          <code style={styles.codeBlockText}>bun dev</code>
        </div>
      </section>
    </>
  );
}
