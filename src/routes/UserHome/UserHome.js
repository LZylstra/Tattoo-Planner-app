import React, { Component } from "react";
import Icon from "../../components/Icon/Icon";
import financialIcon from "../../img/financial-icon.png";
import clientIcon from "../../img/client-icon.png";
import tattooIcon from "../../img/tattoo-icon.png";
import EventApiService from "../../services/event-api-service";
import EventContext from "../../contexts/EventContext";
import ClientApiService from "../../services/client-api-service";
//import calendarPlaceholder from "../../img/calendar-placeholder.png";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Link, withRouter } from "react-router-dom";
import { Button, Input, Textarea } from "../../utils/utils";
import Modal from "react-modal";
import Select from "react-select";
import "./UserHome.css";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
//import { Calendar } from "@fullcalendar/core";
Modal.setAppElement(document.getElementById("root"));

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)"
//   }
// };
const customStyles = {
  // control: (base, state) => ({
  //   ...base,
  //   background: "#023950",
  //   // match with the menu
  //   borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
  //   // Overwrittes the different states of border
  //   borderColor: state.isFocused ? "yellow" : "green",
  //   // Removes weird border around container
  //   boxShadow: state.isFocused ? null : null,
  //   "&:hover": {
  //     // Overwrittes the different states of border
  //     borderColor: state.isFocused ? "red" : "blue"
  //   }
  // }),
  menu: base => ({
    ...base,
    //   // override border radius to match the box
    //   borderRadius: 0,
    //   // kill the gap
    marginTop: 0,
    height: "fit-content"
  }),
  menuList: () => ({
    // ...base,
    // kill the white space on first and last option
    padding: 5,
    height: "fit-content"
  }),
  option: base => ({
    ...base,
    height: "50px",
    color: "black"
  }),
  control: base => ({
    ...base,
    color: "black"
  }),
  singleValue: base => ({
    ...base,
    color: "black"
  })
};
class UserHome extends Component {
  calendarComponentRef = React.createRef();
  constructor() {
    super();
    this.state = {
      //error: null,
      calendarWeekends: true,
      eventList: [],
      modalIsOpen: false,
      dateClicked: null,
      clientId: null,
      tattooList: []
    };
    this.setDateClicked = this.setDateClicked.bind(this);
    this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
    this.handleDateClick = this.handleDateClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  static contextType = EventContext;
  setClientId(id) {
    this.setState({ clientId: id });
  }
  setTattooList(tattoos) {
    this.setState({ tattooList: tattoos });
  }

  setDateClicked(date) {
    this.setState({ dateClicked: date });
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    //  this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  saveEvents(event) {
    // const newList = this.modifyEventList(event);
    this.setState({ eventList: event });
    // console.log(`goes here ${this.state.calendarEvents}`);
  }

  componentDidMount() {
    this.context.clearError();
    EventApiService.getEvents()
      .then(this.context.setEventList)
      .then(() => {
        let eventList = this.context.eventList;
        this.saveEvents(this.modifyEventList(eventList));
      })
      .catch(this.context.setError);

    ClientApiService.getClients()
      .then(this.context.setClientList)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearEvent();
  }
  handleDateClick = arg => {
    this.setDateClicked(arg.dateStr);
    console.log(this.state.dateClicked);

    this.openModal();

    //console.log("goes in date clicked");
    // console.log(`date clicked: ${arg.dateStr}`);
    //this.setDateClicked(true);

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
  // getTattoos() {
  //   console.log("goes in here");
  //   let cid = this.state.clientId;
  //   ClientApiService.getClientTattoos(cid).then(this.context.setTattooList);
  // }
  handleSubmitEvent = e => {
    e.preventDefault();
    const clientId = e.target["client-id"].value;
    this.setClientId(clientId);

    //console.log(this.state.tattooList);
    const newEvent = {
      title: e.target["event_title-add"].value,
      // description: e.target['event_desc-add'].value,
      eventdate: this.state.dateClicked,
      start_time: e.target["event_start-add"].value,
      // end_time,
      in_person: true,
      curr_status: "New",
      all_day: true,
      tattoo: 1 //not currently getting the tattoo id from input !! NEED TO FIX
    };
    console.log(newEvent);

    EventApiService.postEvent(newEvent)
      .then(this.context.addEvent)
      .then(event => {
        let eventList = this.context.eventList;
        this.saveEvents(this.modifyEventList(eventList));
        // console.log(this.state.eventList);
      })
      .then(this.closeModal());
  };

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
    let newList = [];
    for (let i = 0; i < oldList.length; i++) {
      let newObj = {
        title: oldList[i].title,
        start: oldList[i].eventdate
      };

      newList.push(newObj);
    }
    //  console.log(newList);
    return newList;
  }

  selectTattoo() {
    let tattoos = this.state.tattooList;
    let content = tattoos.map(tattoo => (
      <option key={tattoo.id} value={tattoo.id}>
        {tattoo.title}
      </option>
    ));

    return content;
  }
  render() {
    const { clientList = [] } = this.context;
    //  console.log(clientList);
    let clientDropDown;
    if (clientList === undefined) {
      console.log("loading");
    } else {
      clientDropDown = clientList.map(client => (
        <option key={client.id} value={client.id}>
          {client.full_name}
        </option>
      ));

      //react-select
      // clientDropDown = clientList.map(client => [
      //   { label: `${client.full_name}`, value: `${client.id}` }
      // ]);
    }
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
            <div className="event-details">
              <h4>Events</h4>
              {/* {eventContent} */}
              <button onClick={this.openModal}>Create Event</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                //style={customStyles}
                contentLabel="Add Event Modal"
                className="Modal"
                overlayClassName="Overlay"
              >
                {/* <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2> */}

                <div id="add-event" title="Add Event">
                  <form
                    className="add-event-form"
                    onSubmit={this.handleSubmitEvent}
                  >
                    <label htmlFor="eventAddForm_title">Title For Event</label>
                    <Input
                      required
                      name="event_title-add"
                      id="eventAddForm_title"
                    ></Input>

                    <label htmlFor="eventAddFormclient">Client</label>
                    <select id="client-select" name="client-id" required>
                      <option value="">Select a Client...</option>
                      {clientDropDown}
                    </select>
                    {/* <Select
                      className="react-dropdown-style"
                      options={clientDropDown}
                      styles={customStyles}
                      onChange={this.getTattoos}
                    /> */}

                    {/* <label htmlFor="eventAddForm_tattoo">Tattoo</label>
                    <select
                      id="tattoo-select"
                      name="tattoo-id"
                      //onChange={this.getTattoos}
                      required
                    >
                      <option value="">Select a Tattoo...</option>
                      {this.selectTattoo()}
                    </select> */}

                    <label htmlFor="eventAddForm_start">Start Time</label>
                    <Input
                      type="time"
                      required
                      name="event_start-add"
                      id="eventEditForm_start"
                    ></Input>

                    <Button className="modal-btn" onClick={this.closeModal}>
                      Close
                    </Button>
                    <Button className="modal-btn" type="submit">
                      Submit
                    </Button>
                  </form>
                </div>
              </Modal>
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
