import { styles } from "../styles";

export function BetterAuth() {
  return (
    <>
      <h1 style={styles.title}>Better Auth</h1>
      <p style={styles.subtitle}>Authentication powered by BetterAuth.</p>

      <section style={styles.section}>
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
    </>
  );
}
