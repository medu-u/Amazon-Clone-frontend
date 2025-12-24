import axios from "axios"
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-d94b3/us-central1/api",
  baseURL: "https://amazon-api-deploy-1-ptnz.onrender.com",
});
export {axiosInstance}