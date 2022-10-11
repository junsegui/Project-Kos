import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { BagItemCard } from "./BagItemCard";
import { DataItems } from "./DataItems";

export const Bag = () => {
  const { items } = useSelector((state) => state.bag);
  return (
    <>
    <Container>
      <WidthContainer>
        <YourOrder>your order</YourOrder>
        <CC>
          <BagItemContainer>
            {items.map((i) => (
              <BagItemCard key={i.id} {...i} />
            ))}
          </BagItemContainer>
          <DataItemContianer>
            <DataItems />
          </DataItemContianer>
        </CC>
      </WidthContainer>
    </Container>
    <MobileContainer>
      <WidthContainer>
        <YourOrder>you order</YourOrder>
        <MobileItemsContainer>
        {items.map((i) => (
              <BagItemCard key={i.id} {...i} />
            ))}
        </MobileItemsContainer>
      </WidthContainer>
    </MobileContainer>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-bottom:5%;
  @media (max-width:768px) {
    display:none;
  }
`;
const WidthContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const YourOrder = styled.p`
  font-size: 2rem;
  color: #4d4b4a;
  font-weight: 700;
  @media (max-width:768px) {
    font-size:1.2rem;
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
  width:100%;
  height:auto;
  display:flex;
  justify-content:center;
  @media (min-width:771px) {
    display:none;
  }
`
const MobileItemsContainer = styled.div`
  height:60%;
  width:100%;
  display:flex;
  border:1px solid black;
  justify-content:space-around;
  overflow-x:auto;
`