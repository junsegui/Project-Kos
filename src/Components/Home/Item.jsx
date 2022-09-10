import React from "react";
import styled from "styled-components";
import jarronCircular from "../../../public/assets/Jarrones/jarronCircular.jpg";

export const Item = () => {
  return (
    <Contenedor>
      <Image src={jarronCircular} alt="JarronCircular" />
      <PriceCont>
        <StyledP>Jarron</StyledP>
        <StyledP>$25</StyledP>
      </PriceCont>
    </Contenedor>
  );
};

const Contenedor = styled.div`
  width: 33%;
  height: 100%;
  display: flex;

  flex-direction: column;
  align-items: center;
  margin-right: 0;
`;
const Image = styled.img`
  width: 90%;
  height: auto;
  border: 1px solid black;
`;
const PriceCont = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;
const StyledP = styled.p``;
