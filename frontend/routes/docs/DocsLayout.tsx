import { Outlet, useLocation, Link } from "@tanstack/react-router";
import { Header } from "../../components/Header";

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
      <Header />

      <div style={styles.layout}>
        <nav style={styles.nav}>
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  ...styles.navLink,
                  ...(isActive ? styles.navLinkActive : {}),
                }}
              >
                {item.label}
              </Link>
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
  layout: {
    display: "flex",
    maxWidth: "1320px",
    margin: "0 auto",
  },
  nav: {
    width: "220px",
    padding: "35px 26px",
    position: "fixed",
    left: 0,
    top: 88,
    height: "calc(100vh - 88px)",
    display: "flex",
    flexDirection: "column",
    gap: "9px",
    borderRight: "1px solid #eee",
  },
  navLink: {
    color: "#666",
    textDecoration: "none",
    fontSize: "15px",
    padding: "9px 13px",
    borderRadius: "7px",
    transition: "background 0.2s, color 0.2s",
  },
  navLinkActive: {
    background: "rgb(248, 145, 37)",
    color: "#fff",
  },
  main: {
    flex: 1,
    maxWidth: "880px",
    padding: "35px 26px 88px",
    marginLeft: "220px",
  },
};
