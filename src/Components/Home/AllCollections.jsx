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
        <CollectionItem>
          <Contenedor>
            <Images src={JarronRaro} />
            <Category>jarron</Category>
          </Contenedor>
          <Contenedor>
            <Images src={JarronRaro} />
            <Category>jarron</Category>
          </Contenedor>
          <Contenedor>
            <Images src={JarronRaro} />
            <Category>jarron</Category>
          </Contenedor>
        </CollectionItem>
      </MobileCollection>
      <DesktopCollection>
        <Center>
          <BigImgContainer>
            <BigImg>
              <p>hola</p>
            </BigImg>
          </BigImgContainer>
          <Divider>
            <ContainerDivTwo>
              <ImageItem>
                <p>hola</p>
              </ImageItem>
            </ContainerDivTwo>
            <ContainerDivTwo>
              <ImageItem>
                <p>hola</p>
              </ImageItem>
            </ContainerDivTwo>
          </Divider>
        </Center>
      </DesktopCollection>
    </>
  );
};

const MobileCollection = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 770px) {
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
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  overflow-x: scroll;
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

const Category = styled.p`
  font-size: 1rem;
  color: #4d4b4a;
  font-weight: 700;
  margin-top: 0;
`;
const DesktopCollection = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 769px) {
    display: none;
  }
`;

const Center = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
`;

const BigImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/2;
`;
const BigImg = styled.div`
  width: 80%;
  height: 90%;
  background-image: url(${JarronRaro});
  background-position: 50% 50%;
  display: flex;
  justify-content: flex-end;
  align-items: end;
`;
const Divider = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 100%;
  justify-content: center;
`;
const ContainerDivTwo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageItem = styled.div`
  width: 80%;
  height: 80%;
  background-image: url(${JarronRaro});
  display: flex;
  align-items: end;
  justify-content: flex-end;
`;

const Contenedor = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5%;
  margin-left: 1%;
`;
const Images = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  @media (min-width: 426px) {
    height: 90%;
  }
`;
