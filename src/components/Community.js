import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Community.css';

const Community = () => {
  return (
    <div className='community-container'>
        <div className='community-section1'>
            <div className = 'community-menu'>
                <div className = 'community-menu-title'>COMMUNITY</div>
                <div className='community-menu-list'>
                <Link to='/'>guest book</Link>
                <Link to='/'>notice</Link>
                <Link to='/'>menu3</Link>            
                </div>
                </div>
        <img src="../../images/cat6.jpeg" alt="Left" className="community-section1-image1" />
        <div className='community-section1-content'>content</div>
        </div>
    </div>
  );
};

export default Community;
