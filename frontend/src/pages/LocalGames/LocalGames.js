import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LocalGames.css";
import SideBar from "../../components/SideBar/SideBar";
import GameList from "../../components/GamesList/GamesList";


const LocalGames = () => {
    return ( 
        <div className="courts-container">
            <div><SideBar/></div>
            <div><GameList/></div>
        </div>
        
     );
}
 
export default LocalGames;