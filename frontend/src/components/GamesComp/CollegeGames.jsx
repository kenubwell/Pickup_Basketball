import { useState } from "react";
import React from "react";
import './CollegeGames.css';

const CollegeGames = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    return ( 
    <div className = 'college-container'>
        <div className="cc-big-img-contain">
            <img src ="/images/hcc_logo.jpg" className = "hcc-dragon-logo" alt = "hcc dragon"/>
        </div>
        <div className="cc-table-container">
            <div className='table-title'>
                <div className ='college-title-contain'>
                    <div className='college-title'>
                        Howard Community College Dragons
                    </div>
                    <div>
                        <label className='search-label'>Filter Games:</label>
                        <input type='text' className='custom-input' placeholder="Search..." onChange={(event) => setSearchTerm(event.target.value)}/>
                    </div> 
                </div>
            </div>
            <table className='cc-game-table table'>
            <thead>
                <tr className = 'cc-header-row'>
                    <th>Date</th>
                    <th>Game</th>
                    <th>Location</th>            
                    <th>Get Tickets</th>
                </tr>
            </thead>
        <tbody>
            {props.ccgames.filter((games) =>{
                if (searchTerm == ''){
                    return games;
                }
                else if (games.date.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || games.game.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || games.location.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return games;
                }
            })
            .map((games, index) => { 
            return (
                <tr key= {index} className = 'cc-display-rows'>
                    <td>{games.date}</td>
                    <td>{games.game}</td>
                    <td>{games.location}</td>
                    <td><a href="https://howardccdragons.com/sports/mens-basketball/schedule" target="_blank"><img src ="/images/hcc_dragons.jpg" className = "hcc-dragon-img" alt = "hcc dragon"/></a></td>
                </tr>
            )
            })}
        </tbody>
        </table>
        </div>
    </div>     
     );
}
 
export default CollegeGames;