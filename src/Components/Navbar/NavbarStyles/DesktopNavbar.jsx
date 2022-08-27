import React from "react";
import styled from "styled-components";
import { device, size } from "../../../Styles/Medias/MediaQueries";

export const DesktopNavbar = styled.div`
  width: 100%;
  display: flex;
  height: 20%;
  justify-content: space-evenly;
  align-items: center;
  background-color: transparent;

  @media (max-width: 769px) {
    display: none;
  }
`;
