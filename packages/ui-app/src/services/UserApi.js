import axios from "axios";

export const UserApi = axios.create({
  baseURL: "http://localhost:9000/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
});
