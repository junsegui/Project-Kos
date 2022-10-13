import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./Styles/GlobalStyles/GlobalStyles";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";
import ScrollToTop from "./Components/Routes/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop/>
        <GlobalStyles />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
