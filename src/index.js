import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faSpinner,
  faTrashAlt,
  faTimesCircle,
  faWindowClose,
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
import { AllProvider } from "./contexts/AllContext";

library.add(
  faPlus,
  faSpinner,
  faWindowClose,
  faTimesCircle,
  farStar,
  fasStar,
  fasHeart,
  farHeart,
  faTrashAlt,
  faCaretDown
);

ReactDOM.render(
  <BrowserRouter>
    <AllProvider>
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
    </AllProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
