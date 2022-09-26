import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { toggleModal } from "../../../Redux/Modal/actionModal";

export const StyledList = () => {
  const dispatch = useDispatch()
  return (
    <Ul>
      <StyledNavLink to="/"  onClick={() => {
          dispatch(toggleModal());
        }}>Home</StyledNavLink>
      <StyledNavLink to="/shop"  onClick={() => {
          dispatch(toggleModal());
        }}>Shop</StyledNavLink>
      <StyledNavLink to="/contact"  onClick={() => {
          dispatch(toggleModal());
        }}>contact</StyledNavLink>
      <StyledNavLink to="/account"  onClick={() => {
          dispatch(toggleModal());
        }}>account</StyledNavLink>
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
const StyledNavLink = styled(NavLink)`
    font-size: 1.3rem;
    width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:1.2rem;
  text-decoration:none;
  color:#4d4b4a;
  font-weight:700;
`