import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { auth } from "../../Firebase/fireBaseUtils"
import { setUserNull } from '../../Redux/Login/actionLogin'

export const Account = () => {
  
  const dispatch = useDispatch()
  return (
    <Container>
        <Center80>
            <StyledP>account</StyledP>
            <ButtonsContainer>
                <Paragraph>orders</Paragraph>
                <Paragraph onClick={e=>auth.signOut().then(()=>dispatch(setUserNull()))}>log out</Paragraph>
            </ButtonsContainer>
        </Center80>
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
align-items:center;
  justify-content: center;
`;
const Center80 = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const StyledP = styled.p`
  height: auto;

  font-size: 1.4rem;
  color: #4d4b4a;
  font-weight: 700;
`;
const ButtonsContainer = styled.div`
    width:100%;
    height:20%;
    display:flex;
    justify-content:space-between;
`;
const Paragraph = styled.p`
    font-size:1.2rem;
    color: #4d4d4d;
`;
