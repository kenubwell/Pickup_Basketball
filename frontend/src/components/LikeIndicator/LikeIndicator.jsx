import React, { useState } from "react";
import "./LikeIndicator.css";
import { BsCheckLg, BsXLg} from "react-icons/bs";

const LikeIndicator = (props) => {

    function handleClick(){
        props.postLike();
        props.getCourt();
    }


    function handleSecondClick(){
        props.postDisLike();
        props.getCourt();
    }

    return ( 
        <div>
        {props.court.map((court, index) => { //use curly brackets to write JavaScript within HTML. The index will iterate the index values (Note it starts at 0)
        return (
            <div className="likes-overall-contain" key = {index}>
                <div className="like-or-dis-text">Do you Like or Dislike this Court?</div>
                <div className="likes-contain-flex">
                    <div className><b className="like-size-bg">Likes:</b> {court.likes}<span><b className="like-size-bg">DisLikes:</b> {court.dislikes}</span></div>
                    <div><button className="like-button" onClick={() => {handleClick()}}><BsCheckLg/></button></div>
                    <div><button className="dislike-button"  onClick={() => {handleSecondClick()}}><BsXLg/></button></div>
                </div>
            </div>
        )
        })}
        </div> 
     );
}
 
export default LikeIndicator;