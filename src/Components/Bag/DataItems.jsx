import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm, Form } from "formik";
import { LoginInput } from "../Formik/loginInput";
import { checkOutInitialValues } from "../Formik/initialValues";
import { checkOutValidationSchema } from "../Formik/validationSchema";
import { createOrderDocument } from "../../Firebase/fireBaseUtils";

export const DataItems = () => {
  const { items } = useSelector((state) => state.bag);
  const subtotal = items.reduce(
    (sub, item) => (sub += item.price * item.quantity),
    0
  );
  const { user } = useSelector((state) => state.login);
  const { items: bag } = useSelector((state) => state.bag);
  return (
    <>
      <Description>your bag</Description>
      <TotalQuantity>total quantity: ${subtotal}</TotalQuantity>

      <Submit
        onClick={async (e) => {
          const order = {
            subtotal,
            bag,
            user: user.id,
            email: user.email,
          };
          await createOrderDocument(order);
        }}
      >
        order
      </Submit>
    </>
  );
};

const Description = styled.p`
  font-size: 1.8rem;
  color: #4d4b4a;
  font-weight: 700;
`;
const TotalQuantity = styled.p`
  font-size: 1.5rem;
  color: #3a3837;
`;
const Submit = styled.button`
  width: 50%;
  padding: 3% 10%;
  border-radius: 15px;
  border: none;
  background-color: #c8beb5;
  color: #222120;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 1s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
