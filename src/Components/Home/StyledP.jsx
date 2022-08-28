import styled from "styled-components";
import { device } from "../../Styles/Medias/MediaQueries";

export const StyledP = styled.p`
  color: #4d4b4a;
  font-size: 2rem;
  margin: 0;
  margin-bottom: 5%;
  font-weight: 700;

  @media ${device.laptop} {
    margin-bottom: 0;
  }
`;
