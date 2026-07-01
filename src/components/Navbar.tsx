import { useState } from 'react';
import { Layers, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <a href="#" className="nav-link">Playground</a>
          <a href="#" className="nav-link">Docs</a>
          <a href="#" className="nav-link">Pricing</a>
          <a href="#" className="nav-link">Resources</a>
          <a href="#" className="nav-link">Careers</a>
        </div>

        {/* Right Actions */}
        <div className="nav-actions desktop-nav">
          <a href="#" className="nav-link">Log in</a>
          <button className="btn btn-primary ml-4">Book a demo</button>
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
          <a href="#" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Playground</a>
          <a href="#" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Docs</a>
          <a href="#" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="#" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Resources</a>
          <a href="#" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Careers</a>
          <div className="mobile-actions mt-4">
            <a href="#" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Log in</a>
            <button className="btn btn-primary full-width mt-2">Book a demo</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
