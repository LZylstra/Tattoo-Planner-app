import React, { Component } from "react";

export const nullTattoo = {
  tattoos: {}
};

const TattooContext = React.createContext({
  client: nullTattoo,
  error: null,
  setError: () => {},
  clearError: () => {},
  setTattoos: () => {},
  clearTattoos: () => {}
  //   setClientsTattoos: () => {},
  //   addClientTattoos: () => {}
});

export default TattooContext;

export class TattoosProvider extends Component {
  state = {
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

  setTattoo = tattoo => {
    this.setState({ tattoo });
  };

  clearTattoo = () => {
    this.setTattoo(nullTattoo);
  };

  //   setClientTattoos = tattoo => {
  //     //console.log({ tattoo });
  //     this.setState({ tattoo });
  //     console.log(this.state.tattoo);
  //   };

  //   addClientTattoo = tattoo => {
  //     this.setTattoos([...this.state.tattoos, tattoo]);
  //   };

  render() {
    const value = {
      tattoos: this.state.tattoos,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTattoo: this.setTattoo,
      clearTattoo: this.clearTattoo
    };
    return (
      <TattooContext.Provider value={value}>
        {this.props.children}
      </TattooContext.Provider>
    );
  }
}
