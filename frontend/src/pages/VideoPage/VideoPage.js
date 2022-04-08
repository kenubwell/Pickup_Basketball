import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./VideoPage.css";
import SideBar from "../../components/SideBar/SideBar";
import VideosList from "../../components/VideosList/VideosList";

const VideoPage = () => {
    return (  
        <div className="videos-container">
            <div><SideBar/></div>
            <div><VideosList/></div>
        </div>
    );
}
 
export default VideoPage
