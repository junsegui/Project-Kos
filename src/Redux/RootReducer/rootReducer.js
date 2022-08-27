import { combineReducers } from "redux";
import { modalReducer } from "../Modal/modalReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
});

export default rootReducer;
