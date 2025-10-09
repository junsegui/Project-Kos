import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import atelier from "../../assets/Decoration/alce.jpg";

export const OurStory = () => {
  return (
    <Section>
      <ImageWrapper>
        <StoryImage src={atelier} alt="Atelier workspace" />
      </ImageWrapper>
      <Content>
        <Eyebrow>behind the wheel</Eyebrow>
        <Title>Our story</Title>
        <Description>
          What began as a weekend ritual soon became a full-time exploration of
          tactility. Every vessel is thrown, glazed, and finished by hand in our
          sunlit studio overlooking Buenos Aires.
        </Description>
        <StoryLink to="/ourstory">read the full story</StoryLink>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  margin: clamp(3rem, 8vw, 6rem) 5vw clamp(4rem, 10vw, 8rem);
  display: grid;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: 1.05fr 1fr;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 70%;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 25px 45px rgba(15, 23, 42, 0.15);

  @media (min-width: 900px) {
    padding-top: 100%;
  }
`;

const StoryImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  max-width: 520px;
  display: grid;
  gap: 1rem;
`;

const Eyebrow = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.28em;
  font-size: 0.72rem;
  font-weight: 600;
  color: #9f8f7a;
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(2.1rem, 4vw, 2.8rem);
  font-weight: 600;
  color: #1f1f1f;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: #6f6f6f;
`;

const StoryLink = styled(Link)`
  font-size: 0.9rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #1f1f1f;
  text-decoration: none;
  width: fit-content;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid currentColor;
  transition: opacity 200ms ease;

  &:hover {
    opacity: 0.6;
  }
`;
