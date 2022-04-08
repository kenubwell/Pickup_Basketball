import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LionGatePage.css";
import SideBar from "../../components/SideBar/SideBar";
import LionGateComp from "../../components/LionGateComp/LionGateComp";


const LionGatePage = () => {
    return ( 
        <div className="courts-container">
            <div><SideBar/></div>
            <div><LionGateComp/></div>
        </div>
        
     );
}
 
export default LionGatePage;