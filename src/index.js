import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faTrashAlt,
  faCaretDown,
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
import { EventProvider } from "./contexts/EventContext";
import "./index.css";

library.add(
  faPlus,
  farStar,
  fasStar,
  fasHeart,
  farHeart,
  faTrashAlt,
  faCaretDown
);

ReactDOM.render(
  <BrowserRouter>
    <EventProvider>
      <ClientListProvider>
        <ClientProvider>
          <TattooListProvider>
            <TattoosProvider>
              <App />
            </TattoosProvider>
          </TattooListProvider>
        </ClientProvider>
      </ClientListProvider>
    </EventProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
