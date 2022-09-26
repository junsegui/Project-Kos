import React from "react";
import styled from "styled-components";
import { device, size } from "../../../Styles/Medias/MediaQueries";

export const DesktopNavbar = styled.div`
  width: 100%;
  display: flex;
  height: 20vh;
  justify-content: space-around;
  align-items: center;
  background-color: #c8beb5;

  @media (max-width: 769px) {
    display: none;
  }
`;
