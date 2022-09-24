import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Categories } from "./Categories";
import { DesktopItem } from "./DesktopItem";

export const ShopItemsDesktop = () => {
  const { items } = useSelector((state) => state.items);
  const { categories, selectedCategorie } = useSelector(
    (state) => state.categorie
  );
  const Items = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category] = [...acc[item.category], item];

    return acc;
  }, {});

  return (
    <Container>
      <Tittle>our products</Tittle>
      <ContainerTotal>
        <CategoriesContainer>
          <UL>
            {categories.map((i) => (
              <Categories key={i.id} {...i} />
            ))}
          </UL>
        </CategoriesContainer>
        <CatContainers>
          <ItemContainer>
            {Object.entries(Items).map(([c, i]) =>
              !selectedCategorie || c === selectedCategorie
                ? i.map((i) => <DesktopItem key={i.id} {...i} />)
                : []
            )}
          </ItemContainer>
        </CatContainers>
      </ContainerTotal>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
const Tittle = styled.p`
  font-size: 2rem;
  border-bottom: 3px solid #4d4b4a;
  color: #4d4b4a;
  font-weight: 800;
  padding-bottom: 1%;
  padding-top: 1%;
`;
const CategoriesContainer = styled.div`
  width: 20%;
  height: auto;

  display: flex;
`;
const UL = styled.ul`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
`;
const LI = styled.li`
  font-size: 2rem;
  font-weight: 700;
  color: #4d4d4d;
`;
const ContainerTotal = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;
const CatContainers = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemContainer = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const Item = styled.div`
  background-color: red;
  height: 500px;
  width: 300px;
  border: 1px solid black;
  margin-bottom: 1%;
  margin-right: 1%;
  margin-left: 1%;
`;
