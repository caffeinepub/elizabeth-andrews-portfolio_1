export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--ink-black)",
        color: "var(--off-white)",
        padding: "3rem 2rem 2rem",
        borderTop: "1px solid rgba(122,139,111,0.2)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "2rem",
          marginBottom: "2rem",
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.25rem",
              color: "var(--off-white)",
              marginBottom: "0.75rem",
            }}
          >
            Elizabeth Andrews
          </h3>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "rgba(245,241,235,0.6)",
              lineHeight: 1.6,
            }}
          >
            SEO Content Writer &amp; Strategist
          </p>
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
            }}
          >
            {[
              {
                label: "elizabethsalimandrews@gmail.com",
                href: "mailto:elizabethsalimandrews@gmail.com",
              },
              { label: "+91 9372564063", href: "tel:+919372564063" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(245,241,235,0.7)",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </a>
            ))}
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(245,241,235,0.7)",
              }}
            >
              Navi Mumbai, India
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <a
            href="https://www.linkedin.com/in/elizabeth-salim-plakeel-a1b495264/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(245,241,235,0.7)",
              display: "inline-block",
              transition: "color 0.2s, transform 0.2s",
            }}
          >
            <span
              style={{
                position: "absolute",
                width: "1px",
                height: "1px",
                overflow: "hidden",
                clip: "rect(0,0,0,0)",
              }}
            >
              LinkedIn
            </span>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="2"
                y="2"
                width="24"
                height="24"
                rx="5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 12v8M8 9v1M12 20v-5c0-2 1.5-3 3-3s3 1 3 3v5M12 12v8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </a>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(245,241,235,0.5)",
            }}
          >
            LinkedIn
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1.5rem",
        }}
      >
        <svg
          width="40"
          height="60"
          viewBox="0 0 40 60"
          fill="none"
          aria-hidden="true"
          style={{
            animation: "rockQuill 6s ease-in-out infinite",
            opacity: 0.4,
          }}
        >
          <path
            d="M32 4 C40 2, 38 22, 20 32 C12 36, 6 44, 4 58"
            stroke="var(--sage-green)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M32 4 C22 10, 16 22, 20 32"
            stroke="var(--terracotta)"
            strokeWidth="1"
            strokeLinecap="round"
            fill="rgba(199,91,57,0.1)"
          />
        </svg>
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(122,139,111,0.2)",
          paddingTop: "1.25rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.75rem",
            color: "var(--sage-green)",
          }}
        >
          &copy; 2026 Elizabeth Andrews. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
