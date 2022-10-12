import styled from "styled-components";
import { device } from "../../Styles/Medias/MediaQueries";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://images.pexels.com/photos/4207780/pexels-photo-4207780.jpeg");
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  flex-direction: column;

  @media ${device.mobileS} {
    background-position: bottom 30% right 90%;
    background-size: 180%;
  }
  @media ${device.tablet} {
    background-position: bottom 40% right 100%;
    background-size: 130%;
  }
  @media ${device.laptop} {
    background-position: bottom 80% right 100%;
    background-size: 100%;
  }
  @media ${device.laptopL} {
    background-position: bottom 70% right 100%;
    background-size: 100%;
  }
`;
