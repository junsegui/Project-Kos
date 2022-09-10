import React from "react";
import styled from "styled-components";
import { Iems } from "./Iems";

export const ShopItems = () => {
  return (
    <Container>
      <StyledTittle>vases</StyledTittle>
      <ItemContainer>
        <Iems />
        <Iems />
        <Iems />
        <Iems />
        <Iems />
        <Iems />
        <Iems />
      </ItemContainer>
      <StyledTittle>algo</StyledTittle>
      <ItemContainer>
        <Iems />
        <Iems />
        <Iems />
        <Iems />
        <Iems />
        <Iems />
        <Iems />
      </ItemContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const StyledTittle = styled.p`
  width: 100%;

  padding-bottom: 5%;
  border-bottom: 2px solid #4d4b4a;
  font-weight: 700;
  color: #4d4b4a;
`;
const ItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
