import React from "react";
import './News.css';

const News = (props) => {
    return ( 
        <div className="news-articles-container">
            {props.articles.map((article, index) => { //use curly brackets to write JavaScript within HTML. The index will iterate the index values (Note it starts at 0)
            return (
                <div className = "article-core-contain" key = {index}>
                    <div>
                        <img className="image-contain" src={article.urlToImage} alt ='New Image' />
                    </div>
                    <div className = 'link-contain-art'>
                        <a href={article.url} target ="_blank">{article.title}</a>
                    </div>
                    <div className="desc-contain-art">
                        <div><b className="orange-news">Description:</b><medium className="news-general-font"> {article.description}</medium> </div>
                    </div>
                    <div>
                        <div><b className="orange-news">Source:</b><medium className="news-general-font"> {article.source.name}</medium> </div>
                    </div>
                </div>
            )
            })}

        </div>
     );
}
 
export default News;