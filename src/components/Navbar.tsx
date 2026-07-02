import { useState } from 'react';
import { Layers, Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

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
          <div 
            className="dropdown-container"
            onMouseEnter={() => setDesktopDropdownOpen(true)}
            onMouseLeave={() => setDesktopDropdownOpen(false)}
          >
            <a href="#" className={`nav-link ${activeLink === 'Products' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveLink('Products'); }}>
              Products <ChevronDown size={16} />
            </a>
            {desktopDropdownOpen && (
              <div className="dropdown-menu animate-fade-in">
                <a href="#" className="dropdown-item">GPS-Based Stop Announcement System</a>
                <a href="#" className="dropdown-item">Neikuri Reader</a>
                <a href="#" className="dropdown-item">Temple Time Announcement Advanced version</a>
                <a href="#" className="dropdown-item">Smart Employee Tool</a>
                <a href="#" className="dropdown-item">Automatic Water Level Monitor</a>
                <a href="#" className="dropdown-item">GSM Switch for Pump</a>
                <a href="#" className="dropdown-item">Automatic Murukku Machine</a>
                <a href="#" className="dropdown-item">GPS Synchronized Time Display</a>
                <a href="#" className="dropdown-item">LED Display Boards</a>
                <a href="#" className="dropdown-item">Automatic Sanitizer</a>
              </div>
            )}
          </div>
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
          <div className="mobile-dropdown-container">
            <button 
              className={`mobile-link w-full flex-between ${activeLink === 'Products' ? 'active' : ''}`} 
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Products <ChevronDown size={20} className={mobileDropdownOpen ? 'rotate-180' : ''} style={{ transition: 'transform 0.3s' }} />
            </button>
            {mobileDropdownOpen && (
              <div className="mobile-dropdown-menu animate-fade-in">
                <a href="#" className="mobile-dropdown-item" onClick={() => { setActiveLink('Products'); setMobileMenuOpen(false); }}>GPS-Based Stop Announcement System</a>
                <a href="#" className="mobile-dropdown-item" onClick={() => { setActiveLink('Products'); setMobileMenuOpen(false); }}>Neikuri Reader</a>
                <a href="#" className="mobile-dropdown-item" onClick={() => { setActiveLink('Products'); setMobileMenuOpen(false); }}>Temple Time Announcement Advanced version</a>
                <a href="#" className="mobile-dropdown-item" onClick={() => { setActiveLink('Products'); setMobileMenuOpen(false); }}>Smart Employee Tool</a>
                <a href="#" className="mobile-dropdown-item" onClick={() => { setActiveLink('Products'); setMobileMenuOpen(false); }}>Automatic Water Level Monitor</a>
                <a href="#" className="mobile-dropdown-item" onClick={() => { setActiveLink('Products'); setMobileMenuOpen(false); }}>GSM Switch for Pump</a>
                <a href="#" className="mobile-dropdown-item" onClick={() => { setActiveLink('Products'); setMobileMenuOpen(false); }}>Automatic Murukku Machine</a>
                <a href="#" className="mobile-dropdown-item" onClick={() => { setActiveLink('Products'); setMobileMenuOpen(false); }}>GPS Synchronized Time Display</a>
                <a href="#" className="mobile-dropdown-item" onClick={() => { setActiveLink('Products'); setMobileMenuOpen(false); }}>LED Display Boards</a>
                <a href="#" className="mobile-dropdown-item" onClick={() => { setActiveLink('Products'); setMobileMenuOpen(false); }}>Automatic Sanitizer</a>
              </div>
            )}
          </div>
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
