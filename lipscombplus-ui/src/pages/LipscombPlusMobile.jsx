import React, { useEffect, useState } from 'react'
import "../stylepages/lipscombplus.css";
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
  }) 

 window.onscroll = () => {
   setIsScrolled(window.pageYOffset===0?false:true);
   return () => (window.onscroll = null)
 }

 return (
   <div className='container1'>
     <Navbar isScrolled={isScrolled}/>
     < div className="hero">
       <img
        src={backgroundImage}
        alt="background"
        className="background-image"
       />

    <a href='/'>
    <img src={Logo} alt="logo" className='lipscombPlusLogo' />
    </a>
{/* ?????? */}
       <div className="container2">
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
   </div>
 )
}
 
