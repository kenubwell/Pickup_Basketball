import React, { useState } from 'react';
import './SideBar.css';
import { SideBarData } from './SideBarData';
import { Link } from 'react-router-dom';

const SideBar = () => {

    return (
    <div className='sidebar-bg'>
        <ul>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className='sav-text'>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
        </ul>
    </div>
    )
}
 
export default SideBar;