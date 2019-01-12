import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import reducedLaws from "../data/reduced.json";
import laws from "../data/leyes3.json";

const API_URL = "https://leyes.com";
const axiosInstance = axios.create({
  baseURL: API_URL
});
export const mock = new MockAdapter(axiosInstance, { delayResponse: 0 });
export default axiosInstance;

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/data").reply(200, { data: reducedLaws });
mock.onGet("/detail").reply(200, { data: laws.Normas.Norma });
mock.onGet("/law_types").reply(200, {
  data: Array.from(new Set(laws.Normas.Norma.map(l => l.$.tipoNorma))).map(
    (law, i) => ({ name: law, id: i + 1 })
  )
});
