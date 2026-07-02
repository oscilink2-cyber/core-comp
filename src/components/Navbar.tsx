import { useState } from 'react';
import { Layers, Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <a href="#" className="logo">
          <Layers size={24} className="logo-icon" />
          <span className="logo-text">CoreCompany</span>
        </a>

        {/* Center Links */}
        <div className="nav-links desktop-nav">
          <a href="#" className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`} onClick={() => setActiveLink('Home')}>Home</a>
          <a href="#" className={`nav-link ${activeLink === 'About Us' ? 'active' : ''}`} onClick={() => setActiveLink('About Us')}>About Us</a>
          <a href="#" className={`nav-link ${activeLink === 'Products' ? 'active' : ''}`} onClick={() => setActiveLink('Products')}>
            Products <ChevronDown size={16} />
          </a>
          <a href="#" className={`nav-link ${activeLink === 'Contact Us' ? 'active' : ''}`} onClick={() => setActiveLink('Contact Us')}>Contact Us</a>
        </div>

        {/* Right Actions */}
        <div className="nav-actions desktop-nav">
          <button className="btn btn-outline-primary">Get a Quote</button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu animate-fade-in">
          <a href="#" className={`mobile-link ${activeLink === 'Home' ? 'active' : ''}`} onClick={() => { setActiveLink('Home'); setMobileMenuOpen(false); }}>Home</a>
          <a href="#" className={`mobile-link ${activeLink === 'About Us' ? 'active' : ''}`} onClick={() => { setActiveLink('About Us'); setMobileMenuOpen(false); }}>About Us</a>
          <a href="#" className={`mobile-link ${activeLink === 'Products' ? 'active' : ''}`} onClick={() => { setActiveLink('Products'); setMobileMenuOpen(false); }}>Products</a>
          <a href="#" className={`mobile-link ${activeLink === 'Contact Us' ? 'active' : ''}`} onClick={() => { setActiveLink('Contact Us'); setMobileMenuOpen(false); }}>Contact Us</a>
          <div className="mobile-actions mt-4">
            <button className="btn btn-outline-primary full-width mt-2">Get a Quote</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
