import React from "react";
import styled from "styled-components";
import { ShopItems } from "./ShopItems";

export const Shop = () => {
  return (
    <>
      <MobileShop>
        <ShopItems />
      </MobileShop>
    </>
  );
};

const MobileShop = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 771px) {
    display: none;
  }
`;
const DesktopShop = styled.div`
  width: 100%;
  height: auto;
`;
