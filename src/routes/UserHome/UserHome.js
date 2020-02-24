import React, { Component } from "react";
import Icon from "../../components/Icon/Icon";
import financialIcon from "../../img/financial-icon.png";
import clientIcon from "../../img/client-icon.png";
import tattooIcon from "../../img/tattoo-icon.png";
import EventApiService from "../../services/event-api-service";
import EventContext from "../../contexts/EventContext";
//import calendarPlaceholder from "../../img/calendar-placeholder.png";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Link } from "react-router-dom";
import { Button, Input, Textarea } from "../../utils/utils";
import "./UserHome.css";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { Calendar } from "@fullcalendar/core";

class UserHome extends Component {
  calendarComponentRef = React.createRef();

  state = {
    //error: null,
    calendarWeekends: true,
    eventList: [],
    dateClicked: false
  };

  static contextType = EventContext;

  saveEvents(event) {
    // const newList = this.modifyEventList(event);
    this.setState({ eventList: event });
    // console.log(`goes here ${this.state.calendarEvents}`);
  }

  setDateClicked(option) {
    this.setState(option);
  }
  componentDidMount() {
    EventApiService.getEvents()
      .then(this.context.setEventList)
      .then(() => {
        let eventList = this.context.eventList;
        this.saveEvents(this.modifyEventList(eventList));
      })
      .catch(this.context.setError);
  }

  handleDateClick = arg => {
    //console.log("goes in date clicked");
    console.log(`date clicked: ${arg.dateStr}`);
    this.setDateClicked(true);

    //this.renderAddEvent();
    //if there is no event open the create event modal
    //if there is events is there a way to click just them? i listener for that?

    // if (alert("Would you like to add an event to " + arg.dateStr + " ?")) {
    //   this.setState({
    //     // add new event data
    //     calendarEvents: this.state.calendarEvents.concat({
    //       // creates a new array
    //       title: "New Event",
    //       start: arg.date,
    //       allDay: arg.allDay
    //     })
    //   });
  };

  handleSubmitEvent(e) {
    e.preventDefault();
    console.log(e);
  }

  renderAddEvent() {
    const { error } = this.context;
    //this is the modal to edit events
    //would like to have drop down of clients and then once a client is selected
    // a drop down of tattoos
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

  renderViewEventDetails() {
    //use the url function of this api to display different things based on what's been clicked
    const { event } = this.context;
    // return eventList.map(event => (
    //   <div></div>
    // ));

    // return (
    //   <div className="event-details">
    //     <h4>{content}</h4>
    //   </div>
    // );
  }

  modifyEventList(oldList) {
    //  console.log(oldList);
    let newList = [];
    // console.log("modify event list");
    //console.log(oldList.length);
    for (let i = 0; i < oldList.length; i++) {
      // console.log(oldList[i].eventdate);
      //console.log(oldList[i].eventdate);
      // let timeFormat = oldList[i].eventdate;
      // console.log(timeFormat);
      let newObj = {
        title: oldList[i].title,
        start: oldList[i].eventdate
      };

      newList.push(newObj);
    }
    //  console.log(newList);
    return newList;
  }

  render() {
    // const currentList = this.state.eventList;
    // console.log(currentList);
    // const eventContent;
    // if(this.state.dateClicked){
    //   eventContent = this.renderAddEvent
    //   this.setDateClicked(false)
    // }
    return (
      <div className="home">
        <div className="calendar-section">
          <div className="calendar">
            <FullCalendar
              defaultView="dayGridMonth"
              header={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
              }}
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin
              ]}
              ref={this.calendarComponentRef}
              events={this.state.eventList}
              dateClick={this.handleDateClick}
              selectable={true}
              editable={true}
              eventLimit={true} // when too many events in a day, show the popover
              selectMirror={true}
              unselectAuto={true}
              weekends={true}
              eventRender={this.eventRender}
            />
            <div className="details">
              <h4>Events</h4>
              {/* {eventContent} */}
            </div>
          </div>
        </div>
        <div className="icon-row">
          <Link to="/clients">
            <Icon title="Clients" picture={clientIcon} />
          </Link>
          <Link to="/ledger">
            <Icon title="Ledger" picture={financialIcon} />
          </Link>
          <Link to="/tattoos">
            <Icon title="Tattoos" picture={tattooIcon} />
          </Link>
        </div>
      </div>
    );
  }
}

export default UserHome;
