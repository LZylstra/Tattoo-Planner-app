import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import { ClientProvider } from "./contexts/ClientContext";
import { ClientListProvider } from "./contexts/ClientListContext";
import "./index.css";

library.add(faPlus, farStar, fasStar);

ReactDOM.render(
  <BrowserRouter>
    <ClientListProvider>
      <ClientProvider>
        <App />
      </ClientProvider>
    </ClientListProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
