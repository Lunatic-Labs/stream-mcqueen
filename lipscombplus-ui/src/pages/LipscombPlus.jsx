
import React, { useEffect, useState } from 'react'
import "../stylepages/lipscombplus.css";
import Navbar from '../components/Navbar';
import Logo from '../assets/lipscombLogoWhiteResizedMobile.png';
import backgroundImage from '../assets/backgroundImage.jpeg';
import Header from '../components/Header';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import Slider from '../components/Slider';
import Sidebar from '../components/Sidebar';

export default function LipscombPlus() {
 
 const [isScrolled, setIsScrolled] = useState(false);
 ///////////////////////////////////////////////////////////////////////////////////// This code checks for mobile device
 const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }
  ///////////////////////////////////////////////////////////////////////////////
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
if(windowSize.innerWidth<800)
{
   return (
   <div className='container1'>
     <Navbar isScrolled={isScrolled}/>
     < div className="hero">
       <img
        src={backgroundImage}
        alt="background"
        className="background-image"
       />                
{/* ?????? */}
       <div className="container2">
         <div className="title text">
          <Header></Header>         
         </div>      
{/* ?????? */}
                <div className="navbar_brand flex a-center j-center">
                    <a href='/' className='lipscombPlusLogo'>
                    <img src={Logo} alt="logo"  />
                    </a>
                </div>      
         <div className="buttons flex">
           <button className="flex j-center a-center" onClick={()=>navigate('/player')}>
             <FaPlay/> Play
           </button>  
         </div>
       </div>
     </div>
     <Slider movies={movies}
     />
   </div>
 )
}
else{

  return (
    <>
     <div className='container1'>
       <Navbar isScrolled={isScrolled}/>
       < div className="hero">
         <img
          src={backgroundImage}
          alt="background"
          className="background-image"
         />
         
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
     </>
  
   )

}
}
