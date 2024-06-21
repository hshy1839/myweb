import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Awards.css';

const Awards = () => {
    return (
        <div className='awards-container'> 
            <div className='awards-section1'>
                <div className='awards-section1-headline-container'>
                    <h1 className='awards-section1-headline'>Awards</h1>
                    <div className='awards-section1-headline-link'>
                        <Link to={'/'}>Home</Link>
                        <div className='awards-section1-headline-link-bar'>▶</div>
                        <Link to={'/'}>About</Link>
                        <div className='awards-section1-headline-link-bar'>▶</div>
                        <Link to={'/'}>Awards</Link>
                    </div>
                </div>
                <div className='awards-section1-context-container'>
                    <div className="awards-section1-image1" ></div>
                    <div className='awards-section1-context'>차별화된 크리에이티브를 가진 여러 고객들과 즐거움과 편의성이 함께하는 웹 서비스, 앱 서비스를
                        전 세계에 퍼블리싱합니다.<br />
                        저는 지속적인 도전과 새로운 기술로 서비스의 편의성을 혁신하고, 더 많은 사용자들에게 사랑받을 수 있도록 플랫폼과 서비스를 확장합니다.<br />
                        저는 열정과 의지를 지닌 동료들과 함께 성장하며, 글로벌 시장에서 인정받는 서비스를 목표에 두고 있습니다.</div>
                </div>
                <div className='awards-list-container'>
                <div className='awards-list-container-container'>
                        <div className='awards-year'>2023</div>
                        <div className='awards-list-bar'></div>
                        <div className='awards-context-container'>
                        <div className='awards-context-container-container'>
                            <div className='awards-month'>2023.08</div>
                            <div className='awards-context'>마음 AI 해커톤 대상</div>
                        </div>
                        <div className='awards-context-container-container'>
                            <div className='awards-month'>2023.11</div>
                            <div className='awards-context'>교내 sw 경진대회 대상</div>
                        </div>
                        <div className='awards-context-container-container'>
                            <div className='awards-month'>2023.11</div>
                            <div className='awards-context'>한국정보통신보안윤리학회 <br/> 공모전 장려상 </div>
                        </div>
                        <div className='awards-context-container-container'>
                            <div className='awards-month'>2023.12</div>
                            <div className='awards-context'>교내 ICT 경진대회(학술제) 최우수상</div>
                        </div>
                        </div>
                    </div>
                    <div className='awards-list-container-container'>
                        <div className='awards-year'>2024</div>
                        <div className='awards-list-bar'></div>
                        <div className='awards-context-container'>
                        <div className='awards-context-container-container'>
                            <div className='awards-month'>2023.08</div>
                            <div className='awards-context'>마음 AI 해커톤 대상</div>
                        </div>
                        <div className='awards-context-container-container'>
                            <div className='awards-month'>2023.11</div>
                            <div className='awards-context'>교내 sw 경진대회 대상</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
