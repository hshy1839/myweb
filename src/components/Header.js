import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import '../css/Header.css';
import { FaInstagram, FaEnvelope, FaPhone   } from 'react-icons/fa';

const Header = () => {
  
  return (
    <header className="header-container">
      <div>
        <Link to="/">
          <div className='header-logo'>
          JM
          </div>
        </Link>
      </div>
      <nav className="nav-container">
        <ul>
        <li className='Header-nav'>
                        <a href="https://www.instagram.com/seokhyung98/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram style={{ color: '#E1306C', fontSize: '32px' }} />
                        </a></li>
                        <li className='Header-nav'>
                        <a href="mailto:hongjeongmin1839@gmail.com">
                            <FaEnvelope style={{ color: 'tomato', fontSize: '32px' }} />
                        </a>
                    </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
