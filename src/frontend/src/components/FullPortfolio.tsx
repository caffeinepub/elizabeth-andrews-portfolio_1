import { useEffect, useRef, useState } from "react";
import {
  type PortfolioItem,
  brandBlogs,
  culturalBlogs,
  personalEssays,
  servicePages,
  technicalBlogs,
} from "../data/portfolioData";

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M6 2H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 1h4v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 1L8 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PortfolioItemCard({
  item,
  index,
}: { item: PortfolioItem; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-item-card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "1rem",
        textDecoration: "none",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(15px)",
        transition: `opacity 0.4s ease ${(index % 10) * 0.04}s, transform 0.4s ease ${(index % 10) * 0.04}s, box-shadow 0.2s ease, border-color 0.2s ease`,
      }}
    >
      <span
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "0.95rem",
          fontWeight: 600,
          color: "var(--ink-black)",
          lineHeight: 1.5,
        }}
      >
        {item.title}
      </span>
      <span style={{ color: "var(--terracotta)", marginTop: "3px" }}>
        <ExternalLinkIcon />
      </span>
    </a>
  );
}

interface CategorySectionProps {
  isEven: boolean;
  label: string;
  title: string;
  context: string;
  items: PortfolioItem[];
}

function CategorySection({
  isEven,
  label,
  title,
  context,
  items,
}: CategorySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={isEven ? "portfolio-cat-even" : "portfolio-cat-odd"}
      style={{ padding: "4rem 2rem" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          ref={ref}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="section-label">{label}</span>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.6rem",
              color: "var(--ink-black)",
              marginBottom: "0.5rem",
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              color: "var(--muted-text)",
              marginBottom: "2rem",
              maxWidth: "700px",
              lineHeight: 1.6,
            }}
          >
            {context}
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {items.map((item, i) => (
            <PortfolioItemCard
              key={`${item.category}-${i}`}
              item={item}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FullPortfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio">
      <div
        ref={ref}
        style={{
          padding: "6rem 2rem 3rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <span
          className="section-label"
          style={{ textAlign: "center", display: "block" }}
        >
          My Work
        </span>
        <h2
          className="section-headline"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            textAlign: "center",
            color: "var(--ink-black)",
            marginBottom: "1rem",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          A collection of articles, service pages, and content built for real
          results.
        </h2>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            textAlign: "center",
            color: "var(--muted-text)",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: 1.6,
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.2s",
          }}
        >
          Everything here has been written for a specific audience, with a
          specific goal \u2014 whether that\u2019s ranking on page one,
          converting a visitor, or telling a brand\u2019s story.
        </p>
      </div>

      <CategorySection
        isEven={false}
        label="Technical SEO Blogs | Simple Logic IT"
        title="Technical SEO Articles"
        context="Written for Simple Logic IT \u2014 a B2B managed services company serving enterprise clients across BFSI, FMCG, and government sectors. Each article was keyword-researched, audience-mapped, and structured for both readability and search performance."
        items={technicalBlogs}
      />
      <CategorySection
        isEven={true}
        label="Website & Service Page Copy | Simple Logic IT"
        title="Website & Service Page Copy"
        context="Spearheaded the complete content revamp for Simple Logic IT, spanning five distinct product lines. Each service page built from the ground up with on-page SEO best practices."
        items={servicePages}
      />
      <CategorySection
        isEven={false}
        label="SEO Lifestyle & Brand Content | Halo Media Works"
        title="Brand & Lifestyle Blogs"
        context="SEO-optimised blogs for a creative services brand targeting small business owners and marketing teams. Delivered with zero revision requests."
        items={brandBlogs}
      />
      <CategorySection
        isEven={true}
        label="Cultural & Historical Long-Form | Rubani"
        title="Research-Backed Long-Form Blogs"
        context="3\u20134 research-backed blogs per week, 1,000+ words each. Published original articles over 3 months."
        items={culturalBlogs}
      />
      <CategorySection
        isEven={false}
        label="Personal Essays | Voice & Perspective"
        title="Personal Essays & Opinion Writing"
        context="Intentional personal pieces showcasing emotional intelligence, distinct voice, and human connection \u2014 not just SEO."
        items={personalEssays}
      />
    </section>
  );
}
