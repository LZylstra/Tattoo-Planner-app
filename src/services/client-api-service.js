import TokenService from "../services/token-service";
import config from "../config";

const ClientApiService = {
  getClients() {
    return fetch(`${config.API_ENDPOINT}/clients`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(
      res => {
        if (!res.ok) {
          res.json().then(e => Promise.reject(e));
        }
        // console.log(res.json());
        return res.json();
      }
      //   !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getClient(clientId) {
    return fetch(`${config.API_ENDPOINT}/clients/${clientId}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` }
    }).then(
      res => {
        if (!res.ok) {
          res.json().then(e => Promise.reject(e));
        }
        //console.log(res.json());
        return res.json();
      }
      //   !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
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
      //console.log(res.json());
      return res.json();
    });
  },
  postClient(full_name, phone, email, client_rating) {
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
        client_rating: client_rating
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default ClientApiService;