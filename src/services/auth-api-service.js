import config from "../config";

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(credentials)
    }).then(res => {
      if (!res.ok) {
        res.json().then(e => Promise.reject(e));
      }
      return res.json();
    });
  },
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getUser(user) {
    return fetch(`${config.API_ENDPOINT}/users/${user}`, {
      headers: {
        "content-type": "application/json"
      }
    }).then(res => {
      if (!res.ok) {
        res.json().then(e => Promise.reject(e));
      }
      return res.json();
    });
  }
};

export default AuthApiService;
