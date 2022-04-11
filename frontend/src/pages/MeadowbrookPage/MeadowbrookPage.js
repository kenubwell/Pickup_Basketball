import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MeadowbrookPage.css";
import SideBar from "../../components/SideBar/SideBar";
import MeadowComp from "../../components/MeadowComp/MeadowComp";



const MeadowbrookPage = () => {

    return ( 
    <div>
        <div className="courts-container">
            <div><SideBar/></div>
            <div><MeadowComp/></div>
        </div>
    </div>  
     );
}
 
export default MeadowbrookPage;