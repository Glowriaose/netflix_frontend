import axios from "axios";

const api = axios.create({
  //for local connection 
  baseURL: "http://localhost:8080" 
 //baseURL: "http://13.246.230.159:8080" for ec2 deployment linking
});

export default api;