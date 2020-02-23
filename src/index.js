import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faStar as fasStar,
  faHeart as fasHeart
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farStar,
  faHeart as farHeart
} from "@fortawesome/free-regular-svg-icons";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import { ClientProvider } from "./contexts/ClientContext";
import { ClientListProvider } from "./contexts/ClientListContext";
import { TattooListProvider } from "./contexts/TattooListContext";
import { TattoosProvider } from "./contexts/TattooContext";
import "./index.css";

library.add(faPlus, farStar, fasStar, fasHeart, farHeart);

ReactDOM.render(
  <BrowserRouter>
    <ClientListProvider>
      <ClientProvider>
        <TattooListProvider>
          <TattoosProvider>
            <App />
          </TattoosProvider>
        </TattooListProvider>
      </ClientProvider>
    </ClientListProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
