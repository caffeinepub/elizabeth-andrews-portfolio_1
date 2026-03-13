import { useEffect, useState } from "react";

interface Props {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: Props) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 500);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loading-screen${fadeOut ? " fade-out" : ""}`}>
      {/* Animated quill SVG */}
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M70 10 C50 5, 15 30, 10 70 M10 70 C20 50, 40 45, 50 40 M50 40 C30 42, 15 55, 10 70"
          stroke="#C75B39"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="200"
          strokeDashoffset="200"
          style={{ animation: "graphDraw 1.5s ease forwards 0.3s" }}
        />
        <path
          d="M10 70 L12 68 M10 70 L13 71"
          stroke="#7A8B6F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="10"
          strokeDashoffset="10"
          style={{ animation: "graphDraw 0.3s ease forwards 1.5s" }}
        />
      </svg>

      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "2rem",
          color: "#1A1A1A",
          marginTop: "1.5rem",
          opacity: 0,
          animation: "fadeIn 0.8s ease forwards 1s",
        }}
      >
        Elizabeth Andrews
      </h1>
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.75rem",
          color: "#7A8B6F",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginTop: "0.5rem",
          opacity: 0,
          animation: "fadeIn 0.8s ease forwards 1.3s",
        }}
      >
        SEO Content Writer &amp; Strategist
      </p>

      <div className="loading-progress-track">
        <div className="loading-progress-bar" />
      </div>
    </div>
  );
}
