import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="copy-right">
            <medium className='copy-color'> Ken Blackwell's </medium><medium className="footer-color"> HoCo Pickup &copy;{new Date().getFullYear()} | No Rights Reserved | Open-Source</medium>
      </div>
      <nav>
        <li className = "footer-list"><a href="https://ballislife.com/" target="_blank"><img src ="/images/ballislife.jpg" className = "footer-image" alt = "esports Logo"/></a></li>
        <li className = "footer-list"><a href="https://www.slamonline.com/" target="_blank"><img src ="/images/slam.jpg" className = "footer-image" alt = "e3 Logo"/></a></li>
      </nav>
    </footer>
  );
};

export default Footer;