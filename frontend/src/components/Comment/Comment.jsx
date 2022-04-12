import React, { useState, useEffect } from 'react';
import './Comment.css';
import Modal from 'react-modal'


const Comment = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [replyText, setReplyText] = useState('')

    function handlesubmit(){
        setModalIsOpen(false)
         let newReplyPost = {
         "comment_id": props.id,
         "text": replyText
         }
         props.postReply(newReplyPost);
         props.getAllComments();
     }

     function handleSecondClick(){
        props.deleteComment(props.id);
        props.getAllComments();
    }

    return ( 
    <div>
        <div className = 'two-button-contain'>
            <div className='repbutton-contain'>
                <button type='button' className='reply-button' onClick={() => setModalIsOpen(true)}>Reply</button>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className='modal-back'>
                <form>
                    <div>
                        <label htmlFor="Reply" className='reply-text'>Reply:{" "}</label>
                        <input onChange={(e) => setReplyText(e.target.value)} type= "text" id = 'Reply' className='reply-input'/>
                    </div>
                    <div>
                        <button type = 'button' onClick={() => {handlesubmit()}} className='reply-post'>Post</button>
                        
                    </div>
                </form>
            </Modal>
            <div className ='dbutton-contain'><button type = 'button' className ='delete-button' onClick={() => {handleSecondClick()}}>Delete</button></div>
        </div>
    
    </div> 
    );
}
 
export default Comment;