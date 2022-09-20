import { createStore } from "redux";
import rootReducer from "../RootReducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools()
);
