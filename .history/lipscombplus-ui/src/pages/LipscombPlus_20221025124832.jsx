import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/backgroundImage.jpeg';
import Header from '../components/Header';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';

import Slider from '../components/Slider';

export default function LipscombPlus() {
 
 const [isScrolled, setIsScrolled] = useState(false);


  //remove lines 16-28 when getting rid of dummy data
  const genresLoaded = useSelector((state) => state.lipscombplus.genresLoaded)
  const movies = useSelector((state) => state.lipscombplus.movies)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres())
  },[]) 

  useEffect(() => {
    if(genresLoaded) dispatch(fetchMovies({type: "all"}))
  },[genresLoaded]) 

 window.onscroll = () => {
   setIsScrolled(window.pageYOffset===0?false:true);
   return () => (window.onscroll = null)
 }

 return (
   <Container>
     <Navbar isScrolled={isScrolled}/>
     < div className="hero">
       <img
        src={backgroundImage}
        alt="background"
        className="background-image"
       />
{/* ?????? */}
       <div className="container">
         <div className="title text">
          <Header></Header>
         </div>
{/* ?????? */}
         <div className="buttons flex">
           <button className="flex j-center a-center" onClick={()=>navigate('/player')}>
             <FaPlay/> Play
           </button>
           <button className="flex j-center a-center">
             <AiOutlineInfoCircle/> More Info
           </button>
         </div>
       </div>
     </div>
     <Slider movies={movies}
     />
   </Container>
 )
}
 
const  Container = styled.div`
background-color: black;
.hero {
 position: relative;
 .background-image {
   filter: brightness(60%);
   object-fit: cover;
 }
 img {
   height: 75vh;
   width: 100vw;
 }
 .container {
   position: absolute;
   bottom: 5rem;
   .logo {
     img {
       width: 30%;
       height: 30%;
       margin-left: 5rem;
     }
   }
   .buttons {
     margin 5rem;
     gap: 2rem;
     button {
       font-size: 1.4rem;
       gap: 1rem;
       border-radius: 0.2rem;
       padding: 0.5rem;
       padding-left: 2rem;
       padding-right: 2.4rem;
       border: none;
       cursor: pointer;
       transition: 0.3s ease-in-out;
       &:hover {
         opacity: 0.8;
       }
       &:nth-of-type(2) {
         background-color: rgba(109, 109, 110, 0.7);
         color: #F3AA02;
         svg {
           font-size: 1.8rem;
         }
       }
     }
   }
 }
}
`;
