import React from "react";
import styled from "styled-components";
import jarron from "../../assets/Decoration/alce.jpg";
export const BagItemCard = ({ img, price, tittle }) => {
  return (
    <Container>
      <IMG src={img} />
      <DataContainer>
        <ItemName>{tittle}</ItemName>
        <QuantityContaier>
          <StyledButton>-</StyledButton>
          <p>{1}</p>
          <StyledButton>+</StyledButton>
        </QuantityContaier>
        <Total>unit price: ${price}</Total>
        <Total>Total: ${price}</Total>
      </DataContainer>
    </Container>
  );
};
const Container = styled.div`
  height: 40%;
  width: 45%;
  display: flex;
  flex-direction: row;
  border: 2px solid #4d4d4d;
  margin-bottom: 1%;
  border-radius: 15px;
  margin-right: 1%;
`;
const IMG = styled.img`
  width: 45%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;
const ItemName = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #4d4b4a;
`;
const DataContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const QuantityContaier = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Total = styled.p`
  font-size: 1.2rem;
  color: #4d4b4a;
`;
const StyledButton = styled.button`
  padding: 5% 5%;
  width: 25%;
  font-size: 1.1rem;
  border-radius: 100px;
  border: none;
  background-color: #c8beb5;
  font-weight: 500;
  cursor: pointer;
`;
