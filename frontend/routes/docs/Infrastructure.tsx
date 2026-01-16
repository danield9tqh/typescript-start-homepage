import { styles } from "./styles";

export function Infrastructure() {
  return (
    <>
      <h1 style={styles.title}>Infrastructure</h1>
      <p style={styles.subtitle}>Infrastructure as code with Alchemy.</p>

      <section style={styles.section}>
        <p style={styles.text}>
          All the deploy code is written in /infra/deploy.ts using{" "}
          <a href="https://alchemy.run/" style={styles.link}>
            Alchemy
          </a>
          . Alchemy is a pure typescript IaC library. Read the{" "}
          <a
            href="https://alchemy.run/blog/2025-04-08-decade-long-journey/"
            style={styles.link}
          >
            author's blog post
          </a>{" "}
          for more on the motivation behind it and why I think it's a great
          library.
        </p>
        <p style={styles.text}>
          The initial deploy script deploys to cloudflare workers/pages.
        </p>
      </section>
    </>
  );
}
