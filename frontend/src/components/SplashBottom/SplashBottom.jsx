import React from 'react';
import "./SplashBottom.css";

const SplashBottom = () => {
    return ( 
        <div>
            <div className='about-us-title'>ABOUT THE PICKUP SITE</div>
            <div className='splash-bottom-contain'>
                <div className='hoco-finest-video'>
                    <iframe id="ytplayer" type="text/html" width="450" height="310"
                        src="https://www.youtube.com/embed/vUwy2gHzcw4"
                        frameborder="0">
                    </iframe>
                    <p>HoCo's Finest (police) streetballing the community!</p>
                </div>
                <div className='splash-bottom-text-contain'>
                    <p className='smaller-title-about'>HoCo Pickup | Schedule Pickup Basketball Games in County</p>
                </div>
            </div>
        </div>
     );
}
 
export default SplashBottom;