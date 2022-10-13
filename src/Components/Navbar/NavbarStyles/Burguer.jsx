import React from "react";
import styled from "styled-components";
import { device } from "../../../Styles/Medias/MediaQueries";

export const Burguer = styled.nav`
  width: 100%;
  display: flex;
  height: 15vh;
  justify-content: space-around;
  align-items: center;
  background-color: #c8beb5;


  @media (min-width: 770px) {
    display: none;
  }
`;
