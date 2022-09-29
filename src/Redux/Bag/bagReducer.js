import { ADD_ITEM, ADD_ITEM_N, DECREASE_QUANTITY, DELETE_ITEM, INCREMENT_QUANTITY, TOOGGLE_CART } from "./actionBag";
import { addItemCart, addItemCartB, deleteItemCart } from "./bagUtils";

const INITIAL_STATE = {
  items: [],
  visible: false,
  counter:0,
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
        items: addItemCart(state.items, payload),
      };
    case DELETE_ITEM: {
      return {
        ...state,
        items: deleteItemCart(state.items, payload),
      };
    }
    case INCREMENT_QUANTITY:
      return {
        ...state,
        counter: state.counter += 1,
      }
      case DECREASE_QUANTITY:
        return {
          ...state,
          counter: state.counter > 1 ? state.counter -= 1 : state.counter = 1
        }
      case ADD_ITEM_N:
        return{
          ...state,
          items: addItemCartB(state.items,payload,state.counter)
        }
    default:
      return state;
  }
};
