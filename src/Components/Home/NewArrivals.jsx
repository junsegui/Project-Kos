import React from "react";
import styled from "styled-components";
import { Item } from "./Item";

export const NewArrivals = () => {
  return (
    <>
      <Container>
        <StyledP>new arrivals</StyledP>
      </Container>
      <ContArrival>
        <Item />
        <Item />
        <Item />
        <Item />
      </ContArrival>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
`;

const StyledP = styled.p`
  height: auto;
  margin-left: 10%;
  font-size: 1.4rem;
  color: #4d4b4a;
  font-weight: 700;
`;

const ContArrival = styled.div`
  width: 80%;
  height: auto;

  margin-left: 10%;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 6px;
    width: 4px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-bg);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:vertical {
    display: none;
  }
`;
