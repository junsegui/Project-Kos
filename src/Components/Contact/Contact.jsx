import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import styled from "styled-components";

export const Contact = () => {
  return (
    <>
      <Container>
        <WidthContainer>
          <ContactUs>contact us</ContactUs>
          <TextContainer>
            <Paragraph>
              contact us if you are a wholesaler and want to be part of the
              unique kos experience.
            </Paragraph>
            <ContactContainer>
              <UL>
                <LI>
                  <Icon icon={faPhoneAlt} />
                  +54 3487 282015
                </LI>
                <LI>
                  <Icon icon={faInstagram} />
                  @kos
                </LI>
                <LI>
                  <Icon icon={faTwitter} />
                  @kos
                </LI>
                <LI>
                  <Icon icon={faPaperPlane} />
                  kos@gmail.com
                </LI>
              </UL>
            </ContactContainer>
          </TextContainer>
        </WidthContainer>
      </Container>
      <MobileContainer>
        <WidthContainer>
          <ContactUs>contact us</ContactUs>
          <ContainerM>
            <HalfContainer>
              <Paragraph>
                contact us if you are a wholesaler and want to be part of the
                unique kos experience.
              </Paragraph>
            </HalfContainer>
            <HalfContainer>
              <UL>
                <LI>
                  <Icon icon={faPhoneAlt} />
                  +54 3487 282015
                </LI>
                <LI>
                  <Icon icon={faInstagram} />
                  @kos
                </LI>
                <LI>
                  <Icon icon={faTwitter} />
                  @kos
                </LI>
                <LI>
                  <Icon icon={faPaperPlane} />
                  kos@gmail.com
                </LI>
              </UL>
            </HalfContainer>
          </ContainerM>
        </WidthContainer>
      </MobileContainer>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 769px) {
    display: none;
  }
`;
const WidthContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ContactUs = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: #4d4b4a;
  @media (max-width: 768px) {
    margin-top: 10%;
    font-size: 1.8rem;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
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
  @media (max-width: 768px) {
    margin-top: 10%;
    font-size: 1.4rem;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
  }
`;
const ContactContainer = styled.div`
  width: 60%;
  height: 100%;
`;
const UL = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  list-style: none;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const LI = styled.li`
  width: 100%;
  height: 20%;
  font-size: 1.9rem;
  margin-bottom: 5%;
  color: #4d4d4d;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  margin-right: 2%;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const MobileContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 770px) {
    display: none;
  }
`;

const ContainerM = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
const HalfContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
