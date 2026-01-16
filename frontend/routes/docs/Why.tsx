import { styles } from "./styles";

export function Why() {
  return (
    <>
      <h1 style={styles.title}>Why?</h1>
      <p style={styles.subtitle}>
        The motivation behind this starter template.
      </p>

      <section style={styles.section}>
        <p style={styles.text}>
          This app is meant to be a starter app that can evolve to scale to 90%
          of use cases while being super simple up front. To do that it makes
          some opinionated decisions about runtimes, libraries and
          infrastructure.
        </p>
      </section>
    </>
  );
}
