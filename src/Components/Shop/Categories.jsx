import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { selectedCategorie } from "../../Redux/Categories/actionCategories";

export const Categories = ({ categorie }) => {
  const dispatch = useDispatch();

  return (
    <LI onClick={(e) => dispatch(selectedCategorie(categorie))}>{categorie}</LI>
  );
};
const LI = styled.li`
  font-size: 1.8rem;
  font-weight: 700;
  color: #4d4d4d;
  transition: all 1s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
