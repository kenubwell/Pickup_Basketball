import React from "react";
import './CedarParkComp.css';
import { Link } from "react-router-dom";
import CedarParkMap from "../GoogleMaps/CedarParkMap";

const CedarParkComp = () => {
    return ( 
        <div>
        <div>
            <p><h2 className="cedar-title">Cedar Park Basketball Courts</h2></p>
        </div>
        <div className="cedar-contain">
            <div className="court-image-contain">
                <img src ="/images/cedarparkcourt.jpg" className = "cedar-image" alt = "cp court"/>
            </div>
            <div className="cedar-map-contain">
                <CedarParkMap/>
            </div>
        </div>
    </div>
     );
}
 
export default CedarParkComp;