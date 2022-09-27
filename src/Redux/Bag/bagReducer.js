import { ADD_ITEM, TOOGGLE_CART } from "./actionBag";

const INITIAL_STATE = {
  items: [],
  visible: false,
  totalCost: 0,
};

export const bagReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOOGGLE_CART:
      return {
        ...state,
        visible: !state.visible,
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, payload],
      };
    default:
      return state;
  }
};
