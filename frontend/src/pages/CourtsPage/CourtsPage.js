import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CourtsPage.css";
import SideBar from "../../components/SideBar/SideBar";
import CourtsList from "../../components/CourtsList/CourtsList";

const CourtsPage = () => {
    return ( 
        <div className="courts-container">
            <div><SideBar/></div>
            <div><CourtsList/></div>
        </div>
        
     );
}
 
export default CourtsPage;