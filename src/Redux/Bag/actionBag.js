export const TOOGGLE_CART = "TOOGGLE_CART";
export const ADD_ITEM = "ADD_ITEM";
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
export const DELETE_ITEM = "DELETE_ITEM";
export const ADD_ITEM_N = "AA_ITEM_N"
export const DECREASE_QUANTITY = "DECREASE_QUANTITY"
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
export const incrementQuantity=()=>({
  type:INCREMENT_QUANTITY,
})  
export const decreaseQuantity=()=>({
  type:DECREASE_QUANTITY,
})  
export const addItemN =(item)=>({
  type: ADD_ITEM_N,
  payload:item,
})