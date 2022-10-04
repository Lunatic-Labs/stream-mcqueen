import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logo.png'
import { useState } from 'react';

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
                {links.map((name,Link)=>{
                    return (
                        <li key={name}>
                            <Link to={Link}>{name}</Link>
                        </li>  
                    )
                })}
            </ul>
            </div>
            <div className="right flex a_center">
                <div className={`search ${showSearch ? "show-search"}`}></div>
            </div>
        </nav>
   </Container>
  );
}

const Container = styled.div``;