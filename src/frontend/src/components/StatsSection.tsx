import { useCounter } from "../hooks/useCounter";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface StatCard {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  delay: number;
}

function PapersIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      style={{ animation: "float 3s ease-in-out infinite" }}
    >
      <rect
        x="8"
        y="12"
        width="24"
        height="18"
        rx="2"
        stroke="var(--terracotta)"
        strokeWidth="1.5"
        fill="rgba(199,91,57,0.08)"
      />
      <rect
        x="12"
        y="8"
        width="20"
        height="16"
        rx="2"
        stroke="var(--sage-green)"
        strokeWidth="1.5"
        fill="rgba(122,139,111,0.08)"
      />
      <line
        x1="16"
        y1="15"
        x2="28"
        y2="15"
        stroke="var(--terracotta)"
        strokeWidth="1"
        opacity="0.6"
      />
      <line
        x1="16"
        y1="19"
        x2="26"
        y2="19"
        stroke="var(--terracotta)"
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  );
}

function GraphIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <polyline
        points="6,32 14,18 22,24 32,8"
        stroke="var(--sage-green)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="60"
        strokeDashoffset="60"
        style={{ animation: "graphDraw 1.5s ease forwards" }}
      />
      <circle cx="32" cy="8" r="3" fill="var(--terracotta)" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      style={{ animation: "gearSpin 8s linear infinite" }}
    >
      <circle
        cx="20"
        cy="20"
        r="6"
        stroke="var(--terracotta)"
        strokeWidth="2"
      />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <rect
          key={angle}
          x="19"
          y="4"
          width="2"
          height="6"
          rx="1"
          fill="var(--sage-green)"
          transform={`rotate(${angle} 20 20)`}
        />
      ))}
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="20"
        cy="20"
        r="15"
        stroke="var(--sage-green)"
        strokeWidth="2"
        opacity="0.3"
      />
      <polyline
        points="12,20 18,26 28,14"
        stroke="var(--terracotta)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="30"
        strokeDashoffset="30"
        style={{ animation: "checkDraw 0.8s ease forwards 0.5s" }}
      />
    </svg>
  );
}

function CounterCard({
  value,
  suffix,
  label,
  icon,
  delay,
  start,
}: StatCard & { start: boolean }) {
  const count = useCounter(value, 1500, start);
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      data-ocid={`stats.card.${delay}`}
      style={{
        backgroundColor: "var(--warm-beige)",
        borderRadius: "8px",
        padding: "2rem",
        textAlign: "center",
        boxShadow: "0 2px 16px rgba(26,26,26,0.06)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${delay * 0.1}s, transform 0.6s ease ${delay * 0.1}s`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "3.5rem",
          fontWeight: 700,
          color: "var(--terracotta)",
          lineHeight: 1,
        }}
      >
        {count}
        {suffix}
      </div>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.95rem",
          color: "var(--muted-text)",
          marginTop: "0.75rem",
          lineHeight: 1.5,
        }}
      >
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const { ref, isVisible } = useIntersectionObserver(0.2);

  const stats = [
    {
      value: 40,
      suffix: "+",
      label: "Long-form technical articles written",
      icon: <PapersIcon />,
      delay: 1,
    },
    {
      value: 40,
      suffix: "%",
      label: "Organic search growth achieved for a B2B IT brand",
      icon: <GraphIcon />,
      delay: 2,
    },
    {
      value: 5,
      suffix: "",
      label: "SaaS products managed simultaneously",
      icon: <GearIcon />,
      delay: 3,
    },
    {
      value: 100,
      suffix: "%",
      label: "Deadlines met across every project",
      icon: <CheckIcon />,
      delay: 4,
    },
  ];

  return (
    <section
      style={{
        padding: "6rem 2rem",
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grain texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          animation: "grainMove 8s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          className="section-label"
          style={{ textAlign: "center", display: "block" }}
        >
          By the Numbers
        </span>
        <h2
          className="section-headline"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            textAlign: "center",
            marginBottom: "3rem",
            color: "var(--ink-black)",
          }}
        >
          Results You Can Actually Measure
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {stats.map((stat) => (
            <CounterCard key={stat.delay} {...stat} start={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
