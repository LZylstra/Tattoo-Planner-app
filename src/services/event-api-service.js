import TokenService from "../services/token-service";
import config from "../config";

const EventApiService = {
  getEvents() {
    return fetch(`${config.API_ENDPOINT}/events`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res => {
      if (!res.ok) {
        res.json().then(e => Promise.reject(e));
      }

      return res.json();
    });
  },
  getEvent(eventId) {
    return fetch(`${config.API_ENDPOINT}/events/${eventId}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` }
    }).then(res => {
      if (!res.ok) {
        res.json().then(e => Promise.reject(e));
      }

      return res.json();
    });
  },
  postEvent(newEvent) {
    const {
      title,
      description,
      eventdate,
      start_time,
      end_time,
      in_person,
      curr_status,
      all_day,
      tattoo
    } = newEvent;
    return fetch(`${config.API_ENDPOINT}/events/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        title: title,
        description: description,
        eventdate: eventdate,
        start_time: start_time,
        end_time: end_time,
        in_person: in_person,
        curr_status: curr_status,
        all_day: all_day,
        tattoo: tattoo
      })
    }).then(res => {
      if (!res.ok) {
        res.json().then(e => Promise.reject(e));
      }

      return res.json();
    });
  },
  deleteEvent(eventId) {
    fetch(`${config.API_ENDPOINT}/events/${eventId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
      })
      .catch(error => {
        console.error({ error });
      });
  },
  getEventTattoo(eventId) {
    return fetch(`${config.API_ENDPOINT}/events/${eventId}/tattoo`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res => {
      if (!res.ok) {
        res.json().then(e => Promise.reject(e));
      }

      return res.json();
    });
  },
  getTattoosEvents(tattooId) {
    return fetch(`${config.API_ENDPOINT}/events/tattoo/${tattooId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res => {
      if (!res.ok) {
        res.json().then(e => Promise.reject(e));
      }

      return res.json();
    });
  }
};

export default EventApiService;
