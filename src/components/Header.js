import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Header.css';
import { FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa';

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
      <div className="btn-container">
        <button className='instagram-btn'> <a href="https://www.instagram.com/seokhyung98/" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={{ color: '#DD2A7B', fontSize: '20px', marginRight: '10px' }} />
        </a>Instagram</button>
        <button className='mail-btn'><a href="mailto:hongjeongmin1839@gmail.com">
          <FaEnvelope style={{ color: 'skyblue', fontSize: '20px ', marginRight: '10px' }} />
        </a>Mail</button>
        <button className='mail-btn'><a href="https://github.com/hshy1839/hshy1839">
          <FaGithub style={{ color: 'white', fontSize: '20px ', marginRight: '10px' }} />
        </a>Github</button>
      </div>
      <label className="hamburger">
        <input type="checkbox" />
        <svg viewBox="0 0 32 32">
          <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg><div className="menu">
          <Link to="/">Home</Link>
          <Link to="">
            <div className='menu-contact-container'>Contact
              <div className='menu-contact'>
                <button className='menu-instagram-btn'> <a href="https://www.instagram.com/seokhyung98/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram style={{ color: '#DD2A7B', fontSize: '20px', marginRight: '10px' }} />
                </a>Instagram</button>
                <button className='menu-mail-btn'><a href="mailto:hongjeongmin1839@gmail.com">
                  <FaEnvelope style={{ color: 'skyblue', fontSize: '20px ', marginRight: '10px' }} />
                </a>Mail</button>
                <button className='menu-mail-btn'><a href="https://github.com/hshy1839/hshy1839">
                  <FaGithub style={{ color: 'white', fontSize: '20px ', marginRight: '10px' }} />
                </a>Github</button>
              </div>
            </div>
          </Link>
          <Link to="/QnA">Q&A</Link>
        </div>
      </label>

    </header >
  );
};

export default Header;
