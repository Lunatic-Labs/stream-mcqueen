import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/Logo.png'

export default function Header(props) {
  const navigate = useNavigate()
  return (
    <Container>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <button onClick={()=>navigate(props.login? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign In"}
      </button>
    </Container>
  )
}
 const Container = styled.div``;