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
<nav className="flex">{`flex ${isScrolled}`}</nav>
   </Container>
  )
}

const Container = styled.div``;