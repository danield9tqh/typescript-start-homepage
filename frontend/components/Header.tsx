import { Link, useLocation } from "@tanstack/react-router";

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isDocs = location.pathname.startsWith("/docs");

  return (
    <header style={styles.header}>
      {isHome ? (
        <div style={styles.placeholder} />
      ) : (
        <Link to="/" style={styles.homeLink}>
          <span style={styles.backArrow}>&larr;</span> Home
        </Link>
      )}
      <div style={styles.headerRight}>
        <Link
          to="/docs"
          style={isDocs ? styles.docsLinkActive : styles.headerLink}
        >
          Docs
        </Link>
        <a
          href="https://github.com/danield9tqh/typescript-start"
          style={styles.headerLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "26px 35px",
    position: "relative",
    zIndex: 1,
  },
  homeLink: {
    color: "#666",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: 500,
    padding: "9px 18px",
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    gap: "7px",
  },
  backArrow: {
    fontSize: "20px",
  },
  placeholder: {
    height: "41px",
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
  },
  headerLink: {
    color: "#666",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: 500,
    padding: "9px 18px",
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
  },
  docsLinkActive: {
    color: "rgb(248, 145, 37)",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    fontSize: "17px",
    fontWeight: 500,
    padding: "9px 18px",
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
  },
};
