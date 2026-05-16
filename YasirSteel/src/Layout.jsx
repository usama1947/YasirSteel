import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { currentYear, whatsappLink } from './content';

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.title = 'Yasir Steel - Company Profile';
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      document.body.classList.toggle('is-scrolled', window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navClassName = ({ isActive }) => (isActive ? 'is-active' : undefined);

  return (
    <div className="page-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <header className="site-header">
        <nav className={`navbar ${menuOpen ? 'is-open' : ''}`}>
          <div className="container nav-inner">
            <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
              <img className="brand-logo" src="/resources/logo.jpeg" alt="Yasir Steel logo" />
              <span className="brand-text">
                Yasir <strong>Steel</strong>
              </span>
            </NavLink>

            <button
              type="button"
              className="menu-button"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>

            <div className={`nav-panel ${menuOpen ? 'is-open' : ''}`}>
              <NavLink to="/" className={navClassName}>
                Home
              </NavLink>
              <NavLink to="/company" className={navClassName}>
                Company
              </NavLink>
              <NavLink to="/products" className={navClassName}>
                Products
              </NavLink>
              <NavLink to="/quality" className={navClassName}>
                Quality
              </NavLink>
              <NavLink to="/certificates" className={navClassName}>
                Certificates
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-cta is-active' : 'nav-cta')}>
                Contact
              </NavLink>
            </div>
          </div>
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <a
        className="floating-whatsapp"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <img src="./images/whatsapp-icon.png" alt="" aria-hidden="true" />
      </a>

      <footer className="footer footer-global">
        <div className="container footer-grid">
          <div className="footer-brand-block">
            <NavLink to="/" className="footer-brand" onClick={() => setMenuOpen(false)}>
              <img className="brand-logo" src="/resources/logo.jpeg" alt="Yasir Steel logo" />
              <span className="brand-text">
                Yasir <strong>Steel</strong>
              </span>
            </NavLink>
            <p>
              Saudi manufacturer of structural and reinforcement steel with mill-certified dispatch, consistent dimensional
              control, and direct support for quotations and documentation.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <h3>Explore</h3>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/company">Company</NavLink>
              <NavLink to="/products">Products</NavLink>
              <NavLink to="/quality">Quality</NavLink>
              <NavLink to="/certificates">Certificates</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>

            <div className="footer-column">
              <h3>Products</h3>
              <p>Round bars</p>
              <p>Square bars</p>
              <p>Flat bars</p>
              <p>Steel angles</p>
              <p>Welded wire mesh</p>
              <p>Deformed rebar</p>
            </div>

            <div className="footer-column">
              <h3>Company</h3>
              <p>M. Yaser & Partners Steel Factory Co. Ltd</p>
              <p>Trading as Yasir Steel</p>
              <p>Abi Al Abbas Al Yamani Street</p>
              <p>Al Wadi, Jeddah 22518</p>
              <p>Kingdom of Saudi Arabia</p>
            </div>

            <div className="footer-column">
              <h3>Support</h3>
              <p>Mill certificates</p>
              <p>Quotation requests</p>
              <p>Technical compliance</p>
              <p>Product availability</p>
              <p>Dispatch coordination</p>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>&copy; {currentYear} Yasir Steel Factory. All rights reserved.</p>
          <p className="footer-note">Long products, reinforcement, and mesh for construction and fabrication projects.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;