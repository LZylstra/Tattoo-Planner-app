import React, { Component } from "react";
import { Button, Input } from "../../utils/utils";

export default class EventForm extends Component {
  state = { error: null };

  handleSubmitEvent = ev => {
    console.log("handle submit event");
  };
  render() {
    const { error } = this.state;
    return (
      <div id="add-event" title="Add Event">
        <form className="add-event-form" onSubmit={this.handleSubmitEvent}>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <div className="event-title-add">
            <label htmlFor="eventAddForm_title">Title For Event</label>
            <Input
              required
              name="event_title-add"
              id="eventAddForm_title"
            ></Input>
          </div>
          <div className="event-client-add">
            <label htmlFor="eventAddForm_tattoo">Client</label>
            <Input
              required
              name="event_client-add"
              id="eventEditForm_client"
            ></Input>
          </div>
          <div className="event-start-add">
            <label htmlFor="eventAddForm_start">Start Time</label>
            <Input
              required
              name="event_start-add"
              id="eventEditForm_start"
            ></Input>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}
