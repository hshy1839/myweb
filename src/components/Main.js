import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Main.css';
import '../App.css';

const Main = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentBuddyImage, setCurrentBuddyImage] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    const skills = [
        { context: ' #JAVASCRIPT ' },
        { context: ' #JAVA ' },
        { context: ' #REACT ' },
        { context: ' #REACT-NATIVE ' },
        { context: ' #KOTLIN ' },
        { context: ' #DART ' },
        { context: ' #FLUTTER ' },
        { context: ' #ANDROID STUDIO ' },
        { context: ' #EXPRESS ' },
        { context: ' #NODEJS ' },
    ];

    const buddyImages = [
        '../../images/buddy/main.jpg',
        '../../images/buddy/profile.jpg',
        '../../images/buddy/ces-d_main.jpg',
        '../../images/buddy/ces-d.jpg',
        '../../images/buddy/ces-d_result.jpg',
        '../../images/buddy/sentiment_calendar.jpg',
        '../../images/buddy/sentiment_form.jpg',
        '../../images/buddy/analysis_sentiment.jpg',
        '../../images/buddy/lifecycle.jpg',
        '../../images/buddy/post.jpg',
        '../../images/buddy/post_detail.jpg',
        '../../images/buddy/signup.jpg',
        '../../images/buddy/mypage_edit.jpg',
    ];

    useEffect(() => {
        const handleScroll = () => {
            const screenWidth = window.innerWidth;
            let scrollYMin, scrollYMax;
    
            if (screenWidth <= 768) {
                // 모바일 화면
                scrollYMin = 1200;
                scrollYMax = 3400;
            } else {
                // 데스크탑 화면
                scrollYMin = 1200;
                scrollYMax = 5500;
            }
    
            if (window.scrollY >= scrollYMin && window.scrollY <= scrollYMax) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // alert('제작 중,,, ');
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBuddyImage((prevIndex) => (prevIndex + 1) % buddyImages.length);
        }, 1500); // Change image every 1 second

        return () => clearInterval(interval);
    }, [buddyImages.length]);

    const handleNextImage = () => {
        setCurrentBuddyImage((prevIndex) => (prevIndex + 1) % buddyImages.length);
    };

    const handlePrevImage = () => {
        setCurrentBuddyImage((prevIndex) => (prevIndex - 1 + buddyImages.length) % buddyImages.length);
    };

    const scrollToTop = (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        e.preventDefault();
    };
    const scrollToSection2 = (e) => {
        window.scrollTo({ top: 1500, behavior: 'smooth' });
        e.preventDefault();
    };

    return (
        <div className={`main-container ${isScrolled ? 'scrolled' : ''}`}>
            <div className='main-container-container'>
                <button className="top-button" onClick={scrollToTop}>↑<br />
                    Top
                </button>
                <div className='section1'>
                    <div className='headline-container'>
                        <h1 className="headline">
                            <i>Turning imagination</i><br />
                            <div className='headline-text'>
                                into reality<span className='headline-korean'>
                                창의적인 아이디어를 코드로 구현하여 <br/>무한한 가능성을 열어갑니다.<br />
                                혁신적인 솔루션으로 꿈을 실현하며, <br/>새로운 세상을 창조합니다.<br />
                                상상이 현실이 되는 순간을 함께 경험해보세요.</span></div>
                            <i>full-stack DEVELOPER</i><br />
                        </h1>
                        <div className="iphone-card">
                            <div className="iphone-btn1"></div>
                            <div className="iphone-btn2"></div>
                            <div className="iphone-btn3"></div>
                            <div className="iphone-btn4"></div>
                            <div className="iphone-card-int">
                                <div className="iphone-hello">
                                    <div className="iphone-text-animation">"상상을 현실로,"</div>
                                    <span className="iphone-hidden">FULL-STACK DEV<br />홍정민</span>
                                </div>
                            </div>
                            <div className="iphone-top">
                                <div className="iphone-camera">
                                    <div className="iphone-int"></div>
                                </div>
                                <div className="iphone-speaker"></div>
                            </div>
                        </div>
                        <div class="main__action" onClick={scrollToSection2}>
                            <a class="main__scroll" href="#">
                                <div class="main__scroll-box">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z" fill="rgba(28,28,30,1)">
                                        </path>
                                    </svg>
                                </div>

                                <span class="main__scroll-text">Scroll</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='section2'>
                    <div className='section2-headline'>introduce</div>
                    <div className='section2-context-container'>
                        <img src="../../images/codingimage.jpeg" alt="Left" className="section2-image1" />
                        <div className='section2-article'>
                            <div className='section2-article-title'>
                                의욕 넘치고 열정을 통해<br />
                                끈임없이 성장하는 개발자</div>
                            <div className='section2-article-context'>
                                저는 창의적이고 열정적이며, 항상 기술적 도전에 즐거움을 느끼며<br />
                                끊임없이 자신의 역량을 발전시키는 개발자입니다.<br />
                                문제 해결 과정에서 창의적이고 혁신적인 접근을 취하며,<br />
                                언제나 새로운 기술에 대한 호기심과 열정이 불타오릅니다.</div>
                        </div>

                    </div>
                    <div className='section2-context-container2'>
                        <div className='section2-article2'>
                            <div className='section2-article-title2'>
                                책임감과 신뢰성이<br />
                                우선인 개발자</div>
                            <div className='section2-article-context2'>
                                프로젝트를 시일 내에 성공적으로 이끌기 위해 항상 최선을 다하고,<br />
                                최상의 퀄리티를 내기 위해 노력합니다.<br />
                                코드 작성에서는 안정성과 품질을 우선으로 하며,<br />
                                사용자가 신뢰할 수 있는 소프트웨어를 제공하기 위해 지속적으로 노력합니다.</div>
                        </div>
                        <img src="../../images/cat4.jpeg" alt="Left" className="section2-image2" />
                    </div>
                </div>
                <div className='section3'>
                    <div className='blank'></div>
                    <div className='section3-headline'>
                        <i>SKILLS</i>
                    </div>
                    <div className='section3-skills-container'>
                        <div className='section3-skills'>
                            <img src="../../images/skills/html.png" className="section3-skills-image" />
                            <span className='section3-skills-text'>html</span>
                        </div>
                        <div className='section3-skills'>
                            <img src="../../images/skills/css.png" className="section3-skills-image" />
                            <span className='section3-skills-text'>css</span>
                        </div>
                        <div className='section3-skills'>
                            <img src="../../images/skills/js.png" className="section3-skills-image" />
                            <span className='section3-skills-text'>js</span>
                        </div>
                        <div className='section3-skills'>
                            <img src="../../images/skills/nodejs.png" className="section3-skills-image" />
                            <span className='section3-skills-text'>NodeJs</span>
                        </div>
                        </div>
                        <div className='section3-skills-container2'>
                        <div className='section3-skills'>
                            <img src="../../images/skills/express.png" className="section3-skills-image" />
                            <span className='section3-skills-text'>express</span>
                        </div>
                        <div className='section3-skills'>
                            <img src="../../images/skills/react.png" className="section3-skills-image" />
                            <span className='section3-skills-text'>react</span>
                        </div>
                        <div className='section3-skills'>
                            <img src="../../images/skills/react-native.png" className="section3-skills-image" />
                            <span className='section3-skills-text'>react-native</span>
                        </div>
                        <div className='section3-skills'>
                            <img src="../../images/skills/java.png" className="section3-skills-image" />
                            <span className='section3-skills-text'>java</span>
                        </div>
                    </div>
                    <div className='section3-skills-container2'>
                        <div className='section3-skills'>
                            <img src="../../images/skills/kotlin.png" className="section3-skills-image" />
                            <span className='section3-skills-text'>kotlin</span>
                        </div>
                        <div className='section3-skills'>
                            <img src="../../images/skills/androidstudio.png" className="section3-skills-image" />
                            <span className='section3-skills-text'>android studio</span>
                        </div>
                        <div className='section3-skills'>
                            <img src="../../images/skills/aws.png" className="section3-skills-image" />
                            <span className='section3-skills-text'>ec2, rds,<br/>route53</span>
                        </div>
                        <div className='section3-skills'>
                            <img src="../../images/skills/mysql.png" className="section3-skills-image" />
                            <span className='section3-skills-text'>mysql</span>
                        </div>
                    </div>
                    <div className='section3-skills-container2'>
                        <div className='section3-skills'>
                            <img src="../../images/skills/python.png" className="section3-skills-image" />
                            <span className='section3-skills-text'>python</span>
                        </div>
                        <div className='section3-skills'>
                            <img src="../../images/skills/django.png" className="section3-skills-image" />
                            <span className='section3-skills-text'>django</span>
                        </div>
                        <div className='section3-skills'>
                            <img src="../../images/skills/flutter.png" className="section3-skills-image" />
                            <span className='section3-skills-text'>flutter</span>
                        </div>
                        <div className='section3-skills'>
                            <img src="../../images/skills/github.png" className="section3-skills-image" />
                            <span className='section3-skills-text'>github</span>
                        </div>
                        <div className='section3-skills'>
                            <img src="../../images/skills/jira.png" className="section3-skills-image" />
                            <span className='section3-skills-text'>jira</span>
                        </div>
                    </div>
                </div>
                <div className='section4'>
                    <div className='blank'></div>
                    <div className='section4-headline'>
                        TO BECOME A PROFESSIONAL<br />
                        <i>DEVELOPER</i>
                    </div>
                    <div className='section4-media-title'>
                        01. LULULALAZON
                    </div>
                    <div className='section4-media-container'>
                        <img src="../../images/lululalazon.gif" alt="Left" className="section4-image1" />
                        <div className='section4-media-context'>
                            PROJECT<br />: The Lululala Zone Fitness Center Website Project<br /><br />
                            USED SKILLS<br />: PYCHARM, PYTHON, EJS, CSS, JAVASCRIPT, SQLLITE, EC2, GITHUB <br />
                            IT ALL BEGINS WITH AN IDEA. MAYBE YOU WANT TO LAUNCH A BUSINESS. MAYBE YOU WANT TO TURN A <br />
                            HOBBY INTO SOMETHING MORE. OR MAYBE YOU HAVE A CREATIVE PROJECT TO SHARE WITH THE WORLD. <br />
                            WHATEVER IT IS, THE WAY YOU TELL YOUR STORY ONLINE CAN MAKE ALL THE DIFFERENCE.  <br />
                        </div>
                    </div>
                    <div className='section4-media-title'>
                        02. BUDDY
                    </div>
                    <div className='section4-media-container'>
                        <div className="arrow-buttons">
                            <button onClick={handlePrevImage} className="prev-arrow"> &lt; </button>
                            <img src={buddyImages[currentBuddyImage]} alt="Buddy" className="section4-image2" />
                            <button onClick={handleNextImage} className="next-arrow"> &gt; </button>
                        </div>
                        <div className='section4-media-context'>
                            PROJECT<br />: Buddy Mobile App, Website, and Wearable App Project<br /><br />
                            USED SKILLS<br />: REACT-NATIVE, REACT, kotlin, CSS, express, mysql, android studio, GITHUB, jira <br />
                            IT ALL BEGINS WITH AN IDEA. MAYBE YOU WANT TO LAUNCH A BUSINESS. MAYBE YOU WANT TO TURN A <br />
                            HOBBY INTO SOMETHING MORE. OR MAYBE YOU HAVE A CREATIVE PROJECT TO SHARE WITH THE WORLD. <br />
                            WHATEVER IT IS, THE WAY YOU TELL YOUR STORY ONLINE CAN MAKE ALL THE DIFFERENCE.  <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
