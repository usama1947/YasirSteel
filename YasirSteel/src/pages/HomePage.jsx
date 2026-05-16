import { Link } from 'react-router-dom';
import { companyFacts, currentYear, productLines, valueCards } from '../content';

function HomePage() {
  return (
    <>
      <header className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
          {/* <p className="eyebrow">Company profile - {currentYear}</p> */}
            <h1>
              Steel for the
              <br />
              building of a
              <br />
              <span>Kingdom.</span>
            </h1>
            <p className="hero-lead">
              Round bars, square bars, flats, angles, welded mesh, and deformed rebar - manufactured to A36, ASTM A615 Gr 60,
              and BS 4449 from our facility in the Kingdom of Saudi Arabia.
            </p>
            <div className="hero-actions">
              <Link to="/company" className="button button-primary">
                Explore the company
              </Link>
              <Link to="/products" className="button button-secondary">
                View products
              </Link>
            </div>
            <div className="hero-facts">
              {companyFacts.map((fact) => (
                <div key={fact.label} className="hero-fact">
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <aside className="hero-panel" aria-label="Company highlights">
            <div className="hero-stat">
              <span>06</span>
              <small>Core product lines manufactured</small>
            </div>
            <div className="hero-stat">
              <span>24/7</span>
              <small>Production readiness</small>
            </div>
            <div className="hero-stat hero-stat-wide">
              <span>Jeddah</span>
              <small>Two dedicated facilities: structural rolling and specialized wire mesh plant</small>
            </div>
            <div className="hero-stat">
              <span>100%</span>
              <small>Mill-certified dispatch</small>
            </div>
          </aside>
        </div>
      </header>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Overview</p>
            <h2>Comprehensive steel manufacturing capabilities.</h2>
            <p>
              Use the navigation to explore our company history, full product range, strict quality standards, and contact
              details. We operate multiple dedicated facilities to ensure high-quality production of structural steel and wire mesh.
            </p>
          </div>

          <div className="snapshot-grid">
            {companyFacts.map((fact) => (
              <article key={fact.label} className="snapshot-card">
                <p>{fact.label}</p>
                <h3>{fact.value}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading dark">
            <p className="section-label">Featured lines</p>
            <h2>The core products buyers ask for first.</h2>
            <p>
              The product pages list the full catalog. This home page gives a quick view of the main sections and reinforcement
              products.
            </p>
          </div>

          <div className="product-grid">
            {productLines.slice(0, 4).map((product) => (
              <article key={product.name} className="product-card">
                {product.image && (
                  <div className="product-image">
                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }} />
                  </div>
                )}
                <div className="product-topline">
                  <h3>{product.name}</h3>
                  <span>{product.spec}</span>
                </div>
                <p>{product.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Why it matters</p>
            <h2>Our core manufacturing values.</h2>
          </div>

          <div className="value-grid">
            {valueCards.map((card) => (
              <article key={card.number} className="value-card">
                <span className="value-number">{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;