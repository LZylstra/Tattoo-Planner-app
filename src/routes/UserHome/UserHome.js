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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import Modal from "react-modal";
import Select from "react-select";
import "./UserHome.css";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { EventApi } from "@fullcalendar/core";
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
      view: null,
      event: null,
      eventTitle: null,
      eventList: [],
      modalIsOpen: false,
      dateClicked: null,
      clientId: null,
      tattooList: []
    };

    this.setEventTitle = this.setEventTitle.bind(this);
    this.setEvent = this.setEvent.bind(this);
    this.handleEventClick = this.handleEventClick.bind(this);
    this.setView = this.setView.bind(this);
    this.setDateClicked = this.setDateClicked.bind(this);
    this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
    this.handleDateClick = this.handleDateClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  static contextType = EventContext;

  setEventTitle(title) {
    this.setState({ eventTitle: title });
  }
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
    this.setView(null);
  }

  saveEvents(event) {
    // const newList = this.modifyEventList(event);
    this.setState({ eventList: event });
    // console.log(`goes here ${this.state.calendarEvents}`);
  }

  setEvent = event => {
    this.setState({ event: event });
  };
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

  setView = option => {
    this.setState({ view: option });
  };

  componentWillUnmount() {
    this.context.clearEvent();
  }

  handleDeleteEvent = e => {
    e.preventDefault();
    let eventId = this.state.event.id;
    //console.log("delete");
    //console.log(eventId);

    EventApiService.deleteEvent(eventId);

    this.closeModal();
    this.props.history.go(0);
  };

  handleDateClick = arg => {
    this.setDateClicked(arg.dateStr);
    this.setView("add");
    // console.log(this.state.dateClicked);

    this.openModal();
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

    const newEvent = {
      title: e.target["event_title-add"].value,
      description: e.target["event_desc-add"].value,
      eventdate: this.state.dateClicked,
      start_time: e.target["event_start-add"].value,
      // end_time,
      in_person: true,
      curr_status: "New",
      all_day: true,
      tattoo: 1 //not currently getting the tattoo id from input !! NEED TO FIX
    };
    //  console.log(newEvent);

    EventApiService.postEvent(newEvent)
      .then(this.context.addEvent)
      .then(event => {
        let eventList = this.context.eventList;
        this.saveEvents(this.modifyEventList(eventList));
        // console.log(this.state.eventList);
      })
      .then(this.closeModal());
  };

  //this is the modal to edit events
  //would like to have drop down of clients and then once a client is selected
  // a drop down of tattoos
  renderAddEvent() {
    const { error } = this.context;
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
    }

    //react-select
    // clientDropDown = clientList.map(client => [
    //   { label: `${client.full_name}`, value: `${client.id}` }
    // ]);

    return (
      <div id="add-event" title="Add Event">
        <form className="add-event-form" onSubmit={this.handleSubmitEvent}>
          <Button className="close-btn" onClick={this.closeModal}>
            <FontAwesomeIcon className="close-btn-font" icon="times-circle" />
          </Button>
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
          <label htmlFor="eventAddForm_desc">Description</label>
          <Textarea name="event_desc-add"></Textarea>
          <Button className="submit-btn" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }

  renderViewEventDetails() {
    //use the url function of this api to display different things based on what's been clicked
    //const { event } = this.context;
    // const { clientList = [], eventList = [] } = this.context;
    // //sconsole.log(eventList);
    // let clickedEventTitle = this.state.event;
    // let clickedEvent;
    // // console.log(this.state.event);
    // // if (eventList === undefined) {
    // //   console.log("loading");
    // // } else {
    // for (let i = 0; i < eventList.length; i++) {
    //   if (eventList[i].title === clickedEventTitle) {
    //     clickedEvent = eventList[i];
    //     this.context.setEvent(clickedEvent);
    //     break;
    //   }
    // }
    // }
    let clickedEvent = this.state.event;
    console.log(clickedEvent);
    //console.log(this.state.eventId);
    if (clickedEvent === null) {
      console.log("loading");
    } else {
      //this.setEventId(clickedEvent.id);
      // console.log(this.state.eventId);
      //this.context.setEvent(clickedEvent);
      return (
        <div className="event-details">
          <Button className="close-btn" onClick={this.closeModal}>
            <FontAwesomeIcon className="close-btn-font" icon="times-circle" />
          </Button>
          <h3>{clickedEvent.title}</h3>
          <p>{clickedEvent.start_time}</p>
          <p className="event-info-display">{clickedEvent.description}</p>
          <Button className="event-delete" onClick={this.handleDeleteEvent}>
            <FontAwesomeIcon icon="trash-alt" />
          </Button>
        </div>
      );
    }
  }

  modifyEventList(oldList) {
    let newList = [];
    for (let i = 0; i < oldList.length; i++) {
      // console.log(oldList[i].eventdate);
      let newObj = {
        title: oldList[i].title,
        start: oldList[i].eventdate
      };

      newList.push(newObj);
    }
    //  console.log(newList);
    return newList;
  }

  handleEventClick(info) {
    // console.log("event clicked");
    // console.log(info.event.url);
    if (info.event.title) {
      this.setView("edit");
      this.setEventTitle(info.event.title);
    }
    const { eventList = [] } = this.context;
    //sconsole.log(eventList);
    let clickedEventTitle = this.state.eventTitle;
    let clickedEvent;
    // console.log(this.state.event);
    // if (eventList === undefined) {
    //   console.log("loading");
    // } else {
    for (let i = 0; i < eventList.length; i++) {
      if (eventList[i].title === clickedEventTitle) {
        clickedEvent = eventList[i];
        this.setEvent(clickedEvent);
        // console.log(this.state.setEvent);
        break;
      }
    }
    this.openModal();
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
    // const { clientList = [] } = this.context;
    // //  console.log(clientList);
    // let clientDropDown;
    // if (clientList === undefined) {
    //   console.log("loading");
    // } else {
    //   clientDropDown = clientList.map(client => (
    //     <option key={client.id} value={client.id}>
    //       {client.full_name}
    //     </option>
    //   ));

    //react-select
    // clientDropDown = clientList.map(client => [
    //   { label: `${client.full_name}`, value: `${client.id}` }
    // ]);
    //}
    // const currentList = this.state.eventList;
    // console.log(currentList);
    // const eventContent;
    // if(this.state.dateClicked){
    //   eventContent = this.renderAddEvent
    //   this.setDateClicked(false)
    // }
    let content;
    if (this.state.view === "add") {
      content = this.renderAddEvent();
    } else if (this.state.view === "edit") {
      content = this.renderViewEventDetails();
    }
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
              eventClick={this.handleEventClick}
              editable={true}
              eventLimit={true} // when too many events in a day, show the popover
              selectMirror={true}
              unselectAuto={true}
              weekends={true}
              eventRender={this.eventRender}
            />
            <div>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                //style={customStyles}
                contentLabel="Add Event Modal"
                className="Modal"
                overlayClassName="Overlay"
              >
                {content}
              </Modal>
            </div>
          </div>
        </div>
        <div className="icon-row">
          <Link className="home-icon-btn" to="/clients">
            <Icon title="Clients" picture={clientIcon} />
          </Link>
          <Link to="/ledger" className="home-icon-btn">
            <Icon title="Ledger" picture={financialIcon} />
          </Link>
          <Link to="/tattoos" className="home-icon-btn">
            <Icon title="Tattoos" picture={tattooIcon} />
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(UserHome);
