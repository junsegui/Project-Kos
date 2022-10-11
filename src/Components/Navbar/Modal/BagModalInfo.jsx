import React from 'react'
import styled from 'styled-components'

export const BagModalInfo = () => {
  return (
    <Container>
        <StyledP>bag</StyledP>
        <BagModalInfo/>
    </Container>
  )
}

const Container = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;

`
const StyledP = styled.p`
width:100%;`