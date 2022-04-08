import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./WaterlooPage.css";
import SideBar from "../../components/SideBar/SideBar";
import WaterlooComp from "../../components/WaterlooComp/WaterlooComp";


const WaterlooPage = () => {
    return ( 
        <div className="courts-container">
            <div><SideBar/></div>
            <div><WaterlooComp/></div>
        </div>
        
     );
}
 
export default WaterlooPage;