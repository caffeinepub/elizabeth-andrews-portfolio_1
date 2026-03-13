import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const featuredWork = [
  {
    category: "Technical SEO Blog",
    title: "How to Choose the Right Middleware Technology for Banks",
    context:
      "Written for Simple Logic IT, a B2B managed services company serving enterprise clients across BFSI, FMCG, and government sectors. Each article was keyword‑researched, audience‑mapped, and structured for both readability and search performance.",
    url: "https://v1.simplelogic-it.com/middleware-technology-for-bank/",
  },
  {
    category: "Website Service Page",
    title: "Cloud Managed Services — Simple Logic IT",
    context:
      "Part of a full website revamp covering 5 product lines and 40+ pages. Written for on-page SEO, conversion, and technical clarity.",
    url: "https://simplelogic-it.com/cloud-managed-services/",
  },
  {
    category: "Research-Backed Blog",
    title: "The Teachings of Guru Nanak Dev Ji: A Path to Enlightenment",
    context:
      "3 to 4 research‑backed blogs per week, 1,000+ words each. Published original articles over 3 months.",
    url: "https://drive.google.com/file/d/15nJDjC9kLGerpX1M9LNkoynQ3U0zt_Zw/view?usp=sharing",
  },
];

function BookIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      style={{ animation: "float 4s ease-in-out infinite" }}
    >
      <rect
        x="8"
        y="6"
        width="32"
        height="36"
        rx="3"
        stroke="var(--terracotta)"
        strokeWidth="1.5"
        fill="rgba(199,91,57,0.05)"
      />
      <line
        x1="14"
        y1="15"
        x2="34"
        y2="15"
        stroke="var(--sage-green)"
        strokeWidth="1"
        opacity="0.7"
      />
      <line
        x1="14"
        y1="21"
        x2="34"
        y2="21"
        stroke="var(--sage-green)"
        strokeWidth="1"
        opacity="0.7"
      />
      <line
        x1="14"
        y1="27"
        x2="28"
        y2="27"
        stroke="var(--sage-green)"
        strokeWidth="1"
        opacity="0.7"
      />
      <line
        x1="8"
        y1="6"
        x2="8"
        y2="42"
        stroke="var(--warm-beige)"
        strokeWidth="4"
      />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      style={{ animation: "bob 3.5s ease-in-out infinite" }}
    >
      <path
        d="M36 8 L40 12 L18 34 L10 38 L14 30 Z"
        stroke="var(--terracotta)"
        strokeWidth="1.5"
        fill="rgba(199,91,57,0.08)"
        strokeLinejoin="round"
      />
      <path d="M32 12 L36 16" stroke="var(--sage-green)" strokeWidth="1.5" />
    </svg>
  );
}

function ScrollIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      style={{ animation: "rockQuill 5s ease-in-out infinite" }}
    >
      <path
        d="M12 8 C8 8, 6 11, 6 14 C6 17, 8 19, 12 19 L12 38 C12 41, 14 43, 17 43 L36 43 C39 43, 42 41, 42 38 L42 14 C42 11, 40 8, 36 8 Z"
        stroke="var(--terracotta)"
        strokeWidth="1.5"
        fill="rgba(199,91,57,0.05)"
      />
      <line
        x1="18"
        y1="18"
        x2="36"
        y2="18"
        stroke="var(--sage-green)"
        strokeWidth="1"
        opacity="0.7"
      />
      <line
        x1="18"
        y1="24"
        x2="36"
        y2="24"
        stroke="var(--sage-green)"
        strokeWidth="1"
        opacity="0.7"
      />
      <line
        x1="18"
        y1="30"
        x2="30"
        y2="30"
        stroke="var(--sage-green)"
        strokeWidth="1"
        opacity="0.7"
      />
    </svg>
  );
}

const icons = [
  <BookIcon key="book" />,
  <PenIcon key="pen" />,
  <ScrollIcon key="scroll" />,
];

function PortfolioCard({
  work,
  index,
}: { work: (typeof featuredWork)[0]; index: number }) {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      window.open(work.url, "_blank", "noopener");
    }
  };

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "var(--warm-beige)",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(26,26,26,0.06)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s, box-shadow 0.25s ease`,
        cursor: "pointer",
      }}
      onClick={() => window.open(work.url, "_blank", "noopener")}
      onKeyDown={handleKeyDown}
    >
      <div
        style={{
          padding: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(199,91,57,0.05)",
          borderBottom: "1px solid rgba(122,139,111,0.2)",
        }}
      >
        {icons[index]}
      </div>
      <div style={{ padding: "1.5rem" }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            color: "var(--sage-green)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            display: "block",
            marginBottom: "0.75rem",
          }}
        >
          {work.category}
        </span>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.15rem",
            fontWeight: 600,
            color: "var(--ink-black)",
            marginBottom: "0.75rem",
            lineHeight: 1.4,
          }}
        >
          {work.title}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            color: "var(--muted-text)",
            lineHeight: 1.6,
            marginBottom: "1rem",
          }}
        >
          {work.context}
        </p>
        <a
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            color: "var(--terracotta)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          Read Article →
        </a>
      </div>
    </div>
  );
}

export default function PortfolioPreview() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      style={{
        padding: "6rem 2rem",
        backgroundColor: "var(--warm-beige-light)",
      }}
    >
      <div ref={ref} style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <span
          className="section-label"
          style={{ textAlign: "center", display: "block" }}
        >
          Selected Work
        </span>
        <h2
          className="section-headline"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            textAlign: "center",
            marginBottom: "3rem",
            color: "var(--ink-black)",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          From the blog to the website — here's what I've built
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {featuredWork.map((work, i) => (
            <PortfolioCard key={work.url} work={work} index={i} />
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            data-ocid="portfolio_preview.primary_button"
            className="btn-primary"
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            → View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
