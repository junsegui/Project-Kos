import React from 'react'
import styled from 'styled-components'

export const Account = () => {
  return (
    <Container>
        <WidthContainer>
            <Init >log in</Init>
            <TextImput type="text" placeholder='username'/>
            <TextImput type="password" placeholder='password'/>
            <Button>submit</Button>
            <p>forgot username or password?</p>
            <p>enter with</p>
            <p>don’t have an account? create it</p>
     
        </WidthContainer>
    </Container>
  )
}



const Container = styled.div`
    width:100%;
    height:80vh;
    display:flex;
    justify-content:center;
    align-items:center;
`
const WidthContainer = styled.form`
    width:60%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Init = styled.p`
    font-size:2.5rem;
    text-align:center;
    color:#4d4b4a;
    font-weight:800;
`
const TextImput = styled.input`
        width:40%;
        height:5%;
        border:none;
        border-radius:10px;
        padding:1%;
        margin-bottom:3%;
        font-size:1.3rem;
        color:#4d4b4a;

`
const Button = styled.button`
    padding: 1% 2%;
    border-radius:10px;
    border:none;
    cursor: pointer;
    font-size:1.3rem;
    color:#413d3c;
    background-color:#C8BEB5;
`