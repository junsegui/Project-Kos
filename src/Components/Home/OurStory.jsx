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
  position: relative;
  margin: clamp(3rem, 8vw, 6rem) clamp(1.75rem, 6vw, 5rem) clamp(4rem, 10vw, 8rem);
  display: grid;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
  padding: clamp(2.5rem, 6vw, 4rem);
  border-radius: 36px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(245, 241, 236, 0.8));
  box-shadow: 0 35px 65px rgba(31, 31, 31, 0.12);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 85% 15%, rgba(159, 143, 122, 0.2), transparent 58%);
    pointer-events: none;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1.05fr 1fr;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 70%;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 30px 55px rgba(31, 31, 31, 0.2);
  transform: translateZ(0);
  transition: transform 280ms ease;

  @media (min-width: 900px) {
    padding-top: 100%;
  }

  &:hover {
    transform: translateY(-6px);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(17, 17, 17, 0) 50%, rgba(17, 17, 17, 0.35) 100%);
    opacity: 0;
    transition: opacity 260ms ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const StoryImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 320ms ease;

  ${ImageWrapper}:hover & {
    transform: scale(1.04);
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 520px;
  display: grid;
  gap: 1.1rem;
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
  font-size: clamp(2.1rem, 4vw, 2.9rem);
  font-weight: 600;
  color: #1f1f1f;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(31, 31, 31, 0.68);
`;

const StoryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.9rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #1f1f1f;
  text-decoration: none;
  padding: 0.85rem 1.9rem;
  border-radius: 999px;
  border: 1px solid rgba(31, 31, 31, 0.14);
  background: rgba(255, 255, 255, 0.65);
  transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;

  &::after {
    content: "";
    width: 0.65rem;
    height: 0.65rem;
    border-top: 1px solid currentColor;
    border-right: 1px solid currentColor;
    transform: rotate(45deg);
    transition: transform 200ms ease;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(31, 31, 31, 0.28);
    box-shadow: 0 16px 28px rgba(31, 31, 31, 0.12);
  }

  &:hover::after {
    transform: translateX(4px) rotate(45deg);
  }

  &:focus-visible {
    outline: 2px solid rgba(31, 31, 31, 0.55);
    outline-offset: 3px;
  }
`;
