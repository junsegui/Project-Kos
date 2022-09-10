import React from "react";
import styled from "styled-components";
import ourStory from "../../../public/assets/Jarrones/OurStory.jpg";
import { device } from "../../Styles/Medias/MediaQueries";
export const OurStory = () => {
  return (
    <>
      <Cont>
        <Centrador>
          <InnerCont>
            <Half1>
              <Img src={ourStory} />
            </Half1>
            <Half2>
              <P>
                what started as a hobby and a way to pass time, evolved into a
                real passion.
              </P>
              <Link>our story</Link>
            </Half2>
          </InnerCont>
        </Centrador>
      </Cont>
      <MobileCont>
        <ImageAbout>
          <p>hola</p>
        </ImageAbout>
      </MobileCont>
    </>
  );
};
const InnerCont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Cont = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  margin-bottom: 5%;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Centrador = styled.div`
  width: 90%;
  height: 100%;
`;
const Half1 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 80%;
  height: 50%;
  @media ${device.tablet} {
    width: 80%;
    height: 70%;
  }
  @media ${device.laptop} {
    width: 80%;
    height: 100%;
  }
`;

const Half2 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  background-color: #f2f2f2;
  flex-direction: column;
  justify-content: center;
`;
const P = styled.p`
  color: #4d4b4a;
  text-align: left;
  font-weight: 600;
  width: 100%;
  font-size: 1.1rem;
  margin-bottom: 0;

  @media ${device.tablet} {
    font-size: 1.2rem;
  }
  @media (min-width: 770px) {
    font-size: 1.8rem;
    width: 50%;
  }
`;

const Link = styled.p`
  color: #4d4b4a;
  border-bottom: 2px solid #4d4b4a;

  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: left;
  width: 50%;

  @media ${device.tablet} {
    font-size: 1.2rem;
  }
  @media (min-width: 770px) {
    font-size: 1.5rem;
    width: 25%;
  }
`;
const MobileCont = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 771px) {
    display: none;
  }
`;
const ImageAbout = styled.div`
  width: 70%;
  height: 70%;
  background-image: url(${ourStory});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 95%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    background-position: 50% 60%;
  }
`;
