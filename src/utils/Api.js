import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    Authorization: "",
  },
  responseType: "json",
});
