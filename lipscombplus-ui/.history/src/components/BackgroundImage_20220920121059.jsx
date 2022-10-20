import React from 'react'
import styled from 'styled-components'
import background from '../assets/login.jpeg'

export default function BackgroundImage() {
  return (
    <Container>
        <img src={background} alt='background' />
    </Container>
    )
}
 const Container = styled.div``;