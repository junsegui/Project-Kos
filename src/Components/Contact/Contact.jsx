import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import styled from "styled-components";
import logo from "../../assets/Logo/Mi proyecto.png"

export const Contact = () => {
  return (
    <>
      <Container>
        <WidthContainer>
          <ContactUs>our story</ContactUs>
          <TextContainer>
            <Paragraph>
              it all started with a name. The norweigan word "kos" can be described as nice, cozy or having a relaxedtime. It´s connected to the calm and thoughful process of creating pottery.

              The visual identity is inspired by nature, it´s earthy color tones and simple shapes. we wanted the visual identity to be effortless, fresh and modern, like the ceramic pieces
            </Paragraph>
            <ContactContainer>
              <img src={logo} alt="" />
            </ContactContainer>
          </TextContainer>
                    
        
        </WidthContainer>
      </Container>
      <MobileContainer>
        <WidthContainer>
          <ContactUs>our story</ContactUs>
          <ContainerM>
            <HalfContainer>
              <Paragraph>
              it all started with a name. The norweigan word "kos" can be described as nice, cozy or having a relaxedtime. It´s connected to the calm and thoughful process of creating pottery.

              The visual identity is inspired by nature, it´s earthy color tones and simple shapes. we wanted the visual identity to be effortless, fresh and modern, like the ceramic pieces
              </Paragraph>
            </HalfContainer>
            <HalfContainer>
              <img src={logo}/>
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
  margin-bottom:3%;
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
margin:0;
margin-top:5%;
    font-size: 1.8rem;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction:row;
`;
const Paragraph = styled.p`
  width: 40%;
  height: 100%;
  text-align: left;
  font-size: 1.5rem;
  justify-content: center;
  margin:0;
  color: #4d4d4d;
  font-family: 500;
  @media (max-width: 768px) {
    margin-top: 10%;
    font-size: 1.1rem;
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
  display:flex;
  justify-content:center;
  align-items:center;
  img{
    width:80%;
    height:80%;
  }
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
  height: auto;
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
  flex-direction: column;
`;
const HalfContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img{width:80%}
`;
