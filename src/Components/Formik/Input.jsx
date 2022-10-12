import { ErrorMessage, Field } from "formik";
import React from "react";
import styled from "styled-components";

export const Input = ({ children, name, htmlFor, type, id }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputField>
          <Label htmlFor={htmlFor}>{children}</Label>
          <InputStyled
            type={type}
            id={id}
            {...field}
            isError={errors[field.name]}
            autoComplete="on"
          />
          <ErrorMessage name={field.name}>
            {(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
          </ErrorMessage>
        </InputField>
      )}
    </Field>
  );
};

const Label = styled.label`
  font-size: 1.5rem;
  margin-right: 1%;
  color: #4d4b4a;
  text-align:left;
  @media (max-width:508px) {
    font-size:1rem;
  }
`;
const InputStyled = styled.input`
  font-size: 1.2rem;
  border-radius: 8px;
  border: none;
  width: 50%;
  border: ${({ isError }) => (isError ? "1px solid #fb103d" : "none")};
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media (max-width:508px) {
    width:90%;
  }
`;

const InputField = styled.div`
  width: 30%;
  margin-bottom: 5%;
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items:center;

`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
  @media (max-width:508px) {
    font-size:10px;
    text-align:center;
  }
`;
