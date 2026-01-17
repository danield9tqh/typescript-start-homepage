import { styles } from "./styles";

export function Packages() {
  return (
    <>
      <h1 style={styles.title}>Packages</h1>
      <p style={styles.subtitle}>The technologies powering this template.</p>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Bun</h2>
        <p style={styles.text}>
          <a href="https://bun.sh/">Bun</a> is the development runtime. It
          handles bundling, running TypeScript, and package management. In
          production, the backend runs on Cloudflare Workers.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Hono</h2>
        <p style={styles.text}>
          <a href="https://hono.dev/">Hono</a> powers the backend with Zod
          validation and a type-safe client. It can be deployed to pretty much
          any serverless infrastructure.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>React + TanStack Router</h2>
        <p style={styles.text}>
          <a href="https://react.dev/">React 19</a> with{" "}
          <a href="https://tanstack.com/router">TanStack Router</a> for
          client-side routing. The frontend creates a simple JS/HTML/CSS bundle
          which can be hosted anywhere.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Zod</h2>
        <p style={styles.text}>
          <a href="https://zod.dev/">Zod</a> provides TypeScript-first schema
          validation with static type inference for API input validation.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Drizzle</h2>
        <p style={styles.text}>
          <a href="https://orm.drizzle.team/">Drizzle</a> handles SQL schema
          management with type-safe queries.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Better Auth</h2>
        <p style={styles.text}>
          <a href="https://www.better-auth.com/">BetterAuth</a> is an open
          source library that handles a large number of auth use cases and
          doesn't rely on any external services. The implementation in this
          project does sign up and login with just passkeys. The BetterAuth
          instance relies on a self hosted SQLite database.
        </p>
        <p style={styles.text}>
          In dev that's a SQLite file accessed through Bun.sql and when deployed
          to Cloudflare it's a Cloudflare D1 instance that's created on deploy.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Alchemy</h2>
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

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Cloudflare</h2>
        <p style={styles.text}>
          <a href="https://www.cloudflare.com/">Cloudflare</a> provides the
          production infrastructure: Workers for serverless compute, D1 for the
          database, and Pages for static hosting.
        </p>
      </section>
    </>
  );
}
