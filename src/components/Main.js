import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Main.css';
import '../App.css';

const Main = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval);
    }, []);


    return (
        <div className='main-container'>
            <div className='section1'>
                <div className="main-section1-images">
                    <img src="../../images/cat7.jpeg" alt="Left" className="left-image" />
                    <img src="../../images/cat4.jpeg" alt="Right" className="right-image" />
                </div>
                <h1 className="headline">
                    <i>FULLSTACK</i><br />
                    DEVELOPER<br />
                    <i>JEONGMIN</i>
                </h1>
                <button className="work-button">
                    Contact me
                </button>
                <div className='skills-container'>
                    <div className='skills-display'>
                    {skills.map((skill, index) => (
                        <div key={index} className="skills">
                            {skill.context}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className='section2'>
                <div className='section2-headline'>
                GET PAID TO <i>CREATE</i>
                </div>
                <div className='section2-article'>
                IT ALL BEGINS WITH AN IDEA. MAYBE YOU WANT TO LAUNCH A BUSINESS. MAYBE YOU WANT TO TURN A <br/>
                HOBBY INTO SOMETHING MORE. OR MAYBE YOU HAVE A CREATIVE PROJECT TO SHARE WITH THE WORLD. <br/>
                WHATEVER IT IS, THE WAY YOU TELL YOUR STORY ONLINE CAN MAKE ALL THE DIFFERENCE.<br/>
                <br/>
                DON’T WORRY ABOUT SOUNDING PROFESSIONAL. SOUND LIKE YOU. THERE ARE OVER 1.5 BILLION <br/>
                WEBSITES OUT THERE, BUT YOUR STORY IS WHAT’S GOING TO SEPARATE THIS ONE FROM THE REST. IF YOU <br/>
                READ THE WORDS BACK AND DON’T HEAR YOUR OWN VOICE IN YOUR HEAD, THAT’S A GOOD SIGN YOU <br/>
                STILL HAVE MORE WORK TO DO.<br/>
                </div>
                <img src="../../images/cat2.jpeg" alt="Left" className="section2-image1" />
            </div>
            <div className='section3'>
                <div className='blank'></div>
                <div className='section3-headline'>
                MEET TO <br/>
                <i>JEONGMIN</i>
                </div>
                <img src="../../images/cat5.jpeg" alt="Left" className="section3-image1" />
            <div className='section3-article'>
            DREW ROSE TO NOTORIETY PRODUCING CONTENT FOR YOUTUBE AND TIKTOK SUCH AS MUSIC <br/>
            REACTION/REVIEW VIDEOS, OUTFIT HAULS, AND ALL THINGS RELATED TO STREETWEAR CULTURE. AS HIS <br/>
            COMMUNITY GREW, A MONETIZATION PLAY BECAME A CLEAR EVENTUALITY, GIVEN HOW A STRONG SENSE <br/>
            OF BELONGING / IDENTITY IS CULTIVATED WITH HIS FOLLOWERS.<br/>
            </div>
            <button className="section3-button">
            Contact me
                </button>
            </div>
            <div className='section4'>
                <div className='blank'></div>
                <div className='section4-headline'>
                TO BECOME A PROFESSIONAL<br/> 
                <i>DEVELOPER</i>
                </div>
                <div className='section4-media-title'>
                01. LULULALAZON
                </div>
                <div className='section4-media-container'>
                <img src="../../images/cat9.jpeg" alt="Left" className="section4-image1" />
                <div className='section4-media-context'>
                PROJECT<br/>: The Lululala Zone Fitness Center Website Project<br /><br />
                USED SKILLS<br/>: PYCHARM, PYTHON, EJS, CSS, JAVASCRIPT, SQLLITE, EC2, GITHUB <br />
                IT ALL BEGINS WITH AN IDEA. MAYBE YOU WANT TO LAUNCH A BUSINESS. MAYBE YOU WANT TO TURN A <br/>
                HOBBY INTO SOMETHING MORE. OR MAYBE YOU HAVE A CREATIVE PROJECT TO SHARE WITH THE WORLD. <br/>
                WHATEVER IT IS, THE WAY YOU TELL YOUR STORY ONLINE CAN MAKE ALL THE DIFFERENCE.  <br/>
                </div>
            </div>
            <div className='section4-media-title'>
            02. BUDDY
                </div>
                <div className='section4-media-container'>
                <img src="../../images/cat8.jpeg" alt="Left" className="section4-image1" />
                <div className='section4-media-context'>
                PROJECT<br/>: Buddy Mobile App, Website, and Wearable App Project<br /><br />
                USED SKILLS<br/>: REACT-NATIVE, REACT, kotlin, CSS, express, mysql, android studio, GITHUB, jira <br />
                IT ALL BEGINS WITH AN IDEA. MAYBE YOU WANT TO LAUNCH A BUSINESS. MAYBE YOU WANT TO TURN A <br/>
                HOBBY INTO SOMETHING MORE. OR MAYBE YOU HAVE A CREATIVE PROJECT TO SHARE WITH THE WORLD. <br/>
                WHATEVER IT IS, THE WAY YOU TELL YOUR STORY ONLINE CAN MAKE ALL THE DIFFERENCE.  <br/>
                </div>
            </div>
            <button className="section4-button">
                    GET STARTED →
                </button>
            </div>
        </div>
    );
};

export default Main;
