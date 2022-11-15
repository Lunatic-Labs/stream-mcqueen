import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';

export default function Sports() {
  const [isScrolled, setIsScrolled] = useState(false);


  const genresLoaded = useSelector((state) => state.lipscombplus.genresLoaded)
  const movies = useSelector((state) => state.lipscombplus.movies)
  //will need to change how genres are served | currently being served via TMBD api
  const genres = useSelector((state) => state.lipscombplus.genres)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres())
  },[]) 

  useEffect(() => {
    if(genresLoaded) dispatch(fetchMovies({type: "movies"}))
  }) 

 window.onscroll = () => {
   setIsScrolled(window.pageYOffset===0?false:true);
   return () => (window.onscroll = null)
 }

 onAuthStateChanged(firebaseAuth,(currentUser)=> {
   // if(currentUser) navigate("/"); //TODO: may want to add 2FA
})
  return (
    <Container>
        <div className="navbar">
        <Navbar isScrolled={isScrolled}/>
        </div>
        <div className="data">
        <SelectGenre genres={genres} type="movie" />
            {
                movies.length ? <Slider movies={movies}/> : <NotAvailable/>
            }
        </div>
    </Container>
  )
}

const Container = styled.div`
.data {
    margin-top: 8rem;
    .not-avalable {
        text-align: center;
        color: white;
        margin-top: 4rem;
    }
}
`;