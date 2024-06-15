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
            if (window.scrollY >= 1200) {
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

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const scrollToSection2 = () => {
        window.scrollTo({ top: 1000, behavior: 'smooth' });
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
                            into reality<span className='headline-korean'>독보적인 창작의 결과물을 만들고<br />
                                확장하고 재창조함으로써 팬들이 경험하는<br />
                                엔터테인먼트의 순간들을 무한히 연결하는<br />
                                세계를 만들 것입니다. 우리가 완성할<br />
                                그곳에서, 모두와 만나겠습니다.</span></div>
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
                {/* <div className='skills-container'>
                    <div className='skills-display'>
                        {skills.map((skill, index) => (
                            <div key={index} className="skills">
                                {skill.context}
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
            <div className='section2'>
                <div className='section2-headline'>
                    GET PAID TO <i>CREATE</i>
                </div>
                <div className='section2-context-container'>
                <img src="../../images/codingimage.jpeg" alt="Left" className="section2-image1" />
                    <div className='section2-article'>
                        IT ALL BEGINS WITH AN IDEA. MAYBE YOU WANT TO LAUNCH A BUSINESS. MAYBE YOU WANT TO TURN A <br />
                        HOBBY INTO SOMETHING MORE. OR MAYBE YOU HAVE A CREATIVE PROJECT TO SHARE WITH THE WORLD. <br />
                        WHATEVER IT IS, THE WAY YOU TELL YOUR STORY ONLINE CAN MAKE ALL THE DIFFERENCE.<br />
                        <br />
                        DON’T WORRY ABOUT SOUNDING PROFESSIONAL. SOUND LIKE YOU. THERE ARE OVER 1.5 BILLION <br />
                        WEBSITES OUT THERE, BUT YOUR STORY IS WHAT’S GOING TO SEPARATE THIS ONE FROM THE REST. IF YOU <br />
                        READ THE WORDS BACK AND DON’T HEAR YOUR OWN VOICE IN YOUR HEAD, THAT’S A GOOD SIGN YOU <br />
                        STILL HAVE MORE WORK TO DO.<br />
                    </div>
                    
                </div>
            </div>
            <div className='section3'>
                <div className='blank'></div>
                <div className='section3-headline'>
                    MEET TO <br />
                    <i>JEONGMIN</i>
                </div>
                <img src="../../images/cat5.jpeg" alt="Left" className="section3-image1" />
                <div className='section3-article'>
                    DREW ROSE TO NOTORIETY PRODUCING CONTENT FOR YOUTUBE AND TIKTOK SUCH AS MUSIC <br />
                    REACTION/REVIEW VIDEOS, OUTFIT HAULS, AND ALL THINGS RELATED TO STREETWEAR CULTURE. AS HIS <br />
                    COMMUNITY GREW, A MONETIZATION PLAY BECAME A CLEAR EVENTUALITY, GIVEN HOW A STRONG SENSE <br />
                    OF BELONGING / IDENTITY IS CULTIVATED WITH HIS FOLLOWERS.<br />
                </div>
                <button className="section3-button">
                    Contact me
                </button>
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
                <div className='section4-media-container  '>
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
                <button className="section4-button">
                    GET STARTED →
                </button>
            </div>
        </div>
        </div>
    );
};

export default Main;
