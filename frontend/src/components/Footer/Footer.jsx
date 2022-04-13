import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="copy-right">
            <medium className='copy-color'> Ken Blackwell's </medium><medium className="footer-color"> HoCo Pickup &copy;{new Date().getFullYear()} | No Rights Reserved | Open-Source</medium>
      </div>
      <nav>
        <li className = "footer-list foot-lo"><Link to = '/'><img src ="/images/basketball-logo-wh.jpg" className = "footer-image" alt = "logo-basketball"/></Link></li>
        <li className = "footer-list foot-bl"><a href="https://ballislife.com/" target="_blank"><img src ="/images/ballislife.jpg" className = "footer-image" alt = "ball is life"/></a></li>
        <li className = "footer-list"><a href="https://www.slamonline.com/" target="_blank"><img src ="/images/slam.jpg" className = "footer-image" alt = "slam"/></a></li>
      </nav>
    </footer>
  );
};

export default Footer;