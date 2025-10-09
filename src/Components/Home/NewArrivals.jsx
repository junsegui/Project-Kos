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
  margin: clamp(3rem, 8vw, 6rem) 5vw;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(248, 246, 243, 0.9));
  border-radius: 32px;
  padding: clamp(2.5rem, 7vw, 4.5rem);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
`;

const Header = styled.div`
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
  align-self: flex-start;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #1f1f1f;
  padding-bottom: 0.35rem;
  border-bottom: 1px solid currentColor;
  text-decoration: none;
  transition: opacity 200ms ease;

  &:hover {
    opacity: 0.6;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;
