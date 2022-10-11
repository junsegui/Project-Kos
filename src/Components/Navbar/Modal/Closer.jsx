import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../Redux/Modal/actionModal";

export const Closer = () => {
  const dispatch = useDispatch();

  return (
    <StyledDiv>
      <StyledX
        onClick={() => {
          dispatch(toggleModal());
        }}
      >
        X
      </StyledX>
    </StyledDiv>
  );
};
const StyledX = styled.p`
 color:#4d4b4a;
font-weight:800;
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
  justify-content: flex-end;
`;
