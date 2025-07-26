import { useState } from 'react';
import './Navigation.css';

const Navigation = ({ currentPage, onNavigate, currentUser, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-container">
            <img src="/logo.png" alt="Simpler Technologies Logo" className="logo-image" />
            <h2>Simpler Technology</h2>
          </div>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <button
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => { onNavigate('home'); setIsMenuOpen(false); }}
          >
            Home
          </button>
          <button
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => { onNavigate('about'); setIsMenuOpen(false); }}
          >
            About
          </button>
          <button
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }}
          >
            Contact
          </button>
          {currentUser && (
            <button
              className="nav-link logout-btn"
              onClick={() => { onLogout(); setIsMenuOpen(false); }}
            >
              Logout
            </button>
          )}
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;