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
import ClientForm from "../../components/ClientForm/ClientForm";
import TattooForm from "../../components/TattooForm/TattooFrom";
import Login from "../../routes/Login/Login";
import Registration from "../../routes/Registration/Registration";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      isLoggedIn: false
    };
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  updateLogin = loggedIn => {
    this.setState({
      isLoggedIn: loggedIn
    });
  };

  render() {
    return (
      <main className="App">
        <div className="App">
          <header className="App_header">
            <Header />
          </header>
          <main className="App_main">
            {this.state.hasError && <p className="red">There was an error!</p>}
            <Switch>
              <Route exact path={"/"} component={LandingPage} />
              <PublicOnlyRoute exact path={"/login"} component={Login} />
              {/* <PublicOnlyRoute
                path={"/login"}
                render={props => (
                  <Login {...props} updateLogin={this.updateLogin} />
                )}
              /> */}
              <PublicOnlyRoute
                exact
                path={"/register"}
                component={Registration}
              />
              <PrivateRoute exact path={"/home"} component={UserHome} />
              <PrivateRoute exact path={"/tattoos"} component={TattooList} />
              <PrivateRoute exact path={"/tattoos/:id"} component={Tattoo} />
              <PrivateRoute exact path={"/add-tattoo"} component={TattooForm} />
              <PrivateRoute exact path={"/clients"} component={ClientList} />
              <PrivateRoute path={"/clients/:id"} component={Client} />
              <PrivateRoute exact path={"/add-client"} component={ClientForm} />
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
