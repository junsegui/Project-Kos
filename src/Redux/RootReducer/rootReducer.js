import { combineReducers } from "redux";
import { bagReducer } from "../Bag/bagReducer";
import { itemReducer } from "../Items/itemsReducer";
import { modalReducer } from "../Modal/modalReducer";
import { shopDesktopReducer } from "../ShopModal/shopDesktopReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  shopD: shopDesktopReducer,
  items:itemReducer,
  bag:bagReducer,
});

export default rootReducer;
