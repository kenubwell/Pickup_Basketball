import React, { useState, useEffect } from "react";
import './GamesList.css';
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import CollegeGames from "../GamesComp/CollegeGames";
import HighSchoolGames from "../GamesComp/HighSchoolGames";

const GameList = () => {

    const [hsgames, setHSGames] = useState([]);
    const [ccgames, setCCGames] = useState([]);
    const [user, token] = useAuth();

    useEffect(() => { 
        getAllCCGames();
        getAllHSGames();
      }, [])


    async function getAllHSGames(){
        let response = await axios.get('http://127.0.0.1:8000/hsgames/', {
            headers: {
            Authorization: 'Bearer ' + token
            }
        });
        setHSGames(response.data);
      }

    async function getAllCCGames(){
        let response = await axios.get('http://127.0.0.1:8000/ccgames/', {
            headers: {
            Authorization: 'Bearer ' + token
            }
        });
        setCCGames(response.data);
      }


    return ( 
        <div className="entire-contain">
            <div className="games-title"><h3 className="">Local Games</h3></div>
            <div className="cc-hs-both-contain">
                <div><CollegeGames ccgames = {ccgames}/></div>
                <div><HighSchoolGames hsgames = {hsgames}/></div>
            </div>
        </div>
     );
}
 
export default GameList
