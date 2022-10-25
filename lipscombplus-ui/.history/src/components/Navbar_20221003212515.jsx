import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logo.png'


export default function Navbar(isScrolled) {

    const links=[
        { name:"Home", link: "/" },
        { name:"Events", link: "/events" },
        { name:"Concerts", link: "/concerts" },
        { name:"Sports", link: "/sports" },
        { name:"My List", link: "/mylist" },
    ]

  return (
   <Container>
        <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
            <div className="left flex a-center">
                <div className="brand flex a-center j-center">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
            <ul className='links flex'>
                {links.map((Pname,Link)=>{
                    return (
                        <li key={name}>
                            <Link to={Link}>{name}</Link>
                        </li>  
                    )
                })}
            </ul>
        </nav>
   </Container>
  );
}

const Container = styled.div``;