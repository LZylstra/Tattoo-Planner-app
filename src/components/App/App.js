import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../../routes/LandingPage/LandingPage";
import Client from "../../routes/Client/Client";
import ClientList from "../../routes/ClientList/ClientList";
import Tattoo from "../../routes/Tattoo/Tattoo";
import TattooList from "../../routes/TattooList/TattooList";
import UserHome from "../../routes/UserHome/UserHome";
import PageNotFound from "../../routes/PageNotFound/PageNotFound";
import Ledger from "../../routes/Ledger/Ledger";
import Header from "../Header/Header";
import PrivateRoute from "../../utils/PrivateRoute";
import PublicOnlyRoute from "../../utils/PublicOnlyRoute";
import Login from "../../routes/Login/Login";
import Registration from "../../routes/Registration/Registration";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="App">
        <div className="App">
          <header className="App_header">
            <Header />
          </header>
          <main className="App_main">
            <Switch>
              <Route exact path={"/"} component={LandingPage} />
              <PublicOnlyRoute path={"/login"} component={Login} />
              <PublicOnlyRoute path={"/register"} component={Registration} />
              <PrivateRoute exact path={"/home"} component={UserHome} />
              <PrivateRoute
                exact
                path={"/tattoo-list"}
                component={TattooList}
              />
              <PrivateRoute exact path={"/tattoo"} component={Tattoo} />
              <PrivateRoute
                exact
                path={"/client-list"}
                component={ClientList}
              />
              <PrivateRoute exact path={"/client"} component={Client} />
              <PrivateRoute exact path={"/ledger"} component={Ledger} />
              <Route component={PageNotFound} />
            </Switch>
          </main>
        </div>
      </main>
    );
  }
}

export default App;
