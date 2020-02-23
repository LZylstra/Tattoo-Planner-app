import React, { Component } from "react";

const HeaderContext = React.createContext({
  loggedIn: false
});

export default HeaderContext;

export class HeaderProvider extends Component {
  state = {
    loggedIn: false
  };

  setLoggedIn = () => {
    this.setState({ LoggedIn: true });
  };

  clearLoggedIn = () => {
    this.setState({ LoggedIn: false });
  };

  render() {
    const valueData = {
      loggedIn: this.state.loggedIn,
      setLoggedIn: this.setLoggedIn,
      clearLoggedIn: this.clearLoggedIn
    };
    return (
      <HeaderContext.Provider value={valueData}>
        {this.props.children}
      </HeaderContext.Provider>
    );
  }
}
