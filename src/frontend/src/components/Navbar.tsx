import { useEffect, useState } from "react";

interface Props {
  isDark: boolean;
  toggleDark: () => void;
}

export default function Navbar({ isDark, toggleDark }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMobileOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        backgroundColor: isDark
          ? "rgba(26,26,26,0.92)"
          : "rgba(245,241,235,0.92)",
        borderBottom: "1px solid rgba(122,139,111,0.3)",
        padding: "0 2rem",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background-color 0.5s ease, box-shadow 0.3s ease",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        overflow: "hidden",
      }}
    >
      {/* Shimmer border */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(199,91,57,0.5) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 10s linear infinite",
        }}
      />

      {/* Logo */}
      <button
        type="button"
        onClick={() => scrollTo("home")}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.5rem",
          fontWeight: 600,
          color: isDark ? "var(--off-white)" : "var(--ink-black)",
          background: "none",
          border: "none",
          cursor: "none",
          animation: "breathe 4s ease-in-out infinite",
          padding: 0,
        }}
      >
        Elizabeth Andrews
      </button>

      {/* Desktop nav */}
      <div
        style={{ display: "flex", alignItems: "center", gap: "2rem" }}
        className="hidden-mobile"
      >
        {navLinks.map((link, i) => (
          <button
            type="button"
            key={link.id}
            data-ocid={`navbar.link.${i + 1}`}
            onClick={() => scrollTo(link.id)}
            className={`nav-link${activeSection === link.id ? " active" : ""}`}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: isDark ? "var(--off-white)" : "var(--ink-black)",
              background: "none",
              border: "none",
              cursor: "none",
              padding: "4px 0",
            }}
          >
            {link.label}
          </button>
        ))}

        {/* Dark mode toggle */}
        <button
          type="button"
          data-ocid="navbar.toggle"
          onClick={toggleDark}
          style={{
            background: "none",
            border: "none",
            cursor: "none",
            padding: "6px",
            borderRadius: "50%",
            transition: "background 0.2s ease",
            color: isDark ? "var(--off-white)" : "var(--ink-black)",
          }}
          aria-label="Toggle dark mode"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transition: "transform 0.4s ease",
              transform: isDark ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            {isDark ? (
              <>
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </>
            ) : (
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                fill="currentColor"
                stroke="none"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        type="button"
        data-ocid="navbar.hamburger_button"
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{
          background: "none",
          border: "none",
          cursor: "none",
          display: "none",
          flexDirection: "column",
          gap: "5px",
          padding: "8px",
          zIndex: 101,
        }}
        className="show-mobile"
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: isDark ? "var(--off-white)" : "var(--ink-black)",
              borderRadius: "2px",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: mobileOpen
                ? i === 0
                  ? "translateY(7px) rotate(45deg)"
                  : i === 1
                    ? "opacity: 0"
                    : "translateY(-7px) rotate(-45deg)"
                : "none",
              opacity: mobileOpen && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: "72px",
            right: 0,
            bottom: 0,
            width: "280px",
            backgroundColor: isDark ? "#1A1A1A" : "#F5F1EB",
            boxShadow: "-4px 0 20px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
            gap: "0.5rem",
            animation: "slideInRight 0.3s ease",
            zIndex: 99,
          }}
        >
          {navLinks.map((link, i) => (
            <button
              type="button"
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem",
                color: isDark ? "var(--off-white)" : "var(--ink-black)",
                background: "none",
                border: "none",
                cursor: "none",
                textAlign: "left",
                padding: "0.75rem 0",
                opacity: 0,
                animation: `fadeUp 0.4s ease ${i * 0.1}s forwards`,
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={toggleDark}
            style={{
              marginTop: "1rem",
              background: "none",
              border: "1px solid var(--sage-green)",
              borderRadius: "4px",
              padding: "0.5rem 1rem",
              color: isDark ? "var(--off-white)" : "var(--ink-black)",
              cursor: "none",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.8rem",
              opacity: 0,
              animation: "fadeUp 0.4s ease 0.4s forwards",
            }}
          >
            {isDark ? "☀ Light Mode" : "☾ Dark Mode"}
          </button>
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
