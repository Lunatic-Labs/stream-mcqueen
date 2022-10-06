import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Login from './pages/Login'
import LipscombPlus from './pages/LipscombPlus'
import SignUp from './pages/SignUp'
import Player from './components/Player';

export default function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<SignUp/>}/>
      <Route exact path="/player" element={<Player/>}/>
      <Route exact path="/" element={<LipscombPlus/>}/>
     </Routes>
     </BrowserRouter>
    )
}
