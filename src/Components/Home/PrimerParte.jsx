import styled from "styled-components";
import { device } from "../../Styles/Medias/MediaQueries";

export const AboutContainer = styled.section`
  width: 100%;
  height: auto;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  margin-bottom: 0%;
  @media ${device.laptop} {
    margin-bottom: 5%;
  }
`;
