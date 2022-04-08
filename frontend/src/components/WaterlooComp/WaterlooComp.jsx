import react from "react";
import './WaterlooComp.css';
import { Link } from "react-router-dom";
import WaterlooMap from "../GoogleMaps/WaterlooMap";

const WaterlooComp = () => {
    return ( 
        <div>
            <div>
                <p><h2 className="water-title">Waterloo Park Basketball Court</h2></p>
            </div>
            <div className="waterloo-contain">
                <div className="court-image-contain">
                    <img src ="/images/waterloocourt.jpg" className = "water-image" alt = "wl court"/>
                </div>
                <div className="water-map-contain">
                    <WaterlooMap/>
                </div>
            </div>
        </div>
     );
}
 
export default WaterlooComp;