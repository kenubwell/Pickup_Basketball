import React, { useState, useEffect } from 'react';
import './Comment.css';
import Modal from 'react-modal'
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import ReplyList from '../ReplyList/ReplyList';


const Comment = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [replyText, setReplyText] = useState('')
    const [user, token] = useAuth();
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        postReply();
        getReplies();
      }, [])

    async function postReply(reply){
        console.log(reply)
        let commentId = reply.comment_id
        let response = await axios.post(`http://127.0.0.1:8000/comment/reply/${commentId}/`, reply, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        });
        getReplies();      
      }
    
    async function getReplies(){
        let response = await axios.get(`http://127.0.0.1:8000/comment/reply/${props.id}/`, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        });
        setReplies(response.data);
      }

    function handlesubmit(){
        setModalIsOpen(false)
         let newReplyPost = {
         "comment_id": props.id,
         "text": replyText
         }
         postReply(newReplyPost);
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
        <div>
            <ReplyList replies = {replies}/>
        </div>
    </div> 
    );
}
 
export default Comment;