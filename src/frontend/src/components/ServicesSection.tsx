import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function QuillIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      style={{ animation: "rockQuill 4s ease-in-out infinite" }}
    >
      <path
        d="M28 4 C20 2, 6 14, 4 28"
        stroke="var(--terracotta)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M28 4 C18 8, 12 18, 16 22"
        stroke="var(--sage-green)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="rgba(122,139,111,0.1)"
      />
      <line
        x1="4"
        y1="28"
        x2="10"
        y2="22"
        stroke="var(--ink-black)"
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      style={{ animation: "float 4s ease-in-out 0.5s infinite" }}
    >
      <rect
        x="3"
        y="5"
        width="26"
        height="18"
        rx="2"
        stroke="var(--terracotta)"
        strokeWidth="1.5"
      />
      <line
        x1="16"
        y1="23"
        x2="16"
        y2="27"
        stroke="var(--sage-green)"
        strokeWidth="1.5"
      />
      <line
        x1="10"
        y1="27"
        x2="22"
        y2="27"
        stroke="var(--sage-green)"
        strokeWidth="1.5"
      />
      <path
        d="M8 14 L12 10 L16 13 L21 8"
        stroke="var(--terracotta)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      style={{ animation: "float 3.5s ease-in-out 1s infinite" }}
    >
      <rect
        x="4"
        y="18"
        width="5"
        height="10"
        rx="1"
        fill="rgba(199,91,57,0.3)"
        stroke="var(--terracotta)"
        strokeWidth="1"
      />
      <rect
        x="13"
        y="12"
        width="5"
        height="16"
        rx="1"
        fill="rgba(199,91,57,0.3)"
        stroke="var(--terracotta)"
        strokeWidth="1"
      />
      <rect
        x="22"
        y="6"
        width="5"
        height="22"
        rx="1"
        fill="rgba(199,91,57,0.3)"
        stroke="var(--terracotta)"
        strokeWidth="1"
      />
      <line
        x1="3"
        y1="28"
        x2="29"
        y2="28"
        stroke="var(--sage-green)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      style={{ animation: "bob 4s ease-in-out 0.3s infinite" }}
    >
      <rect
        x="8"
        y="3"
        width="16"
        height="26"
        rx="3"
        stroke="var(--terracotta)"
        strokeWidth="1.5"
      />
      <circle cx="16" cy="26" r="1.5" fill="var(--terracotta)" />
      <line
        x1="13"
        y1="7"
        x2="19"
        y2="7"
        stroke="var(--sage-green)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      style={{ animation: "float 5s ease-in-out 0.7s infinite" }}
    >
      <rect
        x="3"
        y="8"
        width="26"
        height="18"
        rx="2"
        stroke="var(--terracotta)"
        strokeWidth="1.5"
      />
      <path
        d="M3 10 L16 19 L29 10"
        stroke="var(--sage-green)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      style={{ animation: "bob 3.8s ease-in-out 0.5s infinite" }}
    >
      <rect
        x="2"
        y="7"
        width="20"
        height="18"
        rx="2"
        stroke="var(--terracotta)"
        strokeWidth="1.5"
      />
      <path
        d="M22 12 L30 8 L30 24 L22 20"
        stroke="var(--sage-green)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const services: Service[] = [
  {
    icon: <QuillIcon />,
    title: "SEO Blog Writing",
    description:
      "Long-form, research-backed blogs and technical articles optimised for search intent, keyword rankings, and readability – built for B2B and SaaS audiences.",
  },
  {
    icon: <MonitorIcon />,
    title: "Website & Service Page Copy",
    description:
      "On-page SEO copy for service pages, landing pages, and homepages that communicates value clearly and ranks well in search.",
  },
  {
    icon: <ChartIcon />,
    title: "Content Strategy",
    description:
      "Keyword research, audience mapping, content calendars, and topic clustering — so your content works as a system, not a collection of one-off posts.",
  },
  {
    icon: <PhoneIcon />,
    title: "Social Media Copy",
    description:
      "Platform-specific content for LinkedIn, Instagram, and beyond. Captions, carousels, and short-form copy that build brand presence.",
  },
  {
    icon: <EnvelopeIcon />,
    title: "Email & Campaign Copy",
    description:
      "Nurture sequences, newsletters, and campaign emails are written to move readers from awareness to action.",
  },
  {
    icon: <VideoIcon />,
    title: "Video Scripts",
    description:
      "Explainer scripts, brand videos, and thought leadership content — structured to sound natural and keep viewers watching.",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <div
      ref={ref}
      className={`service-card${isVisible ? " line-visible" : ""}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, box-shadow 0.25s ease, background-color 0.5s ease`,
      }}
    >
      <div style={{ marginBottom: "1rem" }}>{service.icon}</div>
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "var(--ink-black)",
          marginBottom: "0.75rem",
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.95rem",
          lineHeight: 1.7,
          color: "var(--muted-text)",
        }}
      >
        {service.description}
      </p>
    </div>
  );
}

export default function ServicesSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id="services"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "var(--off-white)",
      }}
    >
      <div ref={ref} style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <span
          className="section-label"
          style={{ textAlign: "center", display: "block" }}
        >
          What I Do
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
          Content that serves your business goals
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {services.map((service, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static decorative elements
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            data-ocid="services.primary_button"
            className="btn-primary"
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            → See All Services
          </button>
        </div>
      </div>
    </section>
  );
}
