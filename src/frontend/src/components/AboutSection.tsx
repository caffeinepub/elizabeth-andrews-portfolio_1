import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const skills = {
  "Content & Writing": [
    "Long-Form Blog Writing",
    "Technical Writing",
    "Web Copy",
    "Email Copy",
    "Social Media Copy",
    "Video Scripting",
    "Editing & Proofreading",
  ],
  "SEO & Strategy": [
    "Keyword Research",
    "On-Page SEO",
    "Search Intent Optimisation",
    "Content Strategy",
    "Content Calendar Management",
    "Internal Linking",
    "Audience Research",
  ],
  Tools: [
    "SEMrush",
    "Ahrefs",
    "Google Search Console",
    "Google Analytics",
    "Ubersuggest",
    "WordPress",
    "Grammarly",
    "Google Docs",
    "Microsoft Office",
  ],
};

const experience = [
  {
    company: "Simple Logic IT",
    role: "Executive Content Writer — Technical & Business Content",
    description:
      "Joined to lead a complete website content revamp across five B2B IT product lines — database, middleware, cloud, managed services, and digital transformation. Wrote 40+ long-form articles and 40+ service pages. Grew organic search traffic by 40%, managed 5 SaaS product content streams simultaneously, and hit every deadline across the engagement.",
  },
  {
    company: "Halo Media Works",
    role: "Freelance Content Writer — Brand & Lifestyle",
    description:
      "Delivered SEO-optimised blog content for a creative services agency targeting small business owners and marketing professionals. 15+ articles published with zero revision requests — reflecting strong brief interpretation and independent editorial judgement.",
  },
  {
    company: "Rubani",
    role: "Freelance Content Writer — Cultural & Historical Long-Form",
    description:
      "Produced 3–4 research-backed articles per week over a 3-month period, totalling 40+ published pieces. Introduced a proofreading workflow that reduced published errors by 25% and improved average time-on-page by 20%.",
  },
  {
    company: "Startup Lanes",
    role: "Internship — Financial & Startup Content",
    description:
      "Created fintech and investor-facing content that grew LinkedIn follower engagement by 15%. Gained early-career experience writing for a startup audience, developing skills in financial storytelling and concise brand copy.",
  },
];

