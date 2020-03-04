import React, { Component } from "react";

export const nullTattoo = {
  tattoo: {}
};

export const nullClient = {
  client: {}
};

const TattooContext = React.createContext({
  tattoo: nullTattoo,
  client: nullClient,
  allClients: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTattoos: () => {},
  clearTattoos: () => {},
  setTattoosClient: () => {},
  clearTattoosClient: () => {},
  setAllClients: () => {},
  addTattoo: () => {},
  onDeleteTattoo: () => {}
});

export default TattooContext;

export class TattoosProvider extends Component {
  state = {
    tattoo: nullTattoo,
    client: nullClient,
    allClients: [],
    error: null
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setTattoo = tattoo => {
    this.setState({ tattoo });
  };

  clearTattoos = () => {
    this.setTattoo(nullTattoo);
  };

  setTattoosClient = client => {
    this.setState({ client });
  };

  clearTattoosClient = () => {
    this.setTattoosClient(nullClient);
  };

  setAllClients = allClients => {
    this.setState({ allClients });
  };

  addTattoo = tattoo => {
    this.setTattoo([...this.state.tattoo, tattoo]);
  };

  onDeleteTattoo() {
    this.clearTattoos();
  }
  render() {
    const valueData = {
      tattoo: this.state.tattoo,
      client: this.state.client,
      allClients: this.state.allClients,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTattoo: this.setTattoo,
      clearTattoos: this.clearTattoos,
      setTattoosClient: this.setTattoosClient,
      clearTattoosClient: this.clearTattoosClient,
      setAllClients: this.setAllClients,
      addTattoo: this.addTattoo,
      onDeleteTattoo: this.onDeleteTattoo
    };
    return (
      <TattooContext.Provider value={valueData}>
        {this.props.children}
      </TattooContext.Provider>
    );
  }
}
