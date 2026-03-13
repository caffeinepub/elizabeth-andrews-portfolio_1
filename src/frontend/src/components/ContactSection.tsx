import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

function FloatingStar({ index }: { index: number }) {
  const driftX = (Math.random() - 0.5) * 150;
  const driftY = -(Math.random() * 100 + 50);
  const size = Math.random() * 4 + 2;
  const delay = Math.random() * 10;
  const duration = Math.random() * 15 + 15;
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const colors = ["#D4C5B2", "rgba(245,241,235,0.5)", "rgba(199,91,57,0.3)"];

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
          background: colors[index % 3],
          "--drift-x": `${driftX}px`,
          "--drift-y": `${driftY}px`,
          animation: `drift ${duration}s ease-in-out ${delay}s infinite`,
        } as React.CSSProperties
      }
    />
  );
}

export default function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  const contactInfo = [
    {
      label: "Navi Mumbai, India",
      href: undefined as string | undefined,
    },
    {
      label: "elizabethsalimandrews@gmail.com",
      href: "mailto:elizabethsalimandrews@gmail.com",
    },
    {
      label: "+91 9372564063",
      href: "tel:+919372564063",
    },
    {
      label: "LinkedIn Profile",
      href: "https://linkedin.com/in/elizabeth-andrews-a1b495264/",
    },
  ];

  return (
    <section
      id="contact"
      className="section-dark"
      style={{ padding: "6rem 2rem", position: "relative", overflow: "hidden" }}
    >
      {Array.from({ length: 15 }, (_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static decorative elements
        <FloatingStar key={i} index={i} />
      ))}

      <div
        ref={ref}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "var(--off-white)",
            marginBottom: "1.25rem",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        >
          Let\u2019s Work Together
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem",
            color: "rgba(245,241,235,0.7)",
            maxWidth: "600px",
            lineHeight: 1.7,
            marginBottom: "3rem",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease 0.2s",
          }}
        >
          Whether you need a technical blog that ranks, a service page that
          converts, or a content strategy that scales \u2014 I\u2019m here for
          it. I\u2019m currently open to full-time, freelance, and contract
          opportunities.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {contactInfo.map((item, i) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.1 + 0.3}s, transform 0.5s ease ${i * 0.1 + 0.3}s`,
              }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "rgba(245,241,235,0.9)",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "rgba(245,241,235,0.9)",
                  }}
                >
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <button
            type="button"
            data-ocid="contact.primary_button"
            className="btn-primary"
            onClick={() => alert("Resume download coming soon!")}
          >
            \u2193 Download My Resume
          </button>
        </div>
      </div>
    </section>
  );
}
