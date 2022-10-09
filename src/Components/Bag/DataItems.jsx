import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm, Form } from "formik";
import { LoginInput } from "../Formik/loginInput";
import { checkOutInitialValues } from "../Formik/initialValues";
import { checkOutValidationSchema } from "../Formik/validationSchema";
import { createOrderDocument } from "../../Firebase/fireBaseUtils";
import { v4 } from "uuid";
import { createOrder } from "../../Redux/Orders/actionOrder";
import { clearCart } from "../../Redux/Bag/actionBag";

export const DataItems = () => {
  const { items } = useSelector((state) => state.bag);
  const subtotal = items.reduce(
    (sub, item) => (sub += item.price * item.quantity),
    0
  );
<<<<<<< HEAD
  const { user } = useSelector((state) => state.login);
  const { items: bag } = useSelector((state) => state.bag);
=======
  const dispatch = useDispatch()
const {user} = useSelector(state=>state.login)
const {items:bag} = useSelector(state=>state.bag)
>>>>>>> 07d803ee65f6f7387e393766d52fa5dc729f8c04
  return (
    <>
      <Description>your bag</Description>
      <TotalQuantity>total quantity: ${subtotal}</TotalQuantity>

      <Submit
        onClick={async (e) => {
          const order = {
            subtotal,
            bag,
<<<<<<< HEAD
            user: user.id,
            email: user.email,
          };
          await createOrderDocument(order);
        }}
      >
        order
      </Submit>
=======
            user:user.id,
            email:user.email,
            orderId:v4()

          }
          console.log(order)

          await createOrderDocument(order);
          await dispatch(createOrder(order))
          await dispatch(clearCart())
        }}
        disabled={!user} >order</Submit>


>>>>>>> 07d803ee65f6f7387e393766d52fa5dc729f8c04
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
