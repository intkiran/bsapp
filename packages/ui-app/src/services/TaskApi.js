import axios from "axios";

export const TaskApi = axios.create({
  baseURL: "http://localhost:9001/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
});
