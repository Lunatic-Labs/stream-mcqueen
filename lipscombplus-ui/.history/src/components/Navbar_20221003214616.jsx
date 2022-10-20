import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logo.png'
import { useState } from 'react';
import {FaPowerOff, FaSearch} from 'react-icons/fa'
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';

export default function Navbar(isScrolled) {

    const links=[
        { name:"Home", link: "/" },
        { name:"Events", link: "/events" },
        { name:"Concerts", link: "/concerts" },
        { name:"Sports", link: "/sports" },
        { name:"My List", link: "/mylist" },
    ]

    const [showSearch, setShowSearch] = useState(false);
    const [inputHover, setInputHover] = useState(false);

  return (
   <Container>
        <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
            <div className="left flex a-center">
                <div className="brand flex a-center j-center">
                    <img src={Logo} alt="logo" />
                </div>
                <ul className='links flex'>
                {links.map(({name,Link})=>{
                    return (
                        <li key={name}>
                            <Link to={Link}>{name}</Link>
                        </li>  
                    )
                })}
            </ul>
            </div>
            <div className="right flex a_center">
                <div className={`search ${showSearch ? "show-search" : ""}`}>
                    <button 
                    onFocus={()=>setShowSearch(true)} 
                    onBlur={()=> {
                        if (!inputHover) setShowSearch(false)
                    }}
                    >
                    <FaSearch/>
                    </button>
                    <input type="text" placeholder='Search'
                    onMouseEnter={()=>setInputHover(true)}
                    onMouseLeave={()=>setInputHover(false)}
                    onBlur={()=>{
                        setShowSearch(false);
                        setInputHover(false);
                    }}
                    />
                </div>
                <button onClick={()=>signOut(firebaseAuth)}>
                    <FaPowerOff/>
                </button>
            </div>
        </nav>
   </Container>
  );
}

const Container = styled.div``;