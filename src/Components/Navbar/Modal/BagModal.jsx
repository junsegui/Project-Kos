import React from "react";
import { BagModalInfo } from "./BagModalInfo";
import { CloseBag } from "./CloseBag";

import {  ContainerModalBag } from "./ContainerModal";


export const BagModal = () => {
  return (
    <ContainerModalBag
      initial={{ translateX: 800 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: 1000 }}
      transition={{ type: "spring", damping: 27 }}
    >
      <CloseBag />
      <BagModalInfo/>
    </ContainerModalBag>
  );
};
