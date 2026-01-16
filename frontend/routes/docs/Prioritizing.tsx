import { styles } from "./styles";

export function Prioritizing() {
  return (
    <>
      <h1 style={styles.title}>Prioritizing</h1>
      <p style={styles.subtitle}>Design principles and priorities.</p>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Avoiding Config Hell</h2>
        <p style={styles.text}>
          Put as much config into typescript code as possible. Having as much
          logic as possible in a single language allows:
        </p>
        <ul style={styles.list}>
          <li>Better interoperability between all logic</li>
          <li>
            Consistent typechecking across different parts of the stack like
            frontend, backend, DB schema, infrastructure and any other code
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Modularity</h2>
        <p style={styles.text}>
          Frontend and Backend should be able to evolve separately. No vendor
          lockin, the core stack can be deployed to many different environments.
        </p>
        <ul style={styles.list}>
          <li>
            Hono backend can be deployed to pretty much any serverless infra
            framework
          </li>
          <li>
            Frontend just creates a simple JS/HTML/CSS bundle which can be
            hosted anywhere
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Scalability</h2>
        <p style={styles.text}>
          As your app evolves you shouldn't be hit with high usage bills from
          services that only provide good free tier pricing but then expensive
          scaling. Cloudflare seems to offer a good middle ground between
          simplicity (compared to AWS) and price (compared to Vercel). All
          services, including D1 database, can be scaled to 0 so no worrying
          about ongoing cost for unused apps.
        </p>
      </section>
    </>
  );
}
