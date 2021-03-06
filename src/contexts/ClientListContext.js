import React, { Component } from "react";

const ClientListContext = React.createContext({
  ClientList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setClientList: () => {}
});
export default ClientListContext;

export class ClientListProvider extends Component {
  state = {
    ClientList: [],
    error: null
  };

  setClientList = clientList => {
    this.setState({ clientList });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };
  addClient = client => {
    this.setClientList([...this.state.ClientList, client]);
  };

  render() {
    const value = {
      clientList: this.state.clientList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setClientList: this.setClientList,
      addClient: this.addClient
    };
    return (
      <ClientListContext.Provider value={value}>
        {this.props.children}
      </ClientListContext.Provider>
    );
  }
}
