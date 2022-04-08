import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MeadowbrookPage.css";
import SideBar from "../../components/SideBar/SideBar";
import MeadowComp from "../../components/MeadowComp/MeadowComp";


const MeadowbrookPage = () => {
    return ( 
        <div className="courts-container">
            <div><SideBar/></div>
            <div><MeadowComp/></div>
        </div>
        
     );
}
 
export default MeadowbrookPage;