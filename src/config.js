let API_ENDPOINT =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api"
    : "https://floating-forest-01615.herokuapp.com/api";

export default {
  API_ENDPOINT: API_ENDPOINT,
  LOCAL_API_ENDPOINT: "http://localhost:8000/api",

  USER: "User",
  TOKEN_KEY: "tattoo-auth-token"
};
