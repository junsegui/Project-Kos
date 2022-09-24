import React from "react";
import styled from "styled-components";

export const Bag = () => {
  return (
    <Container>
      <WidthContainer></WidthContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
`;
const WidthContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
