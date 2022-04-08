import react from "react";
import './MeadowComp.css';
import { Link } from "react-router-dom";
import MeadowMap from "../GoogleMaps/MeadowMap";

const MeadowComp = () => {
    return ( 
        <div>
            <div>
                <p><h2 className="meadow-title">Meadowbrook Athletic Complex</h2></p>
            </div>
            <div className="meadow-contain">
                <div className="meadow-image-contain">
                    <img src ="/images/meadowbrook.jpg" className = "meadow-image" alt = "mb court"/>
                </div>
                <div className="meadow-map-contain">
                    <MeadowMap/>
                </div>
            </div>
        </div>
     );
}
 
export default MeadowComp;