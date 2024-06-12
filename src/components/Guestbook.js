import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Community.css';

const Guestbook = () => {
  const [message, setMessage] = useState('');
  const [guestbookEntries, setGuestbookEntries] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    // 방명록 추가 로직을 여기에 추가할 수 있습니다.
    // 예를 들어, 서버로 방명록을 전송하고 성공적으로 전송되면 guestbookEntries를 업데이트합니다.
    setGuestbookEntries([...guestbookEntries, message]);
    setMessage('');
  };

  return (
    <div className='community-container'>
      <div className='community-section1'>
        <div className='community-menu'>
          <div className='community-menu-title'>COMMUNITY</div>
          <div className='community-menu-list'>
            <Link to='/Guestbook'>guest book</Link>
            <Link to='/Notice'>notice</Link>
            <Link to='/'>menu3</Link>            
          </div>
        </div>
        <img src="../../images/cat6.jpeg" alt="Left" className="community-section1-image1" />
        <div className='community-section1-content'>Guestbook</div>
        {/* 방명록 입력 폼 */}
        <div className='guestbook-form'>
          <textarea
            placeholder='Write your message here...'
            value={message}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        {/* 방명록 목록 */}
        <div className='guestbook-entries'>
          <h2>Guestbook Entries:</h2>
          {guestbookEntries.map((entry, index) => (
            <div key={index}>{entry}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guestbook;
