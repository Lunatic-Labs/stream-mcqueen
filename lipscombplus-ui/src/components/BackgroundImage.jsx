import React from 'react'
import styled from 'styled-components'
import background from '../assets/Dark_GradientDark_Gradient.jpg'

export default function BackgroundImage() {
  return (
    <Container>
        <img src={background} alt='background' />
    </Container>
    )
}
 const Container = styled.div`
    height: 100vh;
    width: 100vw:
    background-position: center;
    img {
        height: 100vh;
        width: 100vw;
        
       
            
      
      
      
          
        
    }
 `;

