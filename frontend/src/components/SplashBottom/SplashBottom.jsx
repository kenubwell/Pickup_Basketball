import React from 'react';
import "./SplashBottom.css";
import { useNavigate} from "react-router-dom";
import { BsChevronUp } from "react-icons/bs";
import {Link} from 'react-scroll';

const SplashBottom = () => {

    const navigate = useNavigate();

    return ( 
        <div>
            <div className='about-us-title' id='aboutsite'>ABOUT THE PICKUP SITE</div>
            <div className='splash-bottom-contain'>
                <div className='hoco-finest-video'>
                    <div className='video-padding'>
                        <iframe id="ytplayer" type="text/html" width="450" height="310"
                            src="https://www.youtube.com/embed/vUwy2gHzcw4"
                            frameborder="0">
                        </iframe>
                    </div>
                    <p className='finest-text'>👮 HoCo's Finest (police) streetballing the community! 🚨</p>
                </div>
                <div className='splash-bottom-text-contain'>
                    <div className='smaller-title-about'>HoCo Pickup | Schedule Pickup Basketball Games in County</div>
                    <div className='about-description'>HoCo Pickup is a site to allow basketball enthusiasts within Howard County (HoCo) Maryland to schedule pickup basketball
                        games at open courts and the Athletic Complex within the county.
                    </div>
                    <div className='about-description'>HoCo Pickup was established in 2022 as part of a devCodeCamp capstone project and has progressed into a proof-of-concept
                        site for bringing HoCo basketball enthusiasts together who still want to hoop. 
                    </div>
                    <div className='features-header'>
                        Features
                    </div>
                    <div className='features-list'>
                        <medium className = 'features-font'>- Schedule Courts</medium>
                        <medium className = 'features-font'>- Reserve Athletic Complex gym</medium>
                        <medium className = 'features-font'>- Share comments about the courts</medium>
                        <medium className = 'features-font'>- Watch Local basketball videos</medium>
                        <medium className = 'features-font'>- View Local Games Listings</medium>
                    </div>
                </div>
            </div>
            <div className='register-button-contian'> 
                <button className = 'register-button' onClick={() => navigate("/register")}>Register</button>
            </div>
            <div className='up-arrow-contain'>
            <div className='up-arrow'><Link to = "pickupsplash" spy={true} smooth={true} offset={50} duration={500}><BsChevronUp color='black' size='4.5rem'/></Link></div>
            </div>
        </div>
     );
}
 
export default SplashBottom;