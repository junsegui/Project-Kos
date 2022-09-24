import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export const ProductItem = () => {
  const { id } = useParams();
  const { items } = useSelector((state) => state.items);

  const findedItem = items.find((item) => item.id === parseInt(id));
  console.log(findedItem);

  return (
    <Container>
      <WidthContainer>
        <ImageContainer>
          <IMG src={findedItem.img} />
        </ImageContainer>
        <InfoContainer>
          <Back> back to </Back>
          <TittlePrice>
            <Tittle>{findedItem.tittle}</Tittle>
            <Price>${findedItem.price}</Price>
          </TittlePrice>
          <Description>
            rounded vase is a handmade with clay, inspired by the nordic nature
            and color tones. due to their handmade nature, each bowl is unque in
            shape and size.
          </Description>
          <AddAndButton>
            <AddAndRest>
              <But>-</But>
              <Numb>1</Numb>
              <But>+</But>
            </AddAndRest>
            <AddToBag>add to bag</AddToBag>
          </AddAndButton>
        </InfoContainer>
      </WidthContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80vh;
  margin-bottom: 2%;
  margin-top: 1%;
`;
const WidthContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: right;
`;
const InfoContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const IMG = styled.img`
  width: 60%;
  height: 100%;
`;
const Back = styled.p``;
const TittlePrice = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;
const Tittle = styled.p``;
const Price = styled.p``;

const Description = styled.p`
  width: 80%;
`;
const AddAndButton = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`;
const AddAndRest = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
`;
const But = styled.button`
  width: 33%;
`;
const Numb = styled.p`
  width: 33%;
`;
const AddToBag = styled.button`
  width: 40%;
`;
