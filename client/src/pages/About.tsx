/*
 * DESIGN: Gallery Noir — About page.
 * Two-column layout on desktop (painting left, bio right).
 * Single-column on mobile. Generous margins, light-weight Helvetica.
 */

import { useLocation } from "wouter";

export default function About() {
  const [location] = useLocation();

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      {/* Navigation */}
      <nav className="site-nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo">Christine G. Pope</a>
          <ul className="nav-links">
            <li><a href="/" className={location === "/" ? "active" : ""}>Work</a></li>
            <li><a href="/about" className="active">About</a></li>
            <li>
              <a href="mailto:christine@cgpopedesign.com">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="page-content">
        {/* Page Header */}
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
            About the Artist
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
            Christine G. Pope · Bridgewater, New Jersey
          </p>
          <hr className="section-rule" />
        </div>

        {/* Two-column layout: painting + bio */}
        <div style={{
          padding: "3rem 2rem 0",
          maxWidth: "1400px",
          margin: "0 auto",
        }}>
          <style>{`
            @media (min-width: 768px) {
              .about-layout {
                display: grid !important;
                grid-template-columns: 1fr 1fr !important;
                gap: 5rem !important;
                align-items: start !important;
              }
            }
          `}</style>
          <div className="about-layout" style={{ display: "block" }}>
            {/* Featured Painting */}
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_7224_38801c49.jpeg"
                alt="Acrylic painting by Christine G. Pope — tree at sunset"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  marginBottom: "2rem",
                }}
              />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_5580_7a01d599.jpeg"
                alt="Pet portrait by Christine G. Pope — goldendoodle"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>

            {/* Bio */}
            <div>
              <p style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.85)",
                margin: "0 0 1.75rem 0",
              }}>
                Christine G. Pope is a graphic designer and artist who has called Bridgewater, New Jersey home for over forty years.
              </p>

              <p style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.85)",
                margin: "0 0 1.75rem 0",
              }}>
                A graduate of the Newark School of Fine and Industrial Arts, Christine launched her career as an Art Director at Turchette Advertising in 1976, where she created marketing campaigns for clients including the New Jersey Devils, New Jersey Nets, and New Jersey Generals during the early days of cable television and regional sports marketing.
              </p>

              <p style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.85)",
                margin: "0 0 1.75rem 0",
              }}>
                She went on to establish C.G. Pope Design Inc., her own freelance graphic design studio, where she served pharmaceutical clients as a consulting art director for over 25 years — interpreting creative briefs, developing campaign concepts, and managing projects from rough sketches to polished finals. Over the years, she collaborated with agencies including McCann Healthcare Worldwide, Torre Lazur Healthcare Communications, and Commonhealth on campaigns for brands like Claritin, Lunesta, and Mucinex.
              </p>

              <p style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.85)",
                margin: "0 0 1.75rem 0",
              }}>
                When Christine retired in 2015, she wasn't sure what would come next. Five years later, she started experimenting with acrylics — something she'd never had time for during her commercial art career. She especially enjoys painting landscapes and pet portraits. She's also an avid photographer.
              </p>

              <p style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.85)",
                margin: "0 0 3rem 0",
              }}>
                Christine lives in Bridgewater with her husband of 45 years. She recently became a grandmother and keeps a collection of over 250 succulents.
              </p>

              {/* Contact */}
              <div style={{
                borderTop: "1px solid rgba(255,255,255,0.1)",
                paddingTop: "2.5rem",
              }}>
                <p style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  margin: "0 0 1rem 0",
                }}>
                  Inquiries &amp; Purchases
                </p>
                <a
                  href="mailto:christine@cgpopedesign.com"
                  style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
                    color: "white",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.35)",
                    paddingBottom: "2px",
                    transition: "border-color 0.2s ease",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "white")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)")}
                >
                  christine@cgpopedesign.com
                </a>
                <p style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: 300,
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.4)",
                  margin: "1rem 0 0 0",
                  lineHeight: 1.7,
                }}>
                  If you're interested in purchasing any of Christine's paintings,<br />
                  please reach out by email and she'll be happy to connect.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wide panoramic painting */}
        <div style={{
          padding: "5rem 2rem 0",
          maxWidth: "1400px",
          margin: "0 auto",
        }}>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_4098_60637d03.jpeg"
            alt="Ocean seascape by Christine G. Pope"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        {/* Three-column painting row */}
        <div style={{
          padding: "1.5rem 2rem 0",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
        }}>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_4060_aca471de.jpeg"
            alt="Tree canopy painting by Christine G. Pope"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_7479_e78c3aaa.jpeg"
            alt="Forest landscape by Christine G. Pope"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663253683569/QkVNSe4xhvZ8NfWV9VnaSE/IMG_7480_094d358a.jpeg"
            alt="Landscape painting by Christine G. Pope"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        {/* Back to gallery */}
        <div style={{
          padding: "5rem 2rem 6rem",
          maxWidth: "1400px",
          margin: "0 auto",
          textAlign: "center",
        }}>
          <hr className="section-rule" style={{ marginBottom: "4rem" }} />
          <a
            href="/"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              transition: "color 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            ← View All Work
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
            href="/"
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
            Gallery
          </a>
        </footer>
      </div>
    </div>
  );
}
