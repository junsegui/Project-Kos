import React from "react";
import styled from "styled-components";
import { device } from "../../Styles/Medias/MediaQueries";

export const Frase = () => {
  return (
    <Container>
      <Parrafo>
        kos is a collection of modern, handmade ceramics, inspired by the
        nature's unique shapes and tones.
      </Parrafo>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5%;
`;

const Parrafo = styled.p`
  text-align: center;
  width: 80%;
  font-size: 0.9rem;
  font-weight: 700;
  color: #4d4b4a;
  border-bottom: 2px solid #4d4b4a;
  padding-bottom: 5%;

  @media ${device.tablet} {
    font-size: 1.2rem;
    padding-bottom: 2%;
    width: 70%;
  }
  @media ${device.laptop} {
    font-size: 1.5rem;
    width: 40%;
    padding-bottom: 1%;
  }
`;
