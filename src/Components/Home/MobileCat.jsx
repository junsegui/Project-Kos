import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { selectedCategorie } from "../../Redux/Categories/actionCategories";

export const MobileCat = ({ categorie }) => {
  const dispatch = useDispatch();

  return (
    <LI onClick={(e) => dispatch(selectedCategorie(categorie))}>{categorie}</LI>
  );
};
const LI = styled.li`
  font-size: 1.2rem;
  margin-bottom: 1%;
  cursor: pointer;
  color: #4d4b4a;
  font-weight: 800;
`;
