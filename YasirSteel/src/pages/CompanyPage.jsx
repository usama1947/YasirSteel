import { Link } from 'react-router-dom';
import { companyFacts, facilityCards, sectors, valueCards } from '../content';

function CompanyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="page-crumb">Company</p>
            <h1>Leading steel manufacturing in Saudi Arabia.</h1>
            <p>
              Yasir Steel operates two specialized facilities in Jeddah, dedicated to producing high-grade structural steel and welded wire mesh to international standards.
            </p>
          </div>
          <div className="page-hero-card">
            <span>Profile summary</span>
            <strong>Dedicated structural rolling and separate mesh production facilities in Jeddah.</strong>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Snapshot</p>
            <h2>Key company facts.</h2>
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

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Capability</p>
            <h2>Dedicated rolling and fabrication facilities.</h2>
            <p>
              Our operations are divided into specialized facilities for structural rolling and wire mesh production, ensuring focused quality control, efficient stock handling, and seamless dispatch.
            </p>
          </div>

          <div className="facility-grid">
            {facilityCards.map((card) => (
              <article key={card.title} className="facility-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading dark">
            <p className="section-label">Markets</p>
            <h2>Who this company serves.</h2>
          </div>

          <div className="sector-grid">
            {sectors.map((sector) => (
              <article key={sector} className="sector-card">
                <p>{sector}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Values</p>
            <h2>Our core operating principles.</h2>
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

          <div style={{ marginTop: '2rem' }}>
            <Link to="/products" className="button button-primary">
              Continue to products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CompanyPage;