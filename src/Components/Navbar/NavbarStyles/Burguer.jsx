import React from "react";
import styled from "styled-components";
import { device } from "../../../Styles/Medias/MediaQueries";

export const Burguer = styled.nav`
  width: 100%;
  display: flex;
  height: 20%;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  @media (min-width: 770px) {
    display: none;
  }
`;
