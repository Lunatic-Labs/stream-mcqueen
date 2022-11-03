import React from 'react'
import '../stylecomponents/player.css';
import {BsArrowLeft} from 'react-icons/bs'
import video from "../assets/video1.mp4"
import { useNavigate } from 'react-router-dom';
 
export default function Player() {
  
   const navigate = useNavigate();
 return <div>
   <div className="player">
       <div className="back">
           <BsArrowLeft onClick={()=>navigate(-1)} />
       </div>
       <video src={video} autoPlay loop controls muted ></video>
   </div>
 </div>
}
 