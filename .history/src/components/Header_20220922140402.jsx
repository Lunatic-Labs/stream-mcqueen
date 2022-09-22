import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logo.png'

export default function Header() {
  return (
    <Container>
      <div className="logo">
        <img src={Logo} alt="Logo" href="/" />
      </div>
    </Container>
  )
}
 const Container = styled.div``;