import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <>
      <MobileContainer>
        <Line />
        <Brands>
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </Brands>
      </MobileContainer>
      <DesktopContainer>
        <Line />
      </DesktopContainer>
    </>
  );
};

const MobileContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 770px) {
    display: none;
  }
`;
const Line = styled.div`
  width: 80%;
  height: 10%;
  border-top: 3px solid #4d4b4a;
  margin-bottom: 5%;
`;
const Brands = styled.div`
  width: 80%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5%;
`;

const DesktopContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;

  @media (max-width: 769px) {
    display: none;
  }
`;