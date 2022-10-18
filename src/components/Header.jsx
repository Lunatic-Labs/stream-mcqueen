import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


export default function Header() {
  const navigate = useNavigate()
  return (
    <div>
    </div>
  )
}
 const Container = styled.div`
    padding: 0 4rem;
    
    button{
      padding: 0.5 rem 1rem;
      background-color: #F3AA02;
      border: none;
      cursor: pointer;
      color: white;
      border-radius: 0.2 rem;
      font-weight: bolder;
      font-size: 1.05 rem;
    }
 `;