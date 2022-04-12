import React from "react";
import './CommentList.css';
import Comment from "../Comment/Comment";
import ReplyList from "../ReplyList/ReplyList";

const CommentList = (props) => {
    return ( 
        <div>
        {props.allComments.map((comment, index) => { //use curly brackets to write JavaScript within HTML. The index will iterate the index values (Note it starts at 0)
        return (
            <div className = 'comm-list-contain'key = {index}>
                <div className="list-text">Username:<span className="orange-text">{comment.user.username} </span></div>
                <div className="list-text">Comment:<span className="orange-text">{comment.text}</span></div>
                <div><Comment id={comment.id} {...props}/></div>
                <div><ReplyList id={comment.id} {...props}/></div>
            </div>
        )
        })}
        </div>   
     );
}
 
export default CommentList;