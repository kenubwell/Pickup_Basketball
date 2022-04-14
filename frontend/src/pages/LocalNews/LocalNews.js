import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LocalNews.css";
import SideBar from "../../components/SideBar/SideBar";
import NewsList from "../../components/NewsList/Newslist";

const LocalNews = () => {
    return (         
        <div className="courts-container">
            <div><SideBar/></div>
            <div><NewsList/></div>
        </div>
     );
}
 
export default LocalNews;