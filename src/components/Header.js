import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setMenuOpen(false);
  };

  const handleHeaderMouseEnter = () => {
    setMenuOpen(true);
  };

  const handleHeaderMouseLeave = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header-container" onMouseEnter={handleHeaderMouseEnter} onMouseLeave={handleMouseLeave}>
      <div>
        <Link to="/">
          <div className='header-logo'>
            JM
          </div>
        </Link>
      </div>
      <div className="btn-container">
        <button className='header-button'>about</button>
        <button className='header-button'>contact</button>
        <button className='header-button'>news</button>
        {menuOpen && (
          <div className="menu" onMouseEnter={handleMouseEnter} >
            <div className='menu-item-container'>
              <span className='menu-item-title'>About</span>
              <Link to="" className="menu-item">누구냐 넌</Link>
              <Link to="" className="menu-item">Our Team</Link>
              <Link to="" className="menu-item">Contact Us</Link>
            </div>
            <div className='menu-item-container'>
              <span className='menu-item-title'>Contact</span>
              <Link to="" className="menu-item">Support</Link>
              <Link to="" className="menu-item">Latest News</Link>
              <Link to="" className="menu-item">Events</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
