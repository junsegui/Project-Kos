import React from "react";
import styled from "styled-components";

export const StyledList = () => {
  return (
    <Ul>
      <Li>shop</Li>

      <Li>contact</Li>
      <Li>account</Li>
      <Li>bag()</Li>
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
