import React, { useState, useEffect } from "react";
import './MeadowComp.css';
import axios from "axios";
import { Link } from "react-router-dom";
import MeadowMap from "../GoogleMaps/MeadowMap";
import Payment from "../Payment/Payment";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import LikeIndicator from "../LikeIndicator/LikeIndicator";
import useAuth from "../../hooks/useAuth";

const MeadowComp = () => {
    const [courtId, setCourtId] = useState(2);
    const [allComments, setAllComments] = useState([]);
    const [court, setCourt] = useState([]);
    const [user, token] = useAuth();

    useEffect(() => {
        getAllComments();
        getCourt();
        deleteComment();
      }, [])
    

    async function getAllComments(){
    let response = await axios.get(`http://127.0.0.1:8000/comment/${courtId}/`, {
        headers: {
        Authorization: 'Bearer ' + token
        }
    });
    setAllComments(response.data)   
    console.log(response.data) 
    }

    async function getCourt(){
    let response = await axios.get(`http://127.0.0.1:8000/court/${courtId}/`, {
        headers: {
        Authorization: 'Bearer ' + token
        }
    });
    setCourt(response.data)   
    console.log(response.data) 
    }


    async function postComment(text){
        let newComment = {
            text: text,
            court_id: courtId,
          }
        let response = await axios.post(`http://127.0.0.1:8000/court/`, newComment, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        });
        getAllComments();
      }
    
      async function postLike(){
        let response = await axios.put(`http://127.0.0.1:8000/court/${courtId}/`,{}, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        });
        getCourt();
      }

      async function postDisLike(){
        let response = await axios.patch(`http://127.0.0.1:8000/court/${courtId}/`,{}, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        });
        getCourt();
      }

      async function deleteComment(id){
        let response = await axios.delete(`http://127.0.0.1:8000/comment/${id}/`, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        });
        getAllComments();
      }
      
    return ( 
        <div className="entire-contain">
            <div>
                <div><h3 className="meadow-title">Meadowbrook Athletic Complex</h3></div>
            </div>
            <div className="meadow-contain">
                <div className="meadow-image-contain">
                    <img src ="/images/meadowbrook.jpg" className = "meadow-image" alt = "mb court"/>
                    <div className="notice-pay-contain">
                        <div className="notice-fee"><medium className='notice-text'><b>Note: </b>Small fee of $5.00 to reserve.</medium></div>
                        <div><Payment/></div>
                    </div>
                </div>
                <div className="meadow-map-contain">
                    <MeadowMap/>
                </div>
            </div>
            <div>
                <div><LikeIndicator postLike = {postLike} postDisLike = {postDisLike} court = {court} getCourt = {getCourt}/></div>
            </div>
            <div>
                <div><CommentForm postComment = {postComment}/></div>
                <div><CommentList allComments = {allComments} deleteComment = {deleteComment} getAllComments = {getAllComments}/></div>
            </div>
        </div>
     );
}
 
export default MeadowComp;