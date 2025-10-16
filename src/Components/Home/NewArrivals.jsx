import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { newArrivals } from "../../Data/newArrivals";
import { Item } from "./Item";

export const NewArrivals = () => {
  return (
    <Section>
      <Header>
        <div>
          <Eyebrow>fresh from the kiln</Eyebrow>
          <Title>New arrivals</Title>
        </div>
        <BrowseLink to="/shop">browse all pieces</BrowseLink>
      </Header>
      <Grid>
        {newArrivals.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </Grid>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  margin: clamp(3rem, 8vw, 6rem) clamp(1.75rem, 6vw, 5rem);
  background: linear-gradient(140deg, rgba(255, 255, 255, 0.95), rgba(245, 242, 237, 0.82));
  border-radius: 36px;
  padding: clamp(2.75rem, 7vw, 4.75rem);
  box-shadow: 0 30px 60px rgba(31, 31, 31, 0.12);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 12% 12%, rgba(159, 143, 122, 0.18), transparent 55%);
    pointer-events: none;
  }
`;

const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: clamp(2rem, 4vw, 3.5rem);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

const Eyebrow = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.28em;
  font-size: 0.75rem;
  font-weight: 600;
  color: #9f8f7a;
  display: inline-block;
  margin-bottom: 0.75rem;
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 600;
  color: #1f1f1f;
`;

const BrowseLink = styled(Link)`
  position: relative;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.9rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #1f1f1f;
  padding: 0.8rem 1.9rem;
  border-radius: 999px;
  border: 1px solid rgba(31, 31, 31, 0.12);
  text-decoration: none;
  background: rgba(255, 255, 255, 0.65);
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;

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

const Grid = styled.div`
  position: relative;
  display: grid;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;
