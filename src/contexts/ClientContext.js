import React, { Component } from "react";

export const nullClient = {
  clients: {},
  tattoos: []
};

const ClientContext = React.createContext({
  client: nullClient,
  tattoos: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setClient: () => {},
  clearClient: () => {},
  setClientsTattoos: () => {},
  addClientTattoos: () => {}
});

export default ClientContext;

export class ClientProvider extends Component {
  state = {
    client: nullClient,
    tattoos: null,
    error: null
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setClient = client => {
    this.setState({ client });
  };

  clearClient = () => {
    this.setClient(nullClient);
  };

  setClientTattoos = tattoo => {
    // console.log({ tattoo });
    this.setState({ tattoo });
  };

  addClientTattoo = tattoo => {
    this.setTattoos([...this.state.tattoos, tattoo]);
  };

  render() {
    const value = {
      client: this.state.client,
      tattoos: this.state.tattoos,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setClient: this.setClient,
      clearClient: this.clearClient,
      setClientTattoos: this.setClientTattoos,
      addClientTattoo: this.addClientTattoo
    };
    return (
      <ClientContext.Provider value={value}>
        {this.props.children}
      </ClientContext.Provider>
    );
  }
}
