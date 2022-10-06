import React from 'react'
import styled from 'styled-components'
import cardSliderPlaceholder from '../assets/cardSliderPlaceholder.png';
export default function Card({movieData, isLiked = false}) {
  return (
        <Container>
            <img src={cardSliderPlaceholder} alt="cards" />
        </Container>
  )
}
 const Container = styled.div`
 
 `;
 