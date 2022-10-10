import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Item = ({ img, price, id, tittle }) => {
  const navigate = useNavigate();
  const hadleNavigate = () => {
    navigate(`/shop/${id}`);
  };
  return (
    <Contenedor onClick={hadleNavigate}>
      <Image src={img} alt="JarronCircular" />
      <PriceCont>
        <StyledP>{tittle}</StyledP>
        <StyledP>${price}</StyledP>
      </PriceCont>
    </Contenedor>
  );
};

const Contenedor = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    margin-left: 5px;
  }
`;
const Image = styled.img`
  width: 90%;
  height: auto;
  border: 1px solid black;
  border-radius: 15px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const PriceCont = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;
const StyledP = styled.p`
  @media (max-width: 768px) {
    font-size: 0rem;
  }
`;
