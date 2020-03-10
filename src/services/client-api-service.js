import TokenService from "../services/token-service";
import config from "../config";

const ClientApiService = {
  getClients() {
    let user = TokenService.getUser();
    return fetch(`${config.API_ENDPOINT}/clients/artist/${user}`, {
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
  getClient(clientId) {
    return fetch(`${config.API_ENDPOINT}/clients/${clientId}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` }
    }).then(res => {
      if (!res.ok) {
        res.json().then(e => Promise.reject(e));
      }

      return res.json();
    });
  },
  getClientTattoos(clientId) {
    return fetch(`${config.API_ENDPOINT}/clients/${clientId}/tattoos`, {
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
  postClient(newClient) {
    const { full_name, phone, email, client_rating, artist } = newClient;
    return fetch(`${config.API_ENDPOINT}/clients`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        full_name: full_name,
        phone: phone,
        email: email,
        client_rating: client_rating,
        artist: artist
      })
    })
      .then(res => {
        if (!res.ok) {
          res.json().then(e => Promise.reject(e));
        }

        return res.json();
      })
      .catch(error => {
        console.error({ error });
      });
  },
  deleteClient(clientId) {
    fetch(`${config.API_ENDPOINT}/clients/${clientId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
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

export default ClientApiService;
