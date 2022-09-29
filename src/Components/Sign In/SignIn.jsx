import React from 'react'
import styled from 'styled-components'

export const SignIn = () => {
  return (
    <Container>
        <WidthContainer>
             <Sign_In>sign in</Sign_In>
             <InputField>
             <Label>username:</Label>
             <Input />
             </InputField>
             <InputField>
             <Label>email:</Label>
             <Input/>
             </InputField>
             <InputField>
             <Label>password:</Label>
             <Input/>
             </InputField>
             <InputField>
             <Label>address:</Label>
             <Input/>
             </InputField>
             <InputField>
             <Label>birth date:</Label>
             <Input/>
             </InputField>
             <InputField>
             <Label>genre:</Label>
             <Input/>
             </InputField>
             <ButtonContainer>
                <Button>submit</Button>
             </ButtonContainer>
        </WidthContainer>
    </Container>
  )
}
const Container = styled.div`
    width:100%;
    height:80vh;
    display:flex;
    justify-content:center;

`
const WidthContainer = styled.div`
    width:90%;
    height:100%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
`
const Label = styled.label`
font-size:1.5rem;
margin-right:1%;
color:#4d4b4a
`
const Input = styled.input`
    font-size:1.2rem;
    border-radius:8px;
    border:none;
    width:50%;
`
const Sign_In = styled.p`
width:100%;
margin-bottom:0;
margin-top:0;
font-size:2.5rem;
    text-align:center;
    color:#4d4b4a;
    font-weight:800;
text-align:center;`
const InputField = styled.div`
    width:40%;
    
    display:flex;
    justify-content:center;


`
const ButtonContainer=styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    
`
const Button = styled.button``