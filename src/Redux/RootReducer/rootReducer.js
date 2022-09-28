import { combineReducers } from "redux";
import { bagReducer } from "../Bag/bagReducer";
import { categoriesReducer } from "../Categories/categoriesReducer";
import { itemReducer } from "../Items/itemsReducer";
import { loginReducer } from "../Login/loginReducer";
import { modalReducer } from "../Modal/modalReducer";
import { shopDesktopReducer } from "../ShopModal/shopDesktopReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  shopD: shopDesktopReducer,
  items: itemReducer,
  bag: bagReducer,
  categorie: categoriesReducer,
  login:loginReducer,
});

export default rootReducer;
