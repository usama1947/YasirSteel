import { whatsappLink } from '../content';

function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="page-crumb">Contact</p>
            <h1>Get a quotation or ask for mill documentation.</h1>
            <p>
              Connect directly with our sales, technical support, and dispatch teams via our official channels below.
            </p>
          </div>
          <div className="page-hero-card">
            <span>Fast contact</span>
            <strong>WhatsApp is the quickest route for a live response.</strong>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading dark">
            <p className="section-label">Reach us</p>
            <h2>Official company information and location.</h2>
          </div>

          <div className="footer-details footer-details-page">
            <div className="detail-card">
              <h3>Company</h3>
              <p>
                M. Yaser & Partners
                <br />
                Steel Factory Co. Ltd
                <br />
                Trading as Yasir Steel
              </p>
            </div>
            <div className="detail-card">
              <h3>Location</h3>
              <p>
                Abi Al Abbas Al Yamani Street
                <br />
                Al Wadi, Jeddah 22518
                <br />
                Kingdom of Saudi Arabia
              </p>
            </div>
            <div className="detail-card">
              <h3>What to ask for</h3>
              <p>
                Quotation, mill certificates, technical compliance questions, and product availability.
              </p>
            </div>
            <div className="detail-card">
              <h3>Response channel</h3>
              <p>
                WhatsApp is the most direct line for a first response and a quick handoff to the right person.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <a className="whatsapp-chip" href={whatsappLink} target="_blank" rel="noreferrer">
              <img src="./images/whatsapp-icon.png" alt="WhatsApp" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;