import { combineReducers } from "redux";
import { modalReducer } from "../Modal/modalReducer";
import { shopDesktopReducer } from "../ShopModal/shopDesktopReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  shopD: shopDesktopReducer,
});

export default rootReducer;
