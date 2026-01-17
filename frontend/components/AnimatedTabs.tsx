import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

interface TabItem {
  path: string;
  label: string;
}

interface AnimatedTabsProps {
  items: TabItem[];
  currentPath: string;
}

export function AnimatedTabs({ items, currentPath }: AnimatedTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [highlightStyle, setHighlightStyle] = useState<{
    left: number;
    width: number;
  } | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const updateHighlight = () => {
    if (!containerRef.current) return;

    const activeIndex = items.findIndex((item) => item.path === currentPath);
    if (activeIndex === -1) return;

    const container = containerRef.current;
    const tabs = container.querySelectorAll<HTMLElement>("[data-tab]");
    const activeTab = tabs[activeIndex];

    if (activeTab) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();

      setHighlightStyle({
        left: tabRect.left - containerRect.left,
        width: tabRect.width,
      });

      // Enable transitions after first render
      if (!isInitialized) {
        requestAnimationFrame(() => {
          setIsInitialized(true);
        });
      }
    }
  };

  // Use useLayoutEffect for initial positioning to avoid flash
  useLayoutEffect(() => {
    updateHighlight();
  }, []);

  // Use useEffect for subsequent updates
  useEffect(() => {
    updateHighlight();
  }, [currentPath, items]);

  return (
    <div ref={containerRef} style={styles.container}>
      {highlightStyle && (
        <div
          style={{
            ...styles.highlight,
            left: highlightStyle.left,
            width: highlightStyle.width,
            transition: isInitialized
              ? "left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
          }}
        />
      )}
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          data-tab
          style={{
            ...styles.tab,
            ...(currentPath === item.path ? styles.tabActive : {}),
          }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    position: "relative",
    background: "#f5f5f5",
    borderRadius: "9px",
    padding: "4px",
    marginBottom: "35px",
  },
  highlight: {
    position: "absolute",
    top: "4px",
    height: "calc(100% - 8px)",
    background: "rgb(248, 145, 37)",
    borderRadius: "7px",
  },
  tab: {
    position: "relative",
    zIndex: 1,
    color: "#666",
    textDecoration: "none",
    fontSize: "15px",
    padding: "11px 18px",
    borderRadius: "7px",
    transition: "color 0.2s ease",
    whiteSpace: "nowrap",
  },
  tabActive: {
    color: "#fff",
  },
};
