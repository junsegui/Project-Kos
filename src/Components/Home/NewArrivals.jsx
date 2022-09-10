import React from "react";
import styled from "styled-components";
import { Item } from "./Item";

export const NewArrivals = () => {
  return (
    <>
      <Center>
        <Center80>
          <Container>
            <StyledP>new arrivals</StyledP>
          </Container>

          <ContArrival>
            <Item />
            <Item />
            <Item />
            <Item />
          </ContArrival>
        </Center80>
      </Center>
    </>
  );
};

const Container = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
`;

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
`;
const Center80 = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;

  flex-direction: column;
`;
const StyledP = styled.p`
  height: auto;
  margin-left: 10%;
  font-size: 1.4rem;
  color: #4d4b4a;
  font-weight: 700;

  @media (min-width: 771px) {
    font-size: 2rem;
  }
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
