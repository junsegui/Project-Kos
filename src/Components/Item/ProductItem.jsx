import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  addItem,
  addItemN,
  decreaseQuantity,
  incrementQuantity,
} from "../../Redux/Bag/actionBag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { selectedCategorie } from "../../Redux/Categories/actionCategories";
import { counter } from "@fortawesome/fontawesome-svg-core";

export const ProductItem = () => {
  const { id } = useParams();
  const { items } = useSelector((state) => state.items);
  const { selectedCategorie } = useSelector((state) => state.categorie);
  const findedItem = items.find((item) => item.id === parseInt(id));
  const dispatch = useDispatch();
  const { tittle, img, price } = findedItem;
  const { counter } = useSelector((state) => state.bag);

  return (
    <>
      <Container>
        <WidthContainer>
          <ImageContainer>
            <IMG src={img} />
          </ImageContainer>
          <InfoContainer>
            <Back to={-1}>
              <FontAwesomeIcon icon={faChevronLeft} />
              back to {selectedCategorie}
            </Back>
            <TittlePrice>
              <Tittle>{tittle}</Tittle>
              <Price>${price}</Price>
            </TittlePrice>
            <Description>
              rounded vase is a handmade with clay, inspired by the nordic
              nature and color tones. due to their handmade nature, each bowl is
              unque in shape and size.
            </Description>
            <AddAndButton>
              <AddAndRest>
                <But onClick={(e) => dispatch(decreaseQuantity())}>-</But>
                <Numb>{counter}</Numb>
                <But onClick={(e) => dispatch(incrementQuantity())}>+</But>
              </AddAndRest>
              <AddToBag
                onClick={(e) =>
                  dispatch(addItemN({ tittle, img, price, id: parseInt(id) }))
                }
              >
                add to bag
              </AddToBag>
            </AddAndButton>
          </InfoContainer>
        </WidthContainer>
      </Container>
      <MobileContainer>
        <WidthContainer>
          <Back to={-1}>
            <FontAwesomeIcon icon={faChevronLeft} />
            back to {selectedCategorie}
          </Back>
          <ImageContainer>
            <IMG src={img} />
          </ImageContainer>
          <TittlePrice>
            <Tittle>{tittle}</Tittle>
            <Price>${price}</Price>
          </TittlePrice>
          <Description>
            rounded vase is a handmade with clay, inspired by the nordic nature
            and color tones. due to their handmade nature, each bowl is unque in
            shape and size.
          </Description>
          <AddAndButton>
            <AddAndRest>
              <But onClick={(e) => dispatch(decreaseQuantity())}>-</But>
              <Numb>{counter}</Numb>
              <But onClick={(e) => dispatch(incrementQuantity())}>+</But>
            </AddAndRest>
            <AddToBag
              onClick={(e) =>
                dispatch(addItemN({ tittle, img, price, id: parseInt(id) }))
              }
            >
              add to bag
            </AddToBag>
          </AddAndButton>
        </WidthContainer>
      </MobileContainer>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80vh;
  margin-bottom: 2%;
  margin-top: 1%;
  @media (max-width: 768px) {
    display: none;
  }
`;
const WidthContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
const ImageContainer = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: right;
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    height: 50%;
  }
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
  height: 95%;
  border-radius: 15px;
  @media (max-width: 768px) {
    width: 60%;
    height: 100%;
  }
  @media (max-width: 320px) {
    width: 80%;
  }
`;
const Back = styled(Link)`
  text-decoration: none;
  color: #4d4d4d;
  font-size: 1.2rem;
  font-weight: 800;
  @media (max-width: 768px) {
    display: flex;
    justify-content: left;
    width: 100%;
    margin: 3% 0;
  }
`;
const TittlePrice = styled.div`
  width: 80%;
  text-decoration: none;

  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #4d4d4d;
  @media (max-width: 768px) {
    height: 10%;
  }
`;
const Tittle = styled.p`
  font-size: 1.5rem;
  color: #4d4d4d;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
const Price = styled.p`
  font-size: 1.4rem;
  color: #4d4d4d;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Description = styled.p`
  width: 80%;
  font-size: 1.1rem;
  color: #4d4d4d;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
const AddAndButton = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  color: #4d4d4d;
`;
const AddAndRest = styled.div`
  width: 40%;
  display: flex;
  color: #4d4d4d;
`;
const But = styled.button`
  width: 33%;
  padding: 5% 5%;
  color: #4d4d4d;
  font-size: 1.1rem;
  border-radius: 100px;
  border: none;
  text-decoration: none;
  background-color: #c8beb5;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 768px) {
  }
`;
const Numb = styled.p`
  width: 33%;
  text-align: center;
`;
const AddToBag = styled.button`
  width: 40%;

  border-radius: 15px;
  border: none;
  background-color: #c8beb5;
  color: #222120;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
`;
const MobileContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 771px) {
    display: none;
  }
`;
