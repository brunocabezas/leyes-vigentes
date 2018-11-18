import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const API_URL = "https://leyes.com";
const axiosInstance = axios.create({
  baseURL: API_URL
});
export const mock = new MockAdapter(axiosInstance, { delayResponse: 5000 });
export default axiosInstance;
