import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Greetings from "./components/Greetings.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Greetings name="Test" />
    <Greetings name="Halo saya ainun" />
    <Greetings name="Aninun teman saya" />
  </React.StrictMode>
);
