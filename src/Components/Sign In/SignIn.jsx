import { Formik as FormikContainer, Form as FormikForm } from "formik";
import React from "react";
import styled from "styled-components";
import { Input } from "../Formik/Input";
import { signUpInitialValues } from "../Formik/initialValues";
import { signUpValidationSchema } from "../Formik/validationSchema";

export const SignIn = () => {
  return (
    <Container>
      <Sign_In>sign in</Sign_In>
      <Formik
        initialValues={signUpInitialValues}
        validationSchema={signUpValidationSchema}
        onSubmit={(values) => console.log(values)}
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
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Formik = styled(FormikContainer)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const Form = styled(FormikForm)`
  width: 90%;
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
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  padding: 5%;
`;
