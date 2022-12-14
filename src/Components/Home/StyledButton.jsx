import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledButton = styled(NavLink)`
  background-color: transparent;
  color: #4d4b4a;
  font-size: 1.5rem;
  transition: all 1s ease-in-out;
  border-bottom: 2px solid #4d4b4a;
  cursor: pointer;
  font-weight: 600;
  text-decoration:none;
  &:hover {
    transform: scale(1.2);
  }
`;
