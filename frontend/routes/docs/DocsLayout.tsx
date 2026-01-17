import { Outlet, useLocation } from "@tanstack/react-router";

const navItems = [
  { path: "/docs/getting-started", label: "Getting Started" },
  { path: "/docs/deploy", label: "Deploy" },
  { path: "/docs/why", label: "Why?" },
  { path: "/docs/packages", label: "Packages" },
];

export function DocsLayout() {
  const location = useLocation();

  return (
    <div style={styles.container}>
      <header style={{ ...styles.header, position: "relative", zIndex: 1 }}>
        <a href="/" style={styles.homeLink}>
          <span style={styles.backArrow}>&larr;</span> Home
        </a>
      </header>

      <div style={styles.layout}>
        <nav style={styles.nav}>
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <a
                key={item.path}
                href={item.path}
                style={{
                  ...styles.navLink,
                  ...(isActive ? styles.navLinkActive : {}),
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <main style={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    background: "#fdf6ed",
  },
  header: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "24px 32px",
    borderBottom: "1px solid #eee",
  },
  homeLink: {
    color: "#666",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 500,
    padding: "8px 16px",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  backArrow: {
    fontSize: "18px",
  },
  layout: {
    display: "flex",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  nav: {
    width: "200px",
    padding: "32px 24px",
    position: "fixed",
    left: 0,
    top: 80,
    height: "calc(100vh - 80px)",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    borderRight: "1px solid #eee",
  },
  navLink: {
    color: "#666",
    textDecoration: "none",
    fontSize: "14px",
    padding: "8px 12px",
    borderRadius: "6px",
    transition: "background 0.2s, color 0.2s",
  },
  navLinkActive: {
    background: "rgb(248, 145, 37)",
    color: "#fff",
  },
  main: {
    flex: 1,
    maxWidth: "800px",
    padding: "32px 24px 80px",
    marginLeft: "200px",
  },
};
