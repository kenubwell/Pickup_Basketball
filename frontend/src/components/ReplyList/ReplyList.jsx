import React, { useState, useEffect } from "react";
import './ReplyList.css';
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const ReplyList = (props) => {

    const [user, token] = useAuth();
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        getReplies();
        props.getAllComments();
    }, []);
    
    // useEffect(() => {

    //     props.getAllComments();
    // }, [getReplies()]);


    async function getReplies(){
        let response = await axios.get(`http://127.0.0.1:8000/comment/reply/${props.id}/`, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        });
        setReplies(response.data);
        props.getAllComments();
      }


    return ( 
        <div>
            {replies.map((reply, index) => { //use curly brackets to write JavaScript within HTML. The index will iterate the index values (Note it starts at 0)
        return (
            <div key = {index}>
                <div className="list-text">Reply:<span className="orange-text">{reply.text} </span></div>
            </div>
        )
        })}
        </div>
     );
}
 
export default ReplyList;