import react from "react";
import './VideosList.css';

const VideosList = () => {
    return ( 
        <div>
            <div className="vid-title-contain-trans"><h3 className="videos-title">HoCo Videos</h3></div>
            <div className="videolist-contr">
                <div>
                    <iframe id="ytplayer" type="text/html" width="450" height="310"
                        src="https://www.youtube.com/embed/6EiGqX2lwi8"
                        frameborder="0">
                    </iframe>
                    <div className="hoco-lions-contain">
                        <p className="hoco-lions-text">⛹️‍♀️ Story of the Undefeated Howard Lions: '19-'20 🦁</p>
                    </div>
                </div>
                <div>
                    <iframe id="ytplayer" type="text/html" width="450" height="310"
                        src="https://www.youtube.com/embed/NWeDPxKqm_4"
                        frameborder="0">
                    </iframe>
                    <div className="hoco-cc-drag-contain">
                        <p className="hoco-cc-drag-text">🏀 Howard CC vs Beaver County (NJCAA '19-'20) 🐉</p>
                    </div>
                </div>
                <div>
                    <iframe id="ytplayer" type="text/html" width="450" height="310"
                        src="https://www.youtube.com/embed/GSobLrGiwbU"
                        frameborder="0">
                    </iframe>
                    <div className="hoco-eagles-contain">
                         <p className="hoco-eagles-text">⛹️‍♂️ Road to States: Centennial Eagles (Part I) 🦅</p>
                    </div>
                </div>
                <div>
                    <iframe id="ytplayer" type="text/html" width="450" height="310"
                        src="https://www.youtube.com/embed/KF6_wJlyj8o"
                        frameborder="0">
                    </iframe>
                    <div className="hoco-eagles-contain">
                        <p className="hoco-eagles-text">⛹️‍♂️ Road to States: Centennial Eagles (Part II) 🦅</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default VideosList;