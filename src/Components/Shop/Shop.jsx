import React from "react";
import styled from "styled-components";
import { ShopItems } from "./ShopItems";
import { ShopItemsDesktop } from "./ShopItemsDesktop";

export const Shop = () => {
  return (
    <>
      <MobileShop>
        <ShopItems />
      </MobileShop>
      <DesktopShop>
        <ShopItemsDesktop />
      </DesktopShop>
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
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 769px) {
    display: none;
  }
`;
