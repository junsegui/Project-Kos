import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../Redux/Modal/actionModal";
import { togglleVisibleCart } from "../../../Redux/Bag/actionBag";

export const CloseBag = () => {
  const dispatch = useDispatch();

  return (
    <StyledDiv>
      <StyledX
        onClick={() => {
          dispatch(togglleVisibleCart());
        }}
      >
        X
      </StyledX>
    </StyledDiv>
  );
};
const StyledX = styled.p`
  color: black;

  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 98;
`;
const StyledDiv = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left:2rem;
`;
