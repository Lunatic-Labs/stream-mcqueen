import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import '../stylepages/events.css';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';

export default function Events() {
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

   onAuthStateChanged(firebaseAuth,(currentUser)=> {
    // if(currentUser) navigate("/"); //TODO: may want to add 2FA
 })
   return (
    <div className='events_container'>
        <div className="navbar">
        <Navbar isScrolled={isScrolled}/>
        </div>
        <div className="data">
            {
                movies.length ? <Slider movies={movies}/> : <NotAvailable/>
            }
        </div>
    </div>
  )
}
