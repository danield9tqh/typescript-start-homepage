import { CodeBlock } from "../../components/CodeBlock";
import { styles } from "./styles";

export function Deploy() {
  return (
    <>
      <h1 style={styles.title}>Deploy</h1>
      <p style={styles.subtitle}>Deploy your app to Cloudflare in minutes.</p>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Prerequisites</h3>
        <p style={styles.text}>
          Register a{" "}
          <a href="https://www.cloudflare.com/products/registrar/">
            Cloudflare domain
          </a>{" "}
          or have an existing one
        </p>
        <h3 style={styles.sectionTitle}>Configure</h3>
        <CodeBlock code="bun run infra/configure" />
        <h3 style={styles.sectionTitle}>Deploy</h3>
        <CodeBlock code="bun run deploy" />
        <h2 style={styles.sectionTitleLarge}>What does this all do?</h2>
        <p style={styles.text}>
          The configure script itself is all in the repo at{" "}
          <a
            href="https://github.com/danield9tqh/typescript-start/blob/main/infra/configure.ts"
            style={styles.link}
          >
            infra/configure.ts
          </a>
          {". "}
          First it configures an Alchemy profile and executes an OAuth login to
          Cloudflare. More info is available on the{" "}
          <a href="https://alchemy.run/concepts/profiles/" style={styles.link}>
            Profiles section
          </a>{" "}
          in the Alchemy docs but essentially it creates OAuth creadentials for
          your cloudflare account and stores them in the{" "}
          <code style={styles.inlineCode}>~/.alchemy</code> folder.
        </p>
        <br></br>
        <p style={styles.text}>
          After Cloudflare is authenticated it pulls down a list of domains in
          your Cloudflare account which makes it easier to verify that a domain
          is already set up and to choose which subdomain.domain to deploy the
          app to. When the full path e.g. my-app.example.com is chosen it saves
          that in the .env file
        </p>
        <br></br>
        <p style={styles.text}>
          Finally it creates an{" "}
          <a
            href="https://alchemy.run/providers/cloudflare/secret/"
            style={styles.link}
          >
            Alchemy secret
          </a>
          . The Alchemy secret is used when deploying secret env variables to a
          Cloudflare worker environment. Lets go through an example, you want to
          deploy a service that uses a secret API_KEY. When you run `bun deploy`
          Alchemy takes that secret from the local .env file, sends it to
          Cloudflare when deploying the service, and stores an encrypted
          deployment state locally of that API_KEY. The ALCHEMY_PASSWORD is what
          is used to encrypt that local state.
        </p>

        <h2 style={styles.sectionTitleLarge}>What you finally end up with</h2>
        <p style={styles.text}>
          An Alchemy profile for Cloudflare in your{" "}
          <code style={styles.inlineCode}>~/.alchemy</code> folder. That's
          username + OAuth credentials. A new local .env file with
          <CodeBlock code="bash">
            ALCHEMY_PASSWORD=_random_string_ <br></br>
            CUSTOM_DOMAIN=subdomain.example.com # whatever you set it to
          </CodeBlock>
        </p>
      </section>
    </>
  );
}
