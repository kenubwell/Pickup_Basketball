import { useState } from "react";
import './HighSchoolGames.css';

const HighSchoolGames = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    return ( 
    <div className = 'highschool-container'>
        <div className="hs-big-img-contain">
            <img src ="/images/howardhs-logo.jpg" className = "hs-lions-logo" alt = "hs lions"/>
        </div>
        <div className="hs-table-container">
            <div className='table-title'>
                <div className ='highschool-title-contain'>
                    <div className='highschool-title'>
                        Howard High School Lions
                    </div>
                    <div>
                        <label className='search-label'>Filter Games:</label>
                        <input type='text' className='custom-input' placeholder="Search..." onChange={(event) => setSearchTerm(event.target.value)}/>
                    </div> 
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
            {props.hsgames.filter((games) =>{
                if (searchTerm == ''){
                    return games;
                }
                else if (games.date.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || games.game.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || games.location.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return games;
                }
            })
            .map((games, index) => { 
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