import config from "../config";
import AuthApiService from "./auth-api-service";

const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`);
  },
  saveUserId(userId) {
    // AuthApiService.getUser(userName).then(user => {
    //   console.log(user.id);
    //   window.sessionStorage.setItem(config.USER, user);
    // });
    window.sessionStorage.setItem(config.USER, userId);
    //.then(this.context.setUser);
  },
  getUser() {
    return window.sessionStorage.getItem(config.USER);
  },
  clearUser() {
    window.sessionStorage.removeItem(config.USER);
  }
  // getUserId() {
  //   return;
  // }
};

export default TokenService;
