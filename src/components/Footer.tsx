import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          
          <div className="footer-brand">
            <div className="brand-logo">
              <span className="logo-initial">S</span>
              <div className="logo-text-group">
                <span className="logo-the">The</span>
                <span className="logo-main">Silicon Harvest</span>
              </div>
            </div>
            <p className="brand-description">
              Our GPS-based bus stop announcement system deployed in Tamil Nadu Government buses reflects our commitment to innovation and impact.
            </p>
            
            <div className="footer-socials">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-nav">
            <h4 className="footer-heading">Products</h4>
            <ul className="footer-links">
              <li><a href="#">Automatic Water Level Monitor</a></li>
              <li><a href="#">GSM switch for pump operating system</a></li>
              <li><a href="#">Automatic murukku machine</a></li>
              <li><a href="#">GPS synchronized Time display</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Get in Touch</h4>
            <div className="contact-block">
              <span className="contact-label">Email</span>
              <a href="mailto:research@siliconharvest.net" className="contact-value">research@siliconharvest.net</a>
            </div>
            <div className="contact-block">
              <span className="contact-label">Phone</span>
              <a href="tel:+9190877758511" className="contact-value">+91 90877 758511</a>
            </div>
            <div className="contact-block">
              <span className="contact-label">Location</span>
              <p className="contact-value">80, Second Floor, Yanaikkal, Simmakkal,<br/>Madurai - 625 001.</p>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Silicon Harvest. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
