import styled from "styled-components";
import { device } from "../../Styles/Medias/MediaQueries";
import background from "../../../public/assets/Jarrones/jarronMain.jpg";

export const StyledContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${background});
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;

  flex-direction: column;

  @media ${device.mobileS} {
    background-position: bottom 70% right 100%;
    background-size: 120%;
  }
`;
