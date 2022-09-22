import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Items, items } from "../../Data/Items";
import { DesktopItem } from "./DesktopItem";



export const ShopItemsDesktop = () => {
<<<<<<< HEAD
  console.log(Items);
=======

  const {items} = useSelector(state=>state.items)
     

>>>>>>> a9e28b29f1ed0977b5abd50bea48b9b46ca8049b
  return (
    <Container>
      <Tittle>our products</Tittle>
      <ContainerTotal>
        <CategoriesContainer>
          <UL>
            <LI>decoration</LI>
            <LI>jarrones</LI>
            <LI>macetas</LI>
          </UL>
        </CategoriesContainer>
        <CatContainers>
          <ItemContainer>
<<<<<<< HEAD
            {items.map((item) => {
              <DesktopItem key={item.id} {...item} />;
            })}
=======
           {
            items.map((i)=>{
              <DesktopItem key={i.id} {...i}/>
            })
           }
        
        
          
>>>>>>> a9e28b29f1ed0977b5abd50bea48b9b46ca8049b
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
