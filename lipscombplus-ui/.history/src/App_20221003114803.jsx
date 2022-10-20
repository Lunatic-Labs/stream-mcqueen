import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Login from './pages/Login'
import Netflix from './pages/Netflix'
import SignUp from './pages/SignUp'

export default function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<SignUp/>}/>
      <Route exact path="/" element={<Netflix/>}/>
     </Routes>
     <Footer></Footer>
     </BrowserRouter>
    )
}
