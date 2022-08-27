import styled from "styled-components";
import { device } from "../../Styles/Medias/MediaQueries";

export const Logo = styled.img`
  width: 50%;
  height: 50%;

  @media (min-width: 770px) {
    width: 20%;
    height: auto;
  }
`;
