import {React, useState} from 'react'
import '../stylecomponents/card.css';
import cardSliderPlaceholder from '../assets/cardSliderPlaceholder.png';
import { useNavigate } from 'react-router-dom';
import video from "../assets/video1.mp4"
import {IoPlayCircleSharp} from "react-icons/io5"
import {RiThumbUpFill,RiThumbDownFill} from "react-icons/ri"
import {BsCheck} from "react-icons/bs"
import {AiOutlinePlus} from "react-icons/ai"
import {BiChevronDown} from "react-icons/bi"
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

import axios from 'axios';

export default function Card({movieData, isLiked = false}) {
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState(undefined);
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth,(currentUser)=> {
    if(currentUser) setEmail(currentUser.email)
    else navigate("/login"); //TODO: may want to add 2FA
})

const addToList = async () => {
  try {
    await axios.post("http://localhost:5005/api/user/add",{email,data:movieData})
  } catch (err) {
    console.log(err)
  }
}
  return (
        <div className='card_container' 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
             <img 
                  src={`https://image.tmdb.org/t/p/w500${movieData.image}`} 
                  alt="movie"/>
            {
              isHovered && (
                <div className="card_hover">
                  <div className="card_image-video-container">
                  <img 
                  src={`https://image.tmdb.org/t/p/w500${movieData.image}`} 
                  alt="movie"
                  onClick={()=> navigate("/player")}
                  />
                  <video 
                  src={video} 
                  autoPlay 
                  loop
                  muted 
                  onClick={()=> navigate("/player")}
                  />
                  </div>
                  <div className="card_info-container flex column">
                    <h3 className='name' onClick={() => navigate("/player")}></h3>
                    {movieData.name}
                    <div className="card_icons flex j-between">
                      <div className="card_controls flex">
                        <IoPlayCircleSharp
                        title="play"
                        onClick={() => navigate("/player")}
                        />
                        <RiThumbUpFill title="Like"/>
                        <RiThumbDownFill title="Dislike"/>
                        {
                          isLiked ? (
                            <BsCheck title="Remove From List" /> ) : ( 
                            <AiOutlinePlus title="Add to my list" onClick={addToList} />
                          )
                        }
                      </div>
                      <div className="card_info">
                        <BiChevronDown title="More Info" />
                      </div>
                    </div>
                  </div>
                  <div className="card_genres flex">
                    <ul className='flex'>
                        {
                        movieData.genres.map((genre)=> {
                          <li key={genre}>{genre}</li>
                        })
                        }
                    </ul>
                  </div>
                </div>
              )
            }
        </div>
  )
}

 