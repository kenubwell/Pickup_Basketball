import React from "react";
import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Calendar from "../../components/Calendar/Calendar";
import "./HomePage.css";


const HomePage = () => {

  return (
    <div className="homepage-container">
        <div><SideBar/></div>
        <div><Calendar/></div>
    </div>
  );
};

export default HomePage;
