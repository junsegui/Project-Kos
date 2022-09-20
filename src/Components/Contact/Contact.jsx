import React from "react";
import styled from "styled-components";

export const Contact = () => {
  return (
    <Container>
      <WidthContainer>
        <ContactUs>contact us</ContactUs>
        <TextContainer>
          <Paragraph>
            contact us if you are a wholesaler and want to be part of the unique
            kos experience.
          </Paragraph>
          <ContactContainer>
            <UL>
              <LI>hola</LI>
              <LI>hola</LI>
              <LI>hola</LI>
              <LI>hola</LI>
              <LI>hola</LI>
            </UL>
          </ContactContainer>
        </TextContainer>
      </WidthContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WidthContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ContactUs = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: #4d4b4a;
`;
const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const Paragraph = styled.p`
  width: 40%;
  height: 100%;
  text-align: center;
  font-size: 1.8rem;
  justify-content: center;
  margin: 5%;
  color: #4d4d4d;
  font-family: 500;
`;
const ContactContainer = styled.div`
  width: 60%;
  height: 100%;
`;
const UL = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  border: 1px solid crimson;
  justify-content: space-between;
  flex-direction: column;
`;
const LI = styled.li`
  width: 100%;
  height: 20%;
  font-size: 1.9rem;
  margin-bottom: 4%;
`;
