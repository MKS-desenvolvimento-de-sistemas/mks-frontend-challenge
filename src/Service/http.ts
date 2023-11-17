import axios from "axios";

const api = axios.create({
  baseURL: "https://mks-challenge-api-frontend.herokuapp.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
