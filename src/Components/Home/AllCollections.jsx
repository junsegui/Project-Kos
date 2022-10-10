import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import JarronRaro from "../../assets/Jarrones/jarronRaro2.jpg";
import alce from "../../assets/Decoration/alce.jpg";
import maceta from "../../assets/Macetas/maceta2.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { selectedCategorie } from "../../Redux/Categories/actionCategories";
import { useRedirect } from "../../assets/Hooks/useRedirect";
export const AllCollections = () => {
  const { categories } = useSelector((state) => state.categorie);
  const dispatch = useDispatch();

  return (
    <>
      <MobileCollection>
        <StyledP>all collections</StyledP>
        <CollectionItem>
          <Contenedor>
            <Image1
              to="/shop"
              onClick={(e) =>
                dispatch(selectedCategorie(categories[0].categorie))
              }
            />
            <Category>{categories[0].categorie}</Category>
          </Contenedor>
          <Contenedor>
            <Image2 to="shop" />
            <Category>{categories[1].categorie}</Category>
          </Contenedor>
          <Contenedor>
            <Image3 to="shop" />
            <Category>{categories[2].categorie}</Category>
          </Contenedor>
        </CollectionItem>
      </MobileCollection>
      <DesktopCollection>
        <Center>
          <BigImgContainer>
            <BigImg
              to="/shop"
              onClick={(e) =>
                dispatch(selectedCategorie(categories[0].categorie))
              }
            >
              <StyledC>{categories[0].categorie}</StyledC>
            </BigImg>
          </BigImgContainer>
          <Divider>
            <ContainerDivTwo>
              <ImageItem1
                to="/shop"
                onClick={(e) =>
                  dispatch(selectedCategorie(categories[1].categorie))
                }
              >
                <StyledC>{categories[1].categorie}</StyledC>
              </ImageItem1>
            </ContainerDivTwo>
            <ContainerDivTwo>
              <ImageItem2
                to="/shop"
                onClick={(e) =>
                  dispatch(selectedCategorie(categories[2].categorie))
                }
              >
                <StyledC>{categories[2].categorie}</StyledC>
              </ImageItem2>
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
  width: 90%;
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
const BigImg = styled(NavLink)`
  width: 80%;
  height: 90%;
  text-decoration: none;
  background-image: url(${alce});
  background-position: 100% 50%;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  border-radius: 15px;
`;
const StyledC = styled.p`
  font-size: 1.5rem;
  margin-right: 1%;
  color: #4d4d4d;
  font-weight: 800;
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
const ImageItem1 = styled(NavLink)`
  width: 80%;
  height: 80%;
  background-image: url(${JarronRaro});
  display: flex;
  align-items: end;
  justify-content: flex-end;
  text-decoration: none;
  background-position: 50% 70%;
  background-size: 100%;
  border-radius: 15px;
`;
const ImageItem2 = styled(NavLink)`
  width: 80%;
  height: 80%;
  text-decoration: none;
  background-image: url(${maceta});
  display: flex;
  background-position: 50% 90%;
  align-items: end;
  border-radius: 15px;
  justify-content: flex-end;
  background-size: 100%;
`;

const Contenedor = styled.div`
  width: 40%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5%;
  margin-left: 1%;
  @media (max-width: 508px) {
    height: 150px;
    width: 300px;
  }
`;
const Images = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  @media (min-width: 426px) {
    height: 90%;
  }
`;
const Image1 = styled(NavLink)`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background-image: url(${alce});
  background-position: 100% 50%;
  background-size: 100%;
  border-radius: 15px;
  text-decoration: none;
`;
const Image2 = styled(NavLink)`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background-image: url(${JarronRaro});
  background-position: 100% 50%;
  background-size: 100%;
  border-radius: 15px;
  text-decoration: none;
`;
const Image3 = styled(NavLink)`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background-image: url(${maceta});
  background-position: 100% 50%;
  background-size: 100%;
  border-radius: 15px;
  text-decoration: none;
`;
