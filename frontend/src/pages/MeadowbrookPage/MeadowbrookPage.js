import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MeadowbrookPage.css";
import SideBar from "../../components/SideBar/SideBar";


const MeadowbrookPage = () => {
    return ( 
        <div className="courts-container">
            <div><SideBar/></div>
            <div>Athletic Complex</div>
        </div>
        
     );
}
 
export default MeadowbrookPage;