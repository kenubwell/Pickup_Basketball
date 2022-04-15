import react from "react";
import './VideosList.css';

const VideosList = () => {
    return ( 
        <div className="entire-contain">
            <div className="vid-title-contain-trans"><h3 className="videos-title">HoCo Videos</h3></div>
            <div className="videolist-contr">
                <div className="pervideo-container">
                    <iframe className="iframe-border" id="ytplayer" type="text/html" width="410" height="270"
                        src="https://www.youtube.com/embed/6EiGqX2lwi8"
                        frameborder="0">
                    </iframe>
                    <div className="hoco-lions-contain">
                        <p className="hoco-lions-text">⛹️‍♀️ Story of the Undefeated Howard Lions: '19-'20 🦁</p>
                    </div>
                </div>
                <div className="pervideo-container">
                    <iframe className="iframe-border" id="ytplayer" type="text/html" width="410" height="270"
                        src="https://www.youtube.com/embed/NWeDPxKqm_4"
                        frameborder="0">
                    </iframe>
                    <div className="hoco-cc-drag-contain">
                        <p className="hoco-cc-drag-text">🏀 Howard CC vs Beaver County (NJCAA '19-'20) 🐉</p>
                    </div>
                </div>
                <div className="pervideo-container">
                    <iframe className="iframe-border" id="ytplayer" type="text/html" width="410" height="270"
                        src="https://www.youtube.com/embed/GSobLrGiwbU"
                        frameborder="0">
                    </iframe>
                    <div className="hoco-eagles-contain">
                         <p className="hoco-eagles-text">⛹️‍♂️ Road to States: Centennial Eagles (Part I) 🦅</p>
                    </div>
                </div>
                <div className="pervideo-container">
                    <iframe className="iframe-border" id="ytplayer" type="text/html" width="410" height="270"
                        src="https://www.youtube.com/embed/KF6_wJlyj8o"
                        frameborder="0">
                    </iframe>
                    <div className="hoco-eagles-contain">
                        <p className="hoco-eagles-text">⛹️‍♂️ Road to States: Centennial Eagles (Part II) 🦅</p>
                    </div>
                </div>
                <div className="pervideo-container">
                    <iframe className="iframe-border" id="ytplayer" type="text/html" width="410" height="270"
                        src="https://www.youtube.com/embed/O6nTWMpTTnQ"
                        frameborder="0">
                    </iframe>
                    <div className="hoco-eagles-contain">
                        <p className="hoco-eagles-text">🏀 Best PG in Howard County: 2022 🐻</p>
                    </div>
                </div>
                <div className="pervideo-container">
                    <iframe className="iframe-border" id="ytplayer" type="text/html" width="410" height="270"
                        src="https://www.youtube.com/embed/1RvuQT-r8ms"
                        frameborder="0">
                    </iframe>
                    <div className="hoco-eagles-contain">
                        <p className="hoco-eagles-text">⛹️‍♂️ Glenelg HS vs. Middletown: Insane Dunk! 🏀</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default VideosList;