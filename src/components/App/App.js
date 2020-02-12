import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Header from "../Header/Header";

function App() {
  return (
    <main className="App">
      <div className="App">
        <header className="App_header">
          <Header />
        </header>
        <main className="App_main">
          <Route exact path={"/"} component={LandingPage} />
        </main>
      </div>
    </main>
  );
}

export default App;