function ApproachColumn({
  icon,
  title,
  text,
  delay,
}: { icon: React.ReactNode; title: string; text: string; delay: number }) {
  const { ref, isVisible } = useIntersectionObserver(0.1);
  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        padding: "2rem 1rem",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${delay * 0.15}s, transform 0.6s ease ${delay * 0.15}s`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1.25rem",
        }}
      >
        {icon}
      </div>
      <h4
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.2rem",
          color: "var(--ink-black)",
          marginBottom: "0.75rem",
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.95rem",
          color: "var(--muted-text)",
          lineHeight: 1.7,
        }}
      >
        {text}
      </p>
    </div>
  );
}

function SkillPills({
  category,
  pills,
}: { category: string; pills: string[] }) {
  const { ref, isVisible } = useIntersectionObserver(0.1);
  return (
    <div ref={ref} style={{ marginBottom: "2rem" }}>
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.75rem",
          color: "var(--sage-green)",
          marginBottom: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {category}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {pills.map((pill, i) => (
          <span
            key={pill}
            className="skill-pill"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(10px)",
              transition: `opacity 0.4s ease ${i * 0.03}s, transform 0.4s ease ${i * 0.03}s`,
            }}
          >
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}

function TimelineEntry({
  entry,
  index,
}: { entry: (typeof experience)[0]; index: number }) {
  const { ref, isVisible } = useIntersectionObserver(0.1);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: isLeft ? "flex-start" : "flex-end",
        padding: "1.5rem 0",
        position: "relative",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateX(0)"
          : `translateX(${isLeft ? "-30px" : "30px"})`,
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      {/* Node */}
      <div
        className="timeline-node"
        style={{
          position: "absolute",
          left: "50%",
          top: "2rem",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          maxWidth: "44%",
          padding: "1.5rem",
          backgroundColor: "var(--off-white)",
          borderRadius: "8px",
          boxShadow: "0 2px 12px rgba(26,26,26,0.06)",
          marginLeft: isLeft ? 0 : undefined,
          marginRight: isLeft ? undefined : 0,
        }}
      >
        <h4
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.1rem",
            color: "var(--ink-black)",
            marginBottom: "0.25rem",
          }}
        >
          {entry.company}
        </h4>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.75rem",
            color: "var(--sage-green)",
            marginBottom: "0.75rem",
            fontStyle: "italic",
          }}
        >
          {entry.role}
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            color: "var(--muted-text)",
            lineHeight: 1.6,
          }}
        >
          {entry.description}
        </p>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const { ref: heroRef, isVisible: heroVisible } = useIntersectionObserver(0.1);
  const { ref: timelineRef, isVisible: timelineVisible } =
    useIntersectionObserver(0.05);

  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--warm-beige-light)",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Paper texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          animation: "parchmentBreathe 20s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <div
        ref={heroRef}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Intro */}
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            color: "var(--ink-black)",
            marginBottom: "0.5rem",
            opacity: heroVisible ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        >
          Hi, I’m Elizabeth.
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontStyle: "italic",
            color: "var(--sage-green)",
            fontSize: "1.1rem",
            marginBottom: "3rem",
            opacity: heroVisible ? 1 : 0,
            transition: "opacity 0.8s ease 0.2s",
          }}
        >
          SEO Content Writer. Research obsessively. Multiple Niche Research
          Writer.
        </p>

        {/* My Story */}
        <span className="section-label">My Story</span>
        <blockquote
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "1.3rem",
            color: "var(--ink-black)",
            lineHeight: 1.5,
            borderLeft: "3px solid var(--terracotta)",
            paddingLeft: "1.5rem",
            margin: "1rem 0 2rem",
          }}
        >
          “I don’t believe in niches—I believe in the power of a well-researched
          narrative to drive results in any field.”
        </blockquote>

        <div
          className="drop-cap"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "var(--ink-black)",
            marginBottom: "1.5rem",
          }}
        >
          Some people discover writing. I didn’t; writing discovered me.
        </div>
        {[
          "Long before I understood what content strategy or brand voice meant, I was already putting words together in ways that made people stop and pay attention. It started young. A restlessness. A need to make sense of the world through sentences. What I didn\u2019t know then was that this wasn\u2019t just a hobby \u2014 it was a calling quietly taking root.",
          "As I grew, so did my curiosity. I didn\u2019t want to write about just one thing. I wanted to understand everything. So I dived deep into industries, communities, and conversations most writers never bother to explore. Finance. Health and wellness. Tech real estate. Fashion. E-commerce. Each world had its own language, its own audience, its own pulse. And I am learning to speak all of them fluently.",
          "That\u2019s what makes my work different. I don\u2019t just write \u2014 I research, immerse, and translate. I take complex ideas and make them feel human. I take overlooked stories and give them a voice. Whether I\u2019m writing for a startup founder, a wellness brand, or a corporate enterprise, the goal is always the same: words that connect, convert, and leave a lasting impression.",
        ].map((para) => (
          <p
            key={para.slice(0, 20)}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--ink-black)",
              marginBottom: "1.25rem",
            }}
          >
            {para}
          </p>
        ))}

        {/* Approach */}
        <div style={{ margin: "4rem 0" }}>
          <span className="section-label">My Approach</span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            <ApproachColumn
              delay={0}
              icon={
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  aria-hidden="true"
                  style={{ animation: "bob 3s ease-in-out infinite" }}
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="10"
                    stroke="var(--terracotta)"
                    strokeWidth="2"
                  />
                  <line
                    x1="25"
                    y1="25"
                    x2="34"
                    y2="34"
                    stroke="var(--terracotta)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
              title="Research First"
              text="Before I write a single word, I understand the audience, the search intent, the competitor landscape, and the topic inside-out. Good writing starts with good research."
            />
            <ApproachColumn
              delay={1}
              icon={
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  aria-hidden="true"
                  style={{ animation: "bob 3.5s ease-in-out 0.5s infinite" }}
                >
                  <rect
                    x="6"
                    y="6"
                    width="28"
                    height="28"
                    rx="2"
                    stroke="var(--sage-green)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <line
                    x1="12"
                    y1="16"
                    x2="28"
                    y2="16"
                    stroke="var(--terracotta)"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="12"
                    y1="22"
                    x2="22"
                    y2="22"
                    stroke="var(--terracotta)"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="12"
                    y1="28"
                    x2="20"
                    y2="28"
                    stroke="var(--terracotta)"
                    strokeWidth="1.5"
                  />
                </svg>
              }
              title="Structure Always"
              text="A well-structured article keeps readers on the page and signals quality to search engines. I plan content architecture before I start writing — every time."
            />
            <ApproachColumn
              delay={2}
              icon={
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  aria-hidden="true"
                  style={{ animation: "bob 4s ease-in-out 1s infinite" }}
                >
                  <path
                    d="M8 20 C8 12, 32 12, 32 20"
                    stroke="var(--terracotta)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M8 20 L8 28 Q16 34 20 34 Q24 34 32 28 L32 20"
                    stroke="var(--terracotta)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="rgba(199,91,57,0.05)"
                  />
                  <path
                    d="M14 22 L18 26 L26 18"
                    stroke="var(--sage-green)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="Clarity Above All"
              text="Technical content doesn’t have to be intimidating. My job is to make complex ideas feel simple without dumbing them down or losing their accuracy."
            />
          </div>
        </div>

        {/* Skills */}
        <div style={{ margin: "4rem 0" }}>
          <span className="section-label">Skills &amp; Tools</span>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.8rem",
              color: "var(--ink-black)",
              marginBottom: "2rem",
            }}
          >
            What I bring to every project
          </h3>
          {Object.entries(skills).map(([cat, pills]) => (
            <SkillPills key={cat} category={cat} pills={pills} />
          ))}
        </div>

        {/* Experience */}
        <div style={{ margin: "4rem 0" }}>
          <span className="section-label">Experience</span>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.8rem",
              color: "var(--ink-black)",
              marginBottom: "2rem",
            }}
          >
            Where I’ve worked and what I’ve done
          </h3>

          <div
            ref={timelineRef}
            style={{ position: "relative", padding: "0 0 2rem" }}
          >
            {/* Timeline line */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                width: "2px",
                backgroundColor: "var(--terracotta)",
                transform: "translateX(-50%)",
                height: timelineVisible ? "100%" : "0",
                transition: "height 2s ease",
                opacity: 0.3,
                zIndex: 1,
              }}
            />

            {experience.map((entry, i) => (
              <TimelineEntry key={entry.company} entry={entry} index={i} />
            ))}
          </div>

          {/* Mobile timeline (stacked) */}
          <div className="mobile-timeline">
            {experience.map((entry) => (
              <div
                key={entry.company}
                style={{
                  marginBottom: "1.5rem",
                  padding: "1.5rem",
                  backgroundColor: "var(--off-white)",
                  borderRadius: "8px",
                  borderLeft: "3px solid var(--terracotta)",
                }}
              >
                <h4
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem",
                    color: "var(--ink-black)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {entry.company}
                </h4>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.75rem",
                    color: "var(--sage-green)",
                    marginBottom: "0.5rem",
                    fontStyle: "italic",
                  }}
                >
                  {entry.role}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "var(--muted-text)",
                    lineHeight: 1.6,
                  }}
                >
                  {entry.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div style={{ margin: "4rem 0" }}>
          <span className="section-label">Education</span>
          {[
            {
              degree: "Master of Arts in Sociology",
              institution: "Indira Gandhi National Open University (IGNOU)",
              years: "2023 – Present",
            },
            {
              degree: "Bachelor of Arts in Sociology and Economics",
              institution: "Mumbai University",
              years: "2019 – 2022",
            },
          ].map((edu) => (
            <div
              key={edu.degree}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                marginBottom: "1.25rem",
                padding: "1.25rem",
                backgroundColor: "var(--off-white)",
                borderRadius: "8px",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
                style={{ flexShrink: 0, marginTop: "2px" }}
              >
                <path
                  d="M16 4 L30 12 L16 20 L2 12 Z"
                  stroke="var(--terracotta)"
                  strokeWidth="1.5"
                  fill="rgba(199,91,57,0.1)"
                />
                <path
                  d="M6 14 L6 22 Q16 28 26 22 L26 14"
                  stroke="var(--sage-green)"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
              <div>
                <h4
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.05rem",
                    color: "var(--ink-black)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {edu.degree}
                </h4>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "var(--sage-green)",
                  }}
                >
                  {edu.institution}
                </p>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.75rem",
                    color: "var(--muted-text)",
                  }}
                >
                  {edu.years}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-timeline { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-timeline { display: none !important; }
        }
      `}</style>
    </section>
  );
}
