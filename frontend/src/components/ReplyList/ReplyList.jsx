import React, { useState, useEffect } from "react";
import './ReplyList.css';

const ReplyList = (props) => {

    return ( 
        <div>
            {props.replies.map((reply, index) => { //use curly brackets to write JavaScript within HTML. The index will iterate the index values (Note it starts at 0)
        return (
            <div key = {index}>
                <div className="list-text-reply">Reply:<span className="orange-text">{reply.text} </span></div>
            </div>
        )
        })}
        </div>
     );
}
 
export default ReplyList;