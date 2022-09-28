export const TOOGGLE_CART = "TOOGGLE_CART";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export const togglleVisibleCart = () => ({
  type: TOOGGLE_CART,
});
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});
