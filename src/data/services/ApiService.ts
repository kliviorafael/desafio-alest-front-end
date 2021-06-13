import axios from "axios";

const url =
  "http://localhost:5000/back-end-firebase-74e2f/us-central1/clients/";

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});
