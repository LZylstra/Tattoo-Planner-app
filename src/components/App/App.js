import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../../routes/LandingPage/LandingPage";
import Client from "../../routes/Client/Client";
import ClientList from "../../routes/ClientList/ClientList";
import Tattoo from "../../routes/Tattoo/Tattoo";
import TattooList from "../../routes/TattooList/TattooList";
import UserHome from "../../routes/UserHome/UserHome";
import PageNotFound from "../../routes/PageNotFound/PageNotFound";
import Header from "../Header/Header";
import "./App.css";

function App() {
  return (
    <main className="App">
      <div className="App">
        <header className="App_header">
          <Header />
        </header>
        <main className="App_main">
          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            <Route exact path={"/home"} component={UserHome} />
            <Route exact path={"/tattoo-list"} component={TattooList} />
            <Route exact path={"/tattoo"} component={Tattoo} />
            <Route exact path={"/client-list"} component={ClientList} />
            <Route exact path={"/client"} component={Client} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
      </div>
    </main>
  );
}

export default App;
