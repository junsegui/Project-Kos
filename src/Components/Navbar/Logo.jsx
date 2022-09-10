import styled from "styled-components";
import { device } from "../../Styles/Medias/MediaQueries";

export const Logo = styled.img`
  width: 100%;
  height: 100%;

  @media (min-width: 770px) {
    width: 20%;
    height: auto;
  }
  @media ${device.tablet} {
    width: 30%;
  }
  @media ${device.mobileL} {
    width: 30%;
  }
  @media ${device.mobileM} {
    width: 50%;
  }
`;
