import axios from "axios";
export default axios.create({
  baseURL: "https://simpletasks.onrender.com/api",
  headers: {
    "Content-type": "application/json"
  }
});