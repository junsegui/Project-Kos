import React from "react";
import styled from "styled-components";
import jarron from "../../../public/assets/Jarrones/jarronCircular.jpg";

export const DesktopItem = () => {
  return (
    <Container>
      <IMG src={jarron} />
      <ContainerPrices>
        <p>hola</p>
        <p>$40</p>
      </ContainerPrices>
    </Container>
  );
};

const Container = styled.div`
  width: 30%;
  height: 50%;

  margin-left: 1%;
  margin-top: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IMG = styled.img`
  width: 80%;
  height: 80%;
`;
const ContainerPrices = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  justify-content: space-between;
`;
