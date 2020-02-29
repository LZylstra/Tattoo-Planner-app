import React, { Component } from "react";

export const nullEvent = {
  event: {}
};

const EventContext = React.createContext({
  event: nullEvent,
  eventList: [],
  clientList: [],
  tattooList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setEvent: () => {},
  clearEvent: () => {},
  setEventList: () => {},
  addEvent: () => {},
  setClientList: () => {},
  setTattooList: () => {}
});

export default EventContext;

export class EventProvider extends Component {
  state = {
    event: nullEvent,
    eventList: [],
    clientList: [],
    tattooList: [],
    error: null
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setEvent = event => {
    this.setState({ event });
  };

  clearEvent = () => {
    this.setEvent(nullEvent);
  };

  setEventList = eventList => {
    this.setState({ eventList });
  };

  addEvent = event => {
    this.setEventList([...this.state.eventList, event]);
  };

  setClientList = clientList => {
    this.setState({ clientList });
  };

  setTattooList = tattooList => {
    this.setState({ tattooList });
  };

  render() {
    const valueData = {
      event: this.state.event,
      eventList: this.state.eventList,
      clientList: this.state.clientList,
      tattooList: this.state.tattooList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setEvent: this.setEvent,
      clearEvent: this.clearEvent,
      setEventList: this.setEventList,
      addEvent: this.addEvent,
      setClientList: this.setClientList,
      setTattooList: this.setTattooList
    };
    return (
      <EventContext.Provider value={valueData}>
        {this.props.children}
      </EventContext.Provider>
    );
  }
}
