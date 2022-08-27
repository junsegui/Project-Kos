import React from "react";
import styled from "styled-components";
import { Closer } from "./Closer";
import { ContainerModal } from "./ContainerModal";
import { StyledList } from "./StyledList";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../Redux/Modal/actionModal";

export const ModalMenu = () => {
  const dispatch = useDispatch();
  return (
    <ContainerModal
      initial={{ translateX: -1000 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: 1000 }}
      transition={{ type: "spring", damping: 27 }}
    >
      <Closer
        onClick={() => {
          console.log("hola");
        }}
      />
      <StyledList />
    </ContainerModal>
  );
};
