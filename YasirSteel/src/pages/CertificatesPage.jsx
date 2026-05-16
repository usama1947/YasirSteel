import { Link } from 'react-router-dom';

const certificates = [
  {
    title: 'Commercial Registration Certificate',
    description: 'Official Ministry of Commerce registration for Yasir Steel.',
    href: '/resources/CrCertificate (1).pdf',
    image: '/resources/cr-certificate-preview.png',
  },
  {
    title: 'VAT Registration',
    description: 'ZATCA value-added tax registration certificate.',
    href: '/resources/VAT Reg. 2023.pdf',
    image: '/resources/vat-image.png',
  },
  {
    title: 'National Address Proof',
    description: 'Official proof of national address registered with Saudi Post.',
    href: '/resources/address-proof.jpeg',
    image: '/resources/address-proof.jpeg',
  },
  {
    title: 'Commercial Registration (2018)',
    description: 'Historical Ministry of Commerce registration for Yasir Steel (2018).',
    href: '/resources/certificate-registration-2018.pdf',
    image: '/resources/certificate-registration-2018.png',
  },
  {
    title: 'Commercial Registration (2015)',
    description: 'Historical Ministry of Commerce registration for Yasir Steel (2015).',
    href: '/resources/certificate-registration-2015.pdf',
    image: '/resources/certificate-registeration-2015.png',
  },
];

function CertificatesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="page-crumb">Certificates</p>
            <h1>Company documents and registration files.</h1>
            <p>
              Access our official commercial and VAT registration documents to verify our compliance and standing in the Kingdom of Saudi Arabia.
            </p>
          </div>
          <div className="page-hero-card page-hero-card-logo">
            <img src="/resources/logo.jpeg" alt="Yasir Steel logo" />
            <strong>Official company documents and logo.</strong>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading dark">
            <p className="section-label">Documents</p>
            <h2>Official company credentials.</h2>
            <p>
              Download our primary registration records below to facilitate your vendor qualification and approval processes.
            </p>
          </div>

          <div className="certificate-grid">
            {certificates.map((certificate) => (
              <article key={certificate.title} className="certificate-card">
                {certificate.image && (
                  <div className="certificate-image" style={{ marginBottom: '1rem' }}>
                    <img src={certificate.image} alt={certificate.title} style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #e2e8f0' }} />
                  </div>
                )}
                <div>
                  <span>PDF</span>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.description}</p>
                </div>
                <a href={certificate.href} target="_blank" rel="noreferrer" className="button button-primary" style={{ marginTop: '1rem' }}>
                  Open document
                </a>
              </article>
            ))}
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Link to="/contact" className="button button-secondary">
              Back to contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CertificatesPage;
