import { styles } from "./styles";

export function Deploy() {
  return (
    <>
      <h1 style={styles.title}>Deploy</h1>
      <p style={styles.subtitle}>Deploy your app to Cloudflare in minutes.</p>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Steps</h2>

        <p style={styles.text}>
          1. Have a Cloudflare account with a domain name managed by Cloudflare
        </p>

        <p style={styles.text}>2. Authenticate with Wrangler:</p>
        <div style={styles.codeBlock}>
          <code style={styles.codeBlockText}>bunx wrangler login</code>
        </div>

        <p style={styles.text}>
          3. Set environment variables in <code style={styles.inlineCode}>.env</code>:
        </p>
        <div style={styles.codeBlock}>
          <code style={styles.codeBlockText}>
            ALCHEMY_PASSWORD=your_password{"\n"}
            CUSTOM_DOMAIN=your-domain.com
          </code>
        </div>

        <p style={styles.text}>4. Deploy:</p>
        <div style={styles.codeBlock}>
          <code style={styles.codeBlockText}>bun run deploy</code>
        </div>
      </section>
    </>
  );
}
