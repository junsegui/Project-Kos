import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Formik as FormikContainer, Form as FormikForm } from "formik"
import { LoginInput } from '../Formik/loginInput'

import { loginInitialValues } from '../Formik/initialValues'
import { loginValidationSchema } from '../Formik/validationSchema'

export const Login = () => {
  return (
    <Container>
           <Init >log in</Init>
        <Formik 
                initialValues={loginInitialValues}
                validationSchema={loginValidationSchema}
                onSubmit={(values) => console.log(values)}>         
            <Form>


                <LoginInput  name="username"
      
            type="text"
            id="username"
            placeholder="username"
  
                />
                <LoginInput
            name="password"
    
            type="password"
            id="password"
            placeholder="password"
          />
  

            <Button type='submit'>submit</Button>
            </Form>
        </Formik>

          

    </Container>
  )
}



const Container = styled.div`
    width:100%;
    height:80vh;
    display:flex;

    align-items:center;
    flex-direction:column
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
const Formik = styled(FormikContainer)`
  width: 100%;
  height: 100%;
  display: flex;

`;
const Form = styled(FormikForm)`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
 align-items:center;

`;