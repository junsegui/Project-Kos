import { Formik as FormikContainer, Form as FormikForm } from "formik";
import React from "react";
import styled from "styled-components";
import { Input } from "../Formik/Input";
import { signUpInitialValues } from "../Formik/initialValues";
import { signUpValidationSchema } from "../Formik/validationSchema";
import { registerUser } from "../../Firebase/fireBaseUtils";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const SignIn = () => {
  const ERROR_CODES = {
    EMAIL_IN_USE: "auth/emaill-already-in-use",
  };
    const navigate = useNavigate()
    const {user} =useSelector(state=>state.login)
 
  return (

    <Container>
      <Sign_In>sign in</Sign_In>
      <Formik
        initialValues={signUpInitialValues}
        validationSchema={signUpValidationSchema}
        onSubmit={async (val, { resetForm }) => {
          const { email, password, username, address, age, phone } = val;
          try {
            const response = await registerUser(email, password);
            resetForm();
            navigate("/login")
          } catch (error) {
            if (error === ERROR_CODES.EMAIL_IN_USE) {
              alert("email already used try another one please");
            }
          }
        }}
      >
        <Form>
          <Input
            name="username"
            htmlFor="username"
            type="text"
            id="username"
            placeholder="username"
          >
            username
          </Input>
          <Input
            name="password"
            htmlFor="password"
            type="password"
            id="password"
            placeholder="password"
          >
            password
          </Input>
          <Input
            name="email"
            htmlFor="email"
            type="email"
            id="email"
            placeholder="email"
          >
            email
          </Input>
          <Input
            name="address"
            htmlFor="address"
            type="text"
            id="address"
            placeholder="address"
          >
            address
          </Input>
          <Input
            name="age"
            htmlFor="age"
            type="number"
            id="age"
            placeholder="age"
          >
            age
          </Input>
          <Input
            name="phone"
            htmlFor="phone"
            type="number"
            id="phone"
            placeholder="phone"
          >
            phone
          </Input>
          <ButtonContainer>
            <Button type="submit">submit</Button>
          </ButtonContainer>
        </Form>
      </Formik>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content:center;
  margin-bottom:5%;
`;
const Formik = styled(FormikContainer)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
  margin-top:5%;
  margin-bottom:5%;
`;
const Form = styled(FormikForm)`
  width: auto;
  height: auto;
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Sign_In = styled.p`
  width: 100%;
  margin-bottom: 2%;
  margin-top: 2;
  font-size: 2.5rem;
  text-align: center;
  color: #4d4b4a;
  font-weight: 800;
  text-align: center;
  @media (max-width:508px) {
    font-size:1.5rem;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  padding: 1% 2%;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  color: #413d3c;
  background-color: #c8beb5;
  @media (max-width: 768px) {
    width: 40%;
  }
`;
