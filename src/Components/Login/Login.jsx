import React, { useEffect } from "react";
import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from "formik";
import { LoginInput } from "../Formik/loginInput";

import { loginInitialValues } from "../Formik/initialValues";
import { loginValidationSchema } from "../Formik/validationSchema";
import {
  
  CreateUserProfile,
  signIn,
  signInGoogle,
} from "../../Firebase/fireBaseUtils";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRedirect } from "../../assets/Hooks/useRedirect";

export const Login = () => {
  const ERROR_CODES = {
    WRONG_PASSWORD: "auth/wrong-password",
    NOT_FOUND_USER: "auth/user-not-found",
  };
  
  const {user}=useSelector(state=>state.login);
  const {navigate} = useNavigate();


  useRedirect("/account");
  return (
    <Container>
      <Init>log in</Init>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async res=>{
          const {email,password}=res;
  
          try{
            const {user} = await signIn(email,password);
            console.log({user})
            CreateUserProfile(user)
          }catch(error){
            const { code } = error;
            switch (code) {
              case ERROR_CODES.WRONG_PASSWORD:
                return alert('Contraseña incorrecta');
              case ERROR_CODES.NOT_FOUND_USER:
                return alert('Usuario no encontrado');
              default:
                return alert('Error interno del servidor');
            }
          }
        }
        
        }
      >
        <Form>
          <LoginInput name="email" type="text" id="email" placeholder="email" />
          <LoginInput
            name="password"
            type="password"
            id="password"
            placeholder="password"
          />

          <Button type="submit">submit</Button>
          <p>or</p>
          <GoogleButton
            onClick={(e) => {
              const response = signInGoogle();
            }}
            type="submit"
          >
            <img
              src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png"
              alt="google"
            />
          </GoogleButton>
        </Form>
      </Formik>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;

  align-items: center;
  flex-direction: column;
`;
const WidthContainer = styled.form`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Init = styled.p`
  font-size: 2.5rem;
  text-align: center;
  color: #4d4b4a;
  font-weight: 800;
`;
const TextImput = styled.input`
  width: 40%;
  height: 5%;
  border: none;
  border-radius: 10px;
  padding: 1%;
  margin-bottom: 3%;
  font-size: 1.3rem;
  color: #4d4b4a;
`;
const Button = styled.button`
  padding: 1% 2%;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  color: #413d3c;
  background-color: #c8beb5;
`;
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
  align-items: center;
`;
const GoogleButton = styled.button`
  padding: 0.6% 3%;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
`;
