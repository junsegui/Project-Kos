import React from "react";
import styled from "styled-components";

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
`;

const Parrafo = styled.p`
  text-align: center;
  width: 80%;
  font-size: 0.9rem;
  font-weight: 700;
  color: #4d4b4a;
  border-bottom: 2px solid #4d4b4a;
  padding-bottom: 5%;
`;
