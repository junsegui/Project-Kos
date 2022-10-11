import React from "react";
import { Closer } from "./Closer";
import { ContainerModal } from "./ContainerModal";
import { StyledList } from "./StyledList";

export const ModalMenu = () => {
  return (
    <ContainerModal
      initial={{ translateX: -1000 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: -1000 }}
      transition={{ type: "spring", damping: 27 }}
    >
      <Closer />
      <StyledList />
    </ContainerModal>
  );
};
