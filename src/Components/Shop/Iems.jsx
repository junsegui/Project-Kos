import React from "react";
import styled from "styled-components";
import jarron from "../../../public/assets/Jarrones/jarronCircular.jpg";

export const Iems = () => {
  return (
    <Item>
      <IMG src={jarron} />
      <PriceContainer>
        <p>vesel</p>
        <p>$30</p>
      </PriceContainer>
    </Item>
  );
};

const Item = styled.div`
  width: 40%;
  height: 40%;
  display: flex;
  margin-bottom: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 5%;
  margin-left: 5%;
`;
const IMG = styled.img`
  height: 50%;
  width: 100%;
  border: 1px solid #4d4b4a;
`;
const PriceContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
