import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SplashPage.css";
import SplashTop from "../../components/SplashTop/SplashTop";
import SplashBottom from "../../components/SplashBottom/SplashBottom";

const SplashPage = () => {
    return (  
        <div>
            <SplashTop/>
            <SplashBottom/>
        </div>
    );
}
 
export default SplashPage;