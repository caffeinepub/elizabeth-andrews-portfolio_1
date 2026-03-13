import { useEffect, useRef, useState } from "react";

const HEADLINE =
  "Write Content That Ranks, Reads Well, and Drives Real Results.";

function FloatingParticle({ index }: { index: number }) {
  const driftX = (Math.random() - 0.5) * 200;
  const driftY = -(Math.random() * 120 + 60);
  const size = Math.random() * 5 + 3;
  const delay = Math.random() * 10;
  const duration = Math.random() * 15 + 15;
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const color = index % 2 === 0 ? "var(--warm-beige)" : "var(--sage-green)";

  return (
    <div
      style={
        {
          position: "absolute",
          left: `${x}%`,
          top: `${y}%`,
          width: size,
          height: size,
          borderRadius: "50%",
          background: color,
          opacity: 0.5,
          "--drift-x": `${driftX}px`,
          "--drift-y": `${driftY}px`,
          animation: `drift ${duration}s ease-in-out ${delay}s infinite`,
        } as React.CSSProperties
      }
    />
  );
}

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showSub, setShowSub] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const speed = 40;
    const timer = setInterval(() => {
      if (indexRef.current < HEADLINE.length) {
        setDisplayedText(HEADLINE.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowSub(true), 400);
        setTimeout(() => setShowBody(true), 900);
        setTimeout(() => setShowCTA(true), 1400);
      }
    }, speed);
    return () => clearInterval(timer);
  }, []);

  // Cursor blink
  useEffect(() => {
    const t = setInterval(() => setShowCursor((p) => !p), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--off-white)",
        padding: "6rem 2rem 4rem",
      }}
    >
      {/* Ink blot background */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: i === 0 ? 500 : i === 1 ? 350 : 280,
            height: i === 0 ? 500 : i === 1 ? 350 : 280,
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            background:
              i % 2 === 0
                ? "radial-gradient(circle, rgba(199,91,57,0.12), transparent)"
                : "radial-gradient(circle, rgba(122,139,111,0.1), transparent)",
            filter: "blur(40px)",
            left: i === 0 ? "-10%" : i === 1 ? "60%" : "30%",
            top: i === 0 ? "-5%" : i === 1 ? "40%" : "10%",
            animation: `inkBlot ${20 + i * 7}s ease-in-out ${i * 3}s infinite`,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Floating particles */}
      {Array.from({ length: 20 }, (_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static decorative elements
        <FloatingParticle key={i} index={i} />
      ))}

      {/* Parchment texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          animation: "parchmentBreathe 20s ease-in-out infinite",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Decorative quill */}
      <svg
        width="80"
        height="120"
        viewBox="0 0 80 120"
        fill="none"
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          opacity: 0.4,
          animation: "rockQuill 6s ease-in-out infinite",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <path
          d="M60 5 C80 0, 75 40, 40 60 C25 70, 15 85, 10 115"
          stroke="#7A8B6F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M60 5 C40 15, 30 40, 40 60"
          stroke="#C75B39"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="rgba(199,91,57,0.1)"
        />
        <path
          d="M40 60 C38 80, 30 95, 10 115"
          stroke="#1A1A1A"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            lineHeight: 1.2,
            color: "var(--ink-black)",
            marginBottom: "1.5rem",
            minHeight: "4.8rem",
          }}
        >
          {displayedText}
          <span
            style={{
              borderRight: "3px solid var(--terracotta)",
              marginLeft: "2px",
              opacity: showCursor ? 1 : 0,
            }}
          />
        </h1>

        <h3
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.2rem",
            fontWeight: 400,
            color: "var(--sage-green)",
            marginBottom: "1.25rem",
            opacity: showSub ? 1 : 0,
            transform: showSub ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          SEO Content Writer &amp; Strategist specialising in B2B, SaaS, and
          technical content.
        </h3>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            color: "var(--muted-text)",
            marginBottom: "2.5rem",
            maxWidth: "700px",
            margin: "0 auto 2.5rem",
            opacity: showBody ? 1 : 0,
            transform: showBody ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          From cloud migration guides to conversion-ready service pages, I
          create content that gets found on Google, understood by humans, and
          trusted by decision-makers.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
            opacity: showCTA ? 1 : 0,
            transform: showCTA ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <button
            type="button"
            data-ocid="hero.primary_button"
            className="btn-primary"
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            → View My Work
          </button>
          <button
            type="button"
            data-ocid="hero.secondary_button"
            className="btn-secondary"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            → Let’s Work Together
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: "4rem",
            display: "flex",
            justifyContent: "center",
            opacity: showCTA ? 0.5 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            stroke="var(--sage-green)"
            strokeWidth="2"
            style={{ animation: "bob 2s ease-in-out infinite" }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
}
