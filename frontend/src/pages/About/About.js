import React, { useState, useEffect } from "react";
import "./About.css";
import SideBar from "../../components/SideBar/SideBar";
import AboutMe from "../../components/AboutMe/AboutMe";

const About = () => {
    return (  
    
        <div className="about-container">
            <div><SideBar/></div>
            <div><AboutMe/></div>
        </div>
     
     );
}
 
export default About;