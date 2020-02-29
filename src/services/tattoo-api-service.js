import TokenService from "../services/token-service";
import config from "../config";

const TattooApiService = {
  getTattoos() {
    return fetch(`${config.API_ENDPOINT}/tattoos`, {
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
  getTattoo(tattooId) {
    return fetch(`${config.API_ENDPOINT}/tattoos/${tattooId}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` }
    }).then(res => {
      if (!res.ok) {
        res.json().then(e => Promise.reject(e));
      }

      return res.json();
    });
  },
  getClientTattoos(clientId) {
    return fetch(`${config.API_ENDPOINT}/tattoos/client/${clientId}`, {
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
  getTattoosClient(tattooId) {
    return fetch(`${config.API_ENDPOINT}/tattoos/${tattooId}/client`, {
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
  postTattoo(newTattoo) {
    const {
      client,
      title,
      position,
      info,
      curr_status,
      tattoo_rating
    } = newTattoo;
    return fetch(`${config.API_ENDPOINT}/tattoos/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        client: client,
        title: title,
        position: position,
        info: info,
        curr_status: curr_status,
        tattoo_rating: tattoo_rating
      })
    }).then(res => {
      if (!res.ok) {
        res.json().then(e => Promise.reject(e));
      }

      return res.json();
    });
  },
  deleteTattoo(tattooId) {
    fetch(`${config.API_ENDPOINT}/tattoos/${tattooId}`, {
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
  }
};

export default TattooApiService;
