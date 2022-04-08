import react from "react";
import './VideosList.css';

const VideosList = () => {
    return ( 
        <div>
            <div><h2 className="videos-title">HoCo Videos</h2></div>
            <div className="videolist-contr">
                <div>
                    <iframe id="ytplayer" type="text/html" width="450" height="310"
                        src="https://www.youtube.com/embed/6EiGqX2lwi8"
                        frameborder="0">
                    </iframe>
                    <p>Unfinished Business - Story of the Undefeated Howard Lions</p>
                </div>
                <div>
                    <iframe id="ytplayer" type="text/html" width="450" height="310"
                        src="https://www.youtube.com/embed/NWeDPxKqm_4"
                        frameborder="0">
                    </iframe>
                    <p>Howard CC vs Beaver County (NJCAA Men's Basketball)</p>
                </div>
                <div>
                    <iframe id="ytplayer" type="text/html" width="450" height="310"
                        src="https://www.youtube.com/embed/GSobLrGiwbU"
                        frameborder="0">
                    </iframe>
                    <p>Road to States: A Basketball Documentary (Part I)</p>
                </div>
                <div>
                    <iframe id="ytplayer" type="text/html" width="450" height="310"
                        src="https://www.youtube.com/embed/KF6_wJlyj8o"
                        frameborder="0">
                    </iframe>
                    <p>Road to States: A Basketball Documentary (Part II)</p>
                </div>

            </div>
        </div>
     );
}
 
export default VideosList;