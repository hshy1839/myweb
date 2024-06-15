import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // State 업데이트 시 애니메이션 효과 주기
  useEffect(() => {
    const menuElement = document.querySelector('.menu');

    if (menuOpen) {
      // 메뉴 열기
      menuElement.style.height = '500px'; // 원하는 높이 설정
      menuElement.style.opacity = '1'; // 투명도 설정
    } else {
      // 메뉴 닫기
      menuElement.style.height = '0'; // 높이 초기화
      menuElement.style.opacity = '0'; // 투명도 초기화
    }
  }, [menuOpen]);

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
        <button className='header-button'>About</button>
        <button className='header-button'>Contact</button>
        <button className='header-button'>News</button>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <div className='menu-item-container'>
            <span className='menu-item-title'>About</span>
            <Link to="" className="menu-item">개발자 이야기</Link>
            <Link to="" className="menu-item">도전의 역사</Link>
            <Link to="" className="menu-item">Contact Us</Link>
          </div>
          <div className='menu-item-container'>
            <span className='menu-item-title'>Contact</span>
            <Link to="https://github.com/hshy1839" target="_blank" className="menu-item">Github</Link>
            <Link to="https://www.instagram.com/seokhyung98/" target="_blank" className="menu-item">Instagram</Link>
            <Link to="mailto:hongjeongmin1839@google.com" target="_blank" className="menu-item">Mail</Link>
          </div>
          <div className='menu-item-container'>
            <span className='menu-item-title'>News</span>
            <Link to="" className="menu-item">공지사항</Link>
            <Link to="" className="menu-item">알림</Link>
            <Link to="" className="menu-item">게시판</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
