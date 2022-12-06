import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Login from './pages/Login'
import LipscombPlus from './pages/LipscombPlus'
import SignUp from './pages/SignUp'
import Player from './components/Player';
import Concerts from './pages/Concerts';
import Events from './pages/Events'
import Sports from './pages/Sports'
import Chapels from './pages/Chapels'
import UserLiked from './pages/UserLiked'


export default function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<SignUp/>}/>
      <Route exact path="/player" element={<Player/>}/>
      <Route exact path="/chapels" element={<Chapels/>}/>
      <Route exact path="/concerts" element={<Concerts/>}/>
      <Route exact path="/events" element={<Events/>}/>
      <Route exact path="/sports" element={<Sports/>}/>
      <Route exact path="/mylist" element={<UserLiked/>}/>
      <Route exact path="/" element={<LipscombPlus/>}/>
     </Routes>
     </BrowserRouter>
    )
}
