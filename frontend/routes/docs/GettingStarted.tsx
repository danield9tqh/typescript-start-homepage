import { CodeBlock } from "../../components/CodeBlock";
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
        <CodeBlock code="bun create danield9tqh/typescript-start app-name">
          bun create danield9tqh/typescript-start{" "}
          <span style={{ color: "rgb(248, 145, 37)" }}>app-name</span>
        </CodeBlock>
        <CodeBlock code="bun dev" />
      </section>
    </>
  );
}
