import { items, Items, TotalItems } from "../../Data/Items";
const INITIAL_STATE = {
  items: items,
  total: TotalItems,
};

export const itemReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
