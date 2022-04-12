import React, { useState, useEffect } from 'react';
import './Comment.css';
import Modal from 'react-modal'


const Comment = (props) => {

    return ( 
    <div>
        {props.allComments.map((comment, index) => { //use curly brackets to write JavaScript within HTML. The index will iterate the index values (Note it starts at 0)
        return (
            <form className = 'two-button-contain'key = {index}>
                <div className='repbutton-contain'><button type = 'submit' className ='reply-button'>Reply</button></div>
                <div className ='dbutton-contain'><button type = 'submit' className ='delete-button' onClick={() => {props.deleteComment(comment) ; props.getAllComments()}}>Delete</button></div>
            </form>
        )
        })}
    </div> 
    );
}
 
export default Comment;