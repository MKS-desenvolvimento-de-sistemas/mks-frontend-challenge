import axios from "axios";

export const api = axios.create({
  baseURL: "https://mks-frontend-challenge-api.herokuapp.com/api/v1",
});
