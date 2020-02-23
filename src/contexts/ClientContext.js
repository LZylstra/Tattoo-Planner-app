import React, { Component } from "react";

export const nullClient = {
  clients: {}
};

export const nullTattoo = {
  tattoos: {}
};

const ClientContext = React.createContext({
  client: nullClient,
  tattoos: nullTattoo,
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
    tattoos: nullTattoo,
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
    //console.log({ tattoo });
    this.setState({ tattoo });
    //  console.log(this.state.tattoo);
  };

  addClientTattoo = tattoo => {
    this.setTattoos([...this.state.tattoos, tattoo]);
  };

  render() {
    const valueData = {
      client: this.state.client,
      tattoos: this.state.tattoo,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setClient: this.setClient,
      clearClient: this.clearClient,
      setClientTattoos: this.setClientTattoos,
      addClientTattoo: this.addClientTattoo
    };
    return (
      <ClientContext.Provider value={valueData}>
        {this.props.children}
      </ClientContext.Provider>
    );
  }
}