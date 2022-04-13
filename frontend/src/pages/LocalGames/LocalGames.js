import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LocalGames.css";
import SideBar from "../../components/SideBar/SideBar";



const LocalGames = () => {
    return ( 
        <div className="courts-container">
            <div><SideBar/></div>
        </div>
        
     );
}
 
export default LocalGames;