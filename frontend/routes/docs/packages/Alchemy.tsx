import { styles } from "../styles";

export function Alchemy() {
  return (
    <>
      <h1 style={styles.title}>Alchemy</h1>
      <p style={styles.subtitle}>Infrastructure as code with Alchemy.</p>

      <section style={styles.section}>
        <p style={styles.text}>
          All the deploy code is written in /infra/deploy.ts using{" "}
          <a href="https://alchemy.run/">Alchemy</a>. Alchemy is a pure
          typescript IaC library. Read the{" "}
          <a href="https://alchemy.run/blog/2025-04-08-decade-long-journey/">
            author's blog post
          </a>{" "}
          for more on the motivation behind it and why I think it's a great
          library.
        </p>
        <p style={styles.text}>
          The initial deploy script deploys to Cloudflare Workers/Pages.
        </p>
      </section>
    </>
  );
}
