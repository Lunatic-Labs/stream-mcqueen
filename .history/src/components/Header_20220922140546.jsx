import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logo.png'

export default function Header(props) {
  return (
    <Container>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <button>
        {props.login ? "Log In" : "Sign In"}
      </button>
    </Container>
  )
}
 const Container = styled.div``;