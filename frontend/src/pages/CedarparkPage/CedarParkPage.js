import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CedarParkPage.css";
import SideBar from "../../components/SideBar/SideBar";
import CedarParkComp from "../../components/CedarParkComp/CedarParkComp";


const CedarParkPage = () => {
    return ( 
        <div className="courts-container">
            <div><SideBar/></div>
            <div><CedarParkComp/></div>
        </div>
        
     );
}
 
export default CedarParkPage;