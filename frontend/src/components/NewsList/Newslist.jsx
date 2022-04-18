import React, { useState, useEffect } from "react";
import './NewsList.css';
import axios from "axios";
import News from "../News/News";

const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => { 
        getArticles();
      }, [])


      async function getArticles(){
        let response = await axios.get('https://newsapi.org/v2/everything?q=basketball AND (maryland)&sortBy=relevancyAt&pagesize=6&apiKey=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg');
        setArticles(response.data.articles);
      }

    return ( 
        <div className='entire-contain'>
            <div className="news-title"><h3 className="">Local News</h3></div>
            <div>
                <News articles = {articles}/>
            </div>
        </div>
     );
}
 
export default NewsList;