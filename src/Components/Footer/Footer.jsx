import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

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
        <Line/>
        <UL>
          <Link to="/shop">shop</Link>
          <Link to="/ourstory">our story</Link>
          <Link to="/account">account</Link>
          <Link to="/bag">bag</Link>
        </UL>
      </DesktopContainer>
    </>
  );
};

const MobileContainer = styled.div`
  width: 100%;
  height: auto;;
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
  margin-left:10%;
  @media (max-width:768px) {
    margin-left:0;
  }
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
  height: auto;
  display: flex;
  flex-direction:column;

  @media (max-width: 769px) {
    display: none;
  }
`;
const UL = styled.ul`
width:20%;
height:auto;
list-style:none;
display:flex;
flex-direction:column;
justify-content:space-between;
margin-left:10%;

`
const Link=styled(NavLink)`
  font-size:1.2rem;
  color:#4d4d4d;
  text-decoration:none;
  margin-bottom:5%;
  font-weight:800;
`