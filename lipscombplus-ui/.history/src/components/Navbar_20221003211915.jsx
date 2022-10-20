import { Container } from 'postcss'
import React from 'react'
import styled from 'styled-components'

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
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </nav>
   </Container>
  );
}

const Container = styled.div``;