import React, { Component } from "react";

export const nullEvent = {
  event: {}
};

const EventContext = React.createContext({
  event: nullEvent,
  eventList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setEvent: () => {},
  clearEvent: () => {},
  setEventList: () => {},
  addEvent: () => {}
});

export default EventContext;

export class EventProvider extends Component {
  state = {
    event: nullEvent,
    eventList: [],
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
    // console.log(this.state.eventList);
  };

  addEvent = event => {
    this.setEventList([...this.state.eventList, event]);
  };

  render() {
    const valueData = {
      event: this.state.event,
      eventList: this.state.eventList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setEvent: this.setEvent,
      clearEvent: this.clearEvent,
      setEventList: this.setEventList,
      addEvent: this.addEvent
    };
    return (
      <EventContext.Provider value={valueData}>
        {this.props.children}
      </EventContext.Provider>
    );
  }
}
