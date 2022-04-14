import React from "react";
import './HighSchoolGames.css';

const HighSchoolGames = (props) => {
    return ( 
    <div className = 'highschool-container'>
        <div className="hs-big-img-contain">
            <img src ="/images/howardhs-logo.jpg" className = "hs-lions-logo" alt = "hs lions"/>
        </div>
        <div className="hs-table-container">
            <div className='table-title'>
                <div className ='highschool-title-contain'>
                    <p className='highschool-title'>Howard High School Lions</p>
                </div>
            </div>
        <table className='hs-game-table table'>
        <thead>
            <tr className = 'hs-header-row'>
                <th>Date</th>
                <th>Game</th>
                <th>Location</th>            
                <th>Get Tickets</th>
            </tr>
        </thead>
        <tbody>
            {props.hsgames.map((games, index) => { 
            return (
                <tr key= {index} className = 'hs-display-rows'>
                    <td>{games.date}</td>
                    <td>{games.game}</td>
                    <td>{games.location}</td>
                    <td><a href="https://www.maxpreps.com/md/ellicott-city/howard-lions/basketball/schedule/" target="_blank"><img src ="/images/howard-hs-lion.jpg" className = "hs-lion-img" alt = "hs lion"/></a></td>
                </tr>
            )
            })}
        </tbody>
        </table>
        </div>
    </div>     
     );
}
 
export default HighSchoolGames;