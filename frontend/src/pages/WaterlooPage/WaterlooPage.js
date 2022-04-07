import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./WaterlooPage.css";
import SideBar from "../../components/SideBar/SideBar";


const WaterlooPage = () => {
    return ( 
        <div className="courts-container">
            <div><SideBar/></div>
            <div>Waterloo</div>
        </div>
        
     );
}
 
export default WaterlooPage;