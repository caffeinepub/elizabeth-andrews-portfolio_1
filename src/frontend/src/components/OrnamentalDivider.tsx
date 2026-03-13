import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function OrnamentalDivider() {
  const { ref, isVisible } = useIntersectionObserver(0.5);
  return (
    <div ref={ref} className="ornamental-divider">
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.75rem",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: isVisible ? "2rem" : "0",
            height: "1px",
            background: "var(--sage-green)",
            transition: "width 0.6s ease 0.2s",
            verticalAlign: "middle",
          }}
        />
        <span
          className="ornamental-star"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.4s ease 0.6s",
          }}
        >
          ✦
        </span>
        <span
          style={{
            display: "inline-block",
            width: isVisible ? "2rem" : "0",
            height: "1px",
            background: "var(--sage-green)",
            transition: "width 0.6s ease 0.2s",
            verticalAlign: "middle",
          }}
        />
      </span>
    </div>
  );
}
