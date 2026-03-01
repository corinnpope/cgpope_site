/*
 * DESIGN: Gallery Noir — black background, artwork as sole color source.
 * Masonry grid gallery with lightbox. Helvetica Neue typography.
 */

import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "wouter";

const PAINTINGS = [
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_7224_38801c49.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_7479_e78c3aaa.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_4060_aca471de.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_5580_7a01d599.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_4098_60637d03.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_7480_094d358a.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_4068_77319270.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_4070_89046b14.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_3869_522aa0f2.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_4074_541ffeec.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_7483_52f22e98.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_4090_e7bc263a.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_2451_6e870975.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_7467_c4fd0d2c.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_4571_7577f61c.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_3697_d62a3100.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_3700_6ac38693.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_3740_b6555914.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_1935_c54f03d1.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_2831_b1ce8d15.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_2886_17213578.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_4259_75c73d1f.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_4297_230ad6cd.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_4570_7252a31e.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_5079_f5664354.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_7925_090618cb.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_8320_dc57ea07.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_0225_fe7a559d.jpeg", alt: "Painting by Christine G. Pope" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_1373_f50ec9a7.jpeg", alt: "Painting by Christine G. Pope" },
];

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">×</button>
      <img
        className="lightbox-img"
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default function Home() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [location] = useLocation();

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightbox({ src, alt });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      {/* Navigation */}
      <nav className="site-nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo">Christine G. Pope</a>
          <ul className="nav-links">
            <li><a href="/" className={location === "/" ? "active" : ""}>Work</a></li>
            <li><a href="/about">About</a></li>
            <li>
              <a href="mailto:christine@cgpopedesign.com">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <div className="page-content">
        {/* Hero */}
        <div style={{
          padding: "4rem 2rem 3rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}>
          <h1 style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.01em",
            color: "white",
            margin: "0 0 0.5rem 0",
            lineHeight: 1.1,
          }}>
            Christine G. Pope
          </h1>
          <p style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 300,
            fontSize: "0.875rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
            margin: "0 0 3rem 0",
          }}>
            Acrylic Paintings · Bridgewater, New Jersey
          </p>
          <hr className="section-rule" />
        </div>

        {/* Gallery */}
        <div style={{ padding: "2.5rem 2rem 0", maxWidth: "1400px", margin: "0 auto" }}>
          <div className="masonry-grid">
            {PAINTINGS.map((painting, i) => (
              <div
                key={painting.src}
                className="masonry-item gallery-item-animate"
                style={{ animationDelay: `${Math.min(i * 0.04, 0.8)}s` }}
              >
                <div
                  className="painting-wrapper"
                  onClick={() => openLightbox(painting.src, painting.alt)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && openLightbox(painting.src, painting.alt)}
                  aria-label="View painting full size"
                >
                  <img
                    src={painting.src}
                    alt={painting.alt}
                    loading={i < 6 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div style={{
          padding: "5rem 2rem 6rem",
          maxWidth: "1400px",
          margin: "0 auto",
          textAlign: "center",
        }}>
          <hr className="section-rule" style={{ marginBottom: "4rem" }} />
          <p style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            color: "rgba(255,255,255,0.75)",
            margin: "0 0 1.5rem 0",
            lineHeight: 1.6,
          }}>
            Interested in purchasing a painting?
          </p>
          <a
            href="mailto:christine@cgpopedesign.com"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "white",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.4)",
              paddingBottom: "2px",
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "white")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
          >
            christine@cgpopedesign.com
          </a>
        </div>

        {/* Footer */}
        <footer style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "2rem",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <span style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.25)",
          }}>
            © {new Date().getFullYear()} Christine G. Pope
          </span>
          <a
            href="/about"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
          >
            About the Artist
          </a>
        </footer>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />
      )}
    </div>
  );
}
