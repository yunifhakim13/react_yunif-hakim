import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import CreateProduct from "./Components/CreateProduct/CreateProduct.jsx";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Link,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    {/* <CreateProduct /> */}
    {/* <LandingPage /> */}
  </BrowserRouter>
);
