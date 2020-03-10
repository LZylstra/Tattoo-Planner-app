import React, { Component } from "react";
import Icon from "../../components/Icon/Icon";
import financialIcon from "../../img/financial-icon.png";
import clientIcon from "../../img/client-icon.png";
import tattooIcon from "../../img/tattoo-icon.png";
import EventApiService from "../../services/event-api-service";
import EventContext from "../../contexts/EventContext";
import ClientApiService from "../../services/client-api-service";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Link, withRouter } from "react-router-dom";
import { Button, Input, Textarea } from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import "./UserHome.css";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

Modal.setAppElement(document.getElementById("root")); // Make Modal accessible

class UserHome extends Component {
  calendarComponentRef = React.createRef();
  constructor() {
    super();
    this.state = {
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

  closeModal() {
    this.setState({ modalIsOpen: false });
    this.setView(null);
  }

  saveEvents(event) {
    this.setState({ eventList: event });
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

    EventApiService.deleteEvent(eventId);

    this.closeModal();
    this.props.history.go(0);
  };

  handleDateClick = arg => {
    this.setDateClicked(arg.dateStr);
    this.setView("add");
    this.openModal();
  };

  getTattoos = e => {
    let cid = e.nativeEvent.target.selectedIndex;
    let clientId = e.nativeEvent.target[cid].value;
    ClientApiService.getClientTattoos(clientId).then(
      this.context.setTattooList
    );
  };

  selectTattoo() {
    let { tattooList } = this.context;
    let content = tattooList.map(tattoo => (
      <option key={tattoo.id} value={tattoo.id}>
        {tattoo.title}
      </option>
    ));

    return content;
  }

  handleSubmitEvent = e => {
    e.preventDefault();
    const clientId = e.target["client-id"].value;
    const tattooId = e.target["tattoo-id"].value;
    this.setClientId(clientId);

    let date = new Date(this.state.dateClicked);
    date = new Date(date.getTime() + date.getTimezoneOffset() * 60000);

    date.setHours(
      e.target["event_start-add"].value.split(":")[0],
      e.target["event_start-add"].value.split(":")[1],
      0,
      0
    );

    const newEvent = {
      title: e.target["event_title-add"].value,
      description: e.target["event_desc-add"].value,
      eventdate: date,
      start_time: e.target["event_start-add"].value,
      // end_time, Future Feature, input for end date
      in_person: true,
      curr_status: "New",
      all_day: true,
      tattoo: tattooId
    };

    EventApiService.postEvent(newEvent)
      .then(this.context.addEvent)
      .then(() => {
        let eventList = this.context.eventList;
        this.saveEvents(this.modifyEventList(eventList));
      })
      .then(this.closeModal());
  };

  renderAddEvent() {
    const { clientList = [] } = this.context;

    let clientDropDown;
    if (clientList === undefined) {
      //"loading" Future feature, loading animation
    } else {
      clientDropDown = clientList.map(client => (
        <option key={client.id} value={client.id}>
          {client.full_name}
        </option>
      ));
    }

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
          <select
            id="client-select"
            name="client-id"
            onChange={this.getTattoos}
            required
          >
            <option value="">Select a Client...</option>
            {clientDropDown}
          </select>

          <label htmlFor="eventAddForm_tattoo">Tattoo</label>
          <select id="tattoo-select" name="tattoo-id" required>
            <option value="">Select a Tattoo...</option>
            {this.selectTattoo()}
          </select>

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
    let clickedEvent = this.state.event;

    if (clickedEvent === null) {
      //"loading" Future feature, loading animation
    } else {
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

  // Modify event list to work with full calendar's requirements
  modifyEventList(oldList) {
    let newList = [];
    for (let i = 0; i < oldList.length; i++) {
      let newObj = {
        title: oldList[i].title,
        start: oldList[i].eventdate
      };
      newList.push(newObj);
    }
    return newList;
  }

  handleEventClick(info) {
    if (info.event.title) {
      this.setView("edit");
      this.setEventTitle(info.event.title);
    }
    const { eventList = [] } = this.context;

    let clickedEventTitle = this.state.eventTitle;
    let clickedEvent;

    for (let i = 0; i < eventList.length; i++) {
      if (eventList[i].title === clickedEventTitle) {
        clickedEvent = eventList[i];
        this.setEvent(clickedEvent);
        break;
      }
    }
    this.openModal();
  }

  render() {
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
              //editable={true} Future feature, make events draggable
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
