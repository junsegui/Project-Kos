import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Item } from "../Home/Item";
import { MobileCat } from "../Home/MobileCat";
import { Categories } from "./Categories";
import { Iems } from "./Iems";

export const ShopItems = () => {
  const { items } = useSelector((state) => state.items);
  const Items = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category] = [...acc[item.category], item];

    return acc;
  }, {});
  const { selectedCategorie, categories } = useSelector(
    (state) => state.categorie
  );
  return (
    <Container>
      <UL>
        {categories.map((i) => (
          <MobileCat key={i.id} {...i} />
        ))}
      </UL>
      <ItemContainer>
        {Object.entries(Items).map(([c, i]) =>
          !selectedCategorie || c === selectedCategorie
            ? i.map((i) => <Iems key={i.id} {...i} />)
            : []
        )}
      </ItemContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const StyledTittle = styled.ul`
  width: 90%;
  list-style: none;
  padding-bottom: 5%;
  border-bottom: 2px solid #4d4b4a;
  font-weight: 700;
  color: #4d4b4a;
  display: flex;
  flex-direction: row;
`;
const ItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const UL = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
`;
