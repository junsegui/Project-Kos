import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Iems = ({ img, tittle, price, id }) => {
  const navigate = useNavigate();
  const hadleNavigate = () => {
    navigate(`/shop/${id}`);
  };
  return (
    <Item onClick={hadleNavigate}>
      <IMG src={img} />
      <PriceContainer>
        <StyledP>{tittle}</StyledP>
        <StyledP>${price}</StyledP>
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
  border-radius: 10%;
`;
const PriceContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledP = styled.p`
  font-size: 0.8rem;
  color: #4d4b4a;
`;
