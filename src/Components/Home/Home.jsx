import React from "react";

import { AllCollections } from "./AllCollections";
import { Frase } from "./Frase";
import { NewArrivals } from "./NewArrivals";
import { OurStory } from "./OurStory";
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
        <StyledButton to="/shop">shop</StyledButton>
      </StyledContainer>
      <AboutContainer>
        <Frase />
        <NewArrivals />
      </AboutContainer>
      <OurStory />
      <AllCollections />
    </>
  );
};
