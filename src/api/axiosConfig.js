// import axios from "axios";

// const api = axios.create({
//   // base url for local deployment on my pc
//   // baseURL: "http://localhost:8080",

//   // backend EC2 deployment (from .env)
//   baseURL: process.env.REACT_APP_API_URL
// });

// export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "/api"  // No IPs, no ports, completely dynamic!
});

export default api;
