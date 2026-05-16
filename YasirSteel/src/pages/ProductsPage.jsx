import { Link } from 'react-router-dom';
import { processSteps, productLines } from '../content';

function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="page-crumb">Products</p>
            <h1>Comprehensive product range and manufacturing flow.</h1>
            <p>
              Explore our core structural steel and wire mesh product lines, including detailed specifications, sizes, and applications.
            </p>
          </div>
          <div className="page-hero-card">
            <span>Catalog</span>
            <strong>Long products, mesh, and reinforcement steel.</strong>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading dark">
            <p className="section-label">Catalog</p>
            <h2>Our Product Lines.</h2>
          </div>

          <div className="product-grid">
            {productLines.map((product) => (
              <article key={product.name} className="product-card">
                {product.image && (
                  <div className="product-image">
                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }} />
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
            <p className="section-label">Process</p>
            <h2>How a standard order moves through our facilities.</h2>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article key={step.step} className="process-card">
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Link to="/quality" className="button button-primary">
              Review quality standards
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsPage;