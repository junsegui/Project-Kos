import React from "react";
import styled from "styled-components";
import Alce from "../../../public/assets/Decoration/alce.jpg";
import JarronRaro from "../../../public/assets/Jarrones/jarronRaro2.jpg";
import { device } from "../../Styles/Medias/MediaQueries";

export const AllCollections = () => {
  return (
    <>
      <MobileCollection>
        <StyledP>all collections</StyledP>
        <ItemContainer>
          <CollectionItem>
            <Image src={Alce} />
            <Category>Decoration</Category>
          </CollectionItem>
          <CollectionItem>
            <Image src={Alce} />
            <Category>Decoration</Category>
          </CollectionItem>
          <CollectionItem>
            <Image src={Alce} />
            <Category>Decoration</Category>
          </CollectionItem>
          <CollectionItem>
            <Image src={Alce} />
            <Category>Decoration</Category>
          </CollectionItem>
        </ItemContainer>
      </MobileCollection>
      <DesktopCollection>
        <DesktopContainer>
          <BigImgCont>
            <StyledName>decoration</StyledName>
            <TwoDivs>
              <TwoDivImg1>
                <p>g</p>
              </TwoDivImg1>
            </TwoDivs>
          </BigImgCont>
        </DesktopContainer>
      </DesktopCollection>
    </>
  );
};

const MobileCollection = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 770px) {
    display: none;
  }
`;
const ItemContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  justify-content: space-between;
  padding: 1%;

  &::-webkit-scrollbar {
    height: 6px;
    width: 4px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-bg);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:vertical {
    display: none;
  }
`;
const StyledP = styled.p`
  color: #4d4b4a;
  font-size: 1.4rem;
  margin-left: 0%;
  font-weight: 700;
  display: flex;
  width: 80%;
`;
const CollectionItem = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 5%;
`;
const Image = styled.img`
  border: 1px solid black;
  height: 90%;
`;
const Category = styled.p`
  font-size: 0.9rem;
  color: #4d4b4a;
  font-weight: 700;
  height: auto;
`;
const DesktopCollection = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const DesktopContainer = styled.div`
  width: 80%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  border: 1px solid black;
  align-items: center;
`;

const BigImgCont = styled.div`
  width: 45%;
  height: 90%;
  display: flex;
  background-image: url(${Alce});
  background-position: top 50% left 50%;
  background-size: 100%;
  background-repeat: no-repeat;
  justify-content: right;
  align-items: flex-end;
  border: 1px solid black;
`;
const StyledName = styled.p`
  font-size: 1.5rem;
  margin-right: 5%;
  color: #4d4b4a;
  font-weight: 700;
`;
const TwoDivs = styled.div`
  height: 90%;
  width: 45%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const TwoDivImg1 = styled.div`
  width: 100%;
  height: 50%;
  background-image: url(${JarronRaro});
`;