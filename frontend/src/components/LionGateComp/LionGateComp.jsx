import react from "react";
import './LionGateComp.css';
import { Link } from "react-router-dom";
import LionGateMap from "../GoogleMaps/LionGateMap";

const LionGateComp = () => {
    return ( 
        <div>
        <div>
            <p><h2 className="lion-title">Lions Gate Basketball Court</h2></p>
        </div>
        <div className="liongate-contain">
            <div className="lion-image-contain">
                <img src ="/images/lionsgatecourt.jpg" className = "lion-image" alt = "lg court"/>
            </div>
            <div className="lion-map-contain">
                <LionGateMap/>
            </div>
        </div>
    </div>
     );
}
 
export default LionGateComp;