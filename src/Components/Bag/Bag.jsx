import React from "react";
import styled from "styled-components";
import { BagItemCard } from "./BagItemCard";
import { DataItems } from "./DataItems";

export const Bag = () => {
  
  return (
    <Container>
      <WidthContainer>
        <YourOrder>your order</YourOrder>
        <CC>
          <BagItemContainer>
            <BagItemCard/>
            <BagItemCard/>
            <BagItemCard/>
            <BagItemCard/>
            <BagItemCard/>
            <BagItemCard/>
          </BagItemContainer>
          <DataItemContianer>
            <DataItems/>
          </DataItemContianer>
        </CC>
      </WidthContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
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
`;
const BagItemContainer = styled.div`
  width:70%;
  height:100%;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
`
const CC = styled.div`
  width:100%;
  height:auto;
  display:flex;

`
const DataItemContianer=styled.div`
  width:30%;
  height:100%;
  justify-content:center;
  align-items:center;
  display:flex;
  flex-direction:column;
`
