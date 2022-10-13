import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 } from "uuid";
import { createOrderDocument } from "../../Firebase/fireBaseUtils";
import { clearCart } from "../../Redux/Bag/actionBag";
import { BagItemCard } from "./BagItemCard";
import { DataItems } from "./DataItems";

export const Bag = () => {
  const { items } = useSelector((state) => state.bag);
  const subtotal = items.reduce(
    (sub, item) => (sub += item.price * item.quantity),
    0
  );
  const { user } = useSelector((state) => state.login);
  const { items: bag } = useSelector((state) => state.bag);
  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <WidthContainer>
          <YourOrder>your order</YourOrder>
          <CC>
            <BagItemContainer>
            {items.length ? items.map((i) => (
              <BagItemCard key={i.id} {...i} />
            )): <Empty>empty bag </Empty>}
            </BagItemContainer>
            <DataItemContianer>
              <DataItems />
            </DataItemContianer>
          </CC>
        </WidthContainer>
      </Container>
      <MobileContainer>
        <YourOrder>you order</YourOrder>
        <WidthContainer>
          <MobileItemsContainer>
            {items.length ? items.map((i) => (
              <BagItemCard key={i.id} {...i} />
            )): <Empty>empty bag </Empty>}
          </MobileItemsContainer>
        </WidthContainer>
        <TotalQuantityContainer>
          <TotalQuantity>
            <p>total quantity:</p>
            <p>${subtotal}</p>
          </TotalQuantity>
          <Order
            onClick={async (e) => {
              const order = {
                subtotal,
                bag,
                user: user.id,
                email: user.email,
                orderId: v4(),
              };

              await createOrderDocument(order);
              await dispatch(clearCart());
            }}
          >
            order
          </Order>
        </TotalQuantityContainer>
      </MobileContainer>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 5%;
  @media (max-width: 768px) {
    display: none;
  }
`;
const WidthContainer = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;

  flex-direction: column;
  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`;
const YourOrder = styled.p`
  font-size: 2rem;
  color: #4d4b4a;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: left;
    width: 80%;
  }
`;
const BagItemContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`;
const CC = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;
const DataItemContianer = styled.div`
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const MobileContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 771px) {
    display: none;
  }
`;
const MobileItemsContainer = styled.div`
  height: 50vh;
  width: 230vw;
  display: flex;

  @media (max-width: 508px) {
    height: 38vh;
  }
`;
const TotalQuantityContainer = styled.div`
  width: 80%;
  height: 25vh;
  display: flex;
  flex-direction: column;
`;
const TotalQuantity = styled.p`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  color: #4d4d4d;
  text-decoration: none;
`;
const Order = styled.button`
  height: 20%;
  border-radius: 10px;
  border: none;
  background-color: #c8bcb4;
  color: #4d4d4d;
  font-weight: 800;
`;
const Empty = styled.p`
  height:100%;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#4d4d4d;
  font-size:1.2rem;
  @media (max-width: 768px) {
width:35%;
height:75%;
  }
`