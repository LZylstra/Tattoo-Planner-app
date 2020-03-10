import React, { Component } from "react";

const AllContext = React.createContext({
  user: null,
  ClientList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  clearUser: () => {},
  setClientList: () => {}
});
export default AllContext;

export class AllProvider extends Component {
  state = {
    user: null,
    ClientList: [],
    error: null
  };

  setUser = user => {
    this.setState({ user });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  clearUser = () => {
    this.setUser(null);
  };

  setClientList = clientList => {
    this.setState({ clientList });
  };
  render() {
    const valueData = {
      user: this.state.user,
      clientList: this.state.clientList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      clearUser: this.clearUser,
      setClientList: this.setClientList
    };
    return (
      <AllContext.Provider value={valueData}>
        {this.props.children}
      </AllContext.Provider>
    );
  }
}
