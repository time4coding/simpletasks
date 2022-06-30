import axios from "axios";
export default axios.create({
  baseURL: "https://apitasks.onrender.com/api",
  headers: {
    "Content-type": "application/json"
  }
});