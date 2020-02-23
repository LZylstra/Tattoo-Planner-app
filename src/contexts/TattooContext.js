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
  error: null,
  setError: () => {},
  clearError: () => {},
  setTattoos: () => {},
  clearTattoos: () => {},
  setTattoosClient: () => {},
  clearTattoosClient: () => {}
});

export default TattooContext;

export class TattoosProvider extends Component {
  state = {
    tattoo: nullTattoo,
    client: nullClient,
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
    // console.log(this.state.tattoo);
  };

  clearTattoo = () => {
    this.setTattoo(nullTattoo);
  };

  setTattoosClient = client => {
    //console.log({ tattoo });
    this.setState({ client });
    // console.log(this.state.client);
  };

  clearTattoosClient = () => {
    this.setTattoosClient(nullClient);
  };
  //   addClientTattoo = tattoo => {
  //     this.setTattoos([...this.state.tattoos, tattoo]);
  //   };

  render() {
    const valueData = {
      tattoo: this.state.tattoo,
      client: this.state.client,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTattoo: this.setTattoo,
      clearTattoo: this.clearTattoo,
      setTattoosClient: this.setTattoosClient,
      clearTattoosClient: this.clearTattoosClient
    };
    return (
      <TattooContext.Provider value={valueData}>
        {this.props.children}
      </TattooContext.Provider>
    );
  }
}
