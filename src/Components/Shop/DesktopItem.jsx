import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export const DesktopItem = ({ img, price, tittle, id }) => {
  const navigate = useNavigate();
  const hadleNavigate = () => {
    navigate(`/shop/${id}`);
  };
  return (
    <Container onClick={hadleNavigate}>
      <IMG src={img} />
      <ContainerPrices>
        <p>{tittle}</p>
        <p>${price}</p>
      </ContainerPrices>
    </Container>
  );
};

const Container = styled.div`
  width: 30%;
  height: 50%;
  cursor: pointer;
  margin-left: 1%;
  margin-top: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border:2px solid #4d4d4d;
  border-radius:15px;
`;
const IMG = styled.img`
  width: 100%;
  height: 80%;
  border-top-left-radius:15px;
  border-top-right-radius:15px;
`;
const ContainerPrices = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  justify-content: space-between;
`;
