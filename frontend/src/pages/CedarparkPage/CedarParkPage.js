import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CedarParkPage.css";
import SideBar from "../../components/SideBar/SideBar";


const CedarParkPage = () => {
    return ( 
        <div className="courts-container">
            <div><SideBar/></div>
            <div>Cedar Park</div>
        </div>
        
     );
}
 
export default CedarParkPage;