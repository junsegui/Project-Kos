import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledList = () => {
  return (
    <Ul>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/contact">contact</Link>
      <Li>account</Li>
    </Ul>
  );
};

const Ul = styled.ul`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
`;
const Li = styled.li`
  font-size: 1.3rem;
  color: black;
`;
