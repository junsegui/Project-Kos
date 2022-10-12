import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addItem, deleteItem } from "../../Redux/Bag/actionBag";
export const BagItemCard = ({ img, price, tittle, quantity, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <IMG src={img} />
        <DataContainer>
          <ItemName>{tittle}</ItemName>
          <QuantityContaier>
            <StyledButton onClick={(e) => dispatch(deleteItem(id))}>
              -
            </StyledButton>
            <p>{quantity}</p>
            <StyledButton
              onClick={(e) =>
                dispatch(addItem({ img, price, tittle, quantity, id }))
              }
            >
              +
            </StyledButton>
          </QuantityContaier>
          <Total>unit price: ${price}</Total>
          <Total>Total: ${price * quantity}</Total>
        </DataContainer>
      </Container>
      <MobileContainer>
        <ImageContainerMobile>
          <IMG src={img} />
        </ImageContainerMobile>
        <InfoContainerMobile>
          <ItemName>{tittle}</ItemName>
          <QuantityContaier>
            <StyledButton onClick={(e) => dispatch(deleteItem(id))}>
              -
            </StyledButton>
            <p>{quantity}</p>
            <StyledButton
              onClick={(e) =>
                dispatch(addItem({ img, price, tittle, quantity, id }))
              }
            >
              +
            </StyledButton>
          </QuantityContaier>
          <Total>unit price: ${price}</Total>
          <Total>Total: ${price * quantity}</Total>
        </InfoContainerMobile>
      </MobileContainer>
    </>
  );
};
const Container = styled.div`
  height: 40%;
  width: 45%;
  display: flex;
  flex-direction: row;
  border: 2px solid #4d4d4d;
  margin-bottom: 1%;
  border-radius: 15px;
  margin-right: 1%;
  @media (max-width: 768px) {
    display: none;
  }
`;
const IMG = styled.img`
  width: 45%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
const ItemName = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #4d4b4a;
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
  }
`;
const DataContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const QuantityContaier = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Total = styled.p`
  font-size: 1.2rem;
  color: #4d4b4a;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: left;
  }
`;
const StyledButton = styled.button`
  padding: 5% 5%;
  width: 25%;
  font-size: 1.1rem;
  border-radius: 100px;
  border: none;
  background-color: #c8beb5;
  font-weight: 500;
  cursor: pointer;
`;
const MobileContainer = styled.div`
  width: 30%;
  height: 98%;
  display: flex;
  margin-right: 1%;
  border: 1px solid black;
  border-radius: 15px;
  @media (min-width: 771px) {
    display: none;
  }
`;
const ImageContainerMobile = styled.div`
  width: 70%;
  height: 100%;
`;
const InfoContainerMobile = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
