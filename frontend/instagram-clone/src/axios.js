import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5000",
});
instance.defaults.headers.common = {
  "Content-Type": "application/json",
  //"Authorization": "Bearer " + token?.token,
};
export default instance;
