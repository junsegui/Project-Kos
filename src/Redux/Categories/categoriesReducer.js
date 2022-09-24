import { categoties } from "../../Data/Categories";
import { SELECTED_CATEGORIE } from "./actionCategories";

const INITIAL_STATE = {
  categories: categoties,
  selectedCategorie: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SELECTED_CATEGORIE:
      return {
        ...state,
        selectedCategorie: payload,
      };

    default:
      return state;
  }
};
