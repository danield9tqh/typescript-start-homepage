import { styles } from "./styles";

export function Deploy() {
  return (
    <>
      <h1 style={styles.title}>Deploy</h1>
      <p style={styles.subtitle}>Deploy your app to Cloudflare in minutes.</p>

      <section style={styles.section}>
        <p style={styles.text}>
          1. Have a Cloudflare account with a domain name{" "}
          <a href="https://www.cloudflare.com/products/registrar/">
            managed by Cloudflare
          </a>
        </p>

        <p style={styles.text}>2. Create an Alchemy profile</p>
        <div style={styles.codeBlock}>
          <code style={styles.codeBlockText}>bunx alchemy configure</code>
        </div>

        <p style={styles.text}>3. Login with Cloudflare</p>
        <div style={styles.codeBlock}>
          <code style={styles.codeBlockText}>
            bunx alchemy login cloudflare
          </code>
        </div>

        <p style={styles.text}>
          4. Set <code style={styles.inlineCode}>ALCHEMY_PASSWORD</code> and{" "}
          <code style={styles.inlineCode}>CUSTOM_DOMAIN</code> in{" "}
          <code style={styles.inlineCode}>.env</code>
        </p>

        <p style={styles.text}>5. Deploy</p>
        <div style={styles.codeBlock}>
          <code style={styles.codeBlockText}>bun run deploy</code>
        </div>
      </section>
    </>
  );
}
