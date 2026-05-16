import { Link } from 'react-router-dom';
import { qualityPolicy, standards } from '../content';

function QualityPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="page-crumb">Quality</p>
            <h1>Standards, inspection, and mill certification.</h1>
            <p>
              We maintain strict quality control at every stage of production, strictly adhering to international specifications for reliable, traceable dispatch.
            </p>
          </div>
          <div className="page-hero-card">
            <span>Compliance</span>
            <strong>A36, ASTM A615 Gr 60, and BS 4449.</strong>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Tests</p>
            <h2>Rigorous quality checks before dispatch.</h2>
          </div>

          <div className="value-grid">
            {qualityPolicy.map((point, index) => (
              <article key={point} className="value-card">
                <span className="value-number">0{index + 1}</span>
                <h3>{point}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading dark">
            <p className="section-label">Standards</p>
            <h2>The international manufacturing standards we follow.</h2>
          </div>

          <div className="standards-grid">
            {standards.map((standard) => (
              <article key={standard.code} className="standard-card">
                <span>{standard.code}</span>
                <h3>{standard.title}</h3>
                <p>{standard.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Documentation</p>
            <h2>Every dispatch should be traceable.</h2>
            <p>
              Every bundle dispatched from our facilities is rigorously certified, precisely weighed, and delivered with a full documented trail tracing back to its heat number.
            </p>
          </div>

          <div className="page-hero-card" style={{ maxWidth: '42rem' }}>
            <strong>Mill certificate accompanies every dispatch, traceable to heat number.</strong>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Link to="/contact" className="button button-primary">
              Contact sales / quality
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default QualityPage;