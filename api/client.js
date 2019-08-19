import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import routes from "./routes";
import laws from "./mock/laws.json";

const API_URL = "https://leyes.com";

const axiosInstance = axios.create({
  baseURL: API_URL
});

// For now, mocking all requests
export const mock = new MockAdapter(axiosInstance, { delayResponse: 0 });
mock.onGet(routes.laws).reply(200, { data: laws.NORMAS.NORMA });
mock.onGet("/detail").reply(200, { data: laws.NORMAS.NORMA });
mock.onGet(routes.lawTypes).reply(200, {
  data: Array.from(new Set(laws.NORMAS.NORMA.map(l => l.tipoNorma))).map(
    (law, i) => ({ name: law, id: i + 1 })
  )
});

export default axiosInstance;
