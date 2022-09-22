import { combineReducers } from "redux";
import { itemReducer } from "../Items/itemsReducer";
import { modalReducer } from "../Modal/modalReducer";
import { shopDesktopReducer } from "../ShopModal/shopDesktopReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  shopD: shopDesktopReducer,
  itemReducer:itemReducer,
});

export default rootReducer;
