import axios from "axios";
export default axios.create({
  baseURL: "postgres://admin:NhRjPqTCgO4dB6XijoMhrXYRGtIaRU8I@dpg-capo44v6d9kiqtaa2920-a.oregon-postgres.render.com/tasks_lmgp",
  headers: {
    "Content-type": "application/json"
  }
});