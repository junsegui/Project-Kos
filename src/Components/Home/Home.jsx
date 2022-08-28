import React from "react";
import { Frase } from "./Frase";
import { NewArrivals } from "./NewArrivals";
import { AboutContainer } from "./PrimerParte";
import { StyledButton } from "./StyledButton";
import { StyledContainer } from "./StyledContainer";
import { StyledP } from "./StyledP";

export const Home = () => {
  return (
    <>
      <StyledContainer>
        <StyledP>new</StyledP>
        <StyledP>collection</StyledP>
        <StyledButton>shop</StyledButton>
      </StyledContainer>
      <AboutContainer>
        <Frase />
        <NewArrivals />
      </AboutContainer>
    </>
  );
};
