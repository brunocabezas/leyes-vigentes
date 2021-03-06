import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import routes from "./routes";
import laws from "./mock/laws.json";
import { getLawType } from "../src/helpers/apiHelpers";
import { onlyUnique } from "../src/helpers/arrayHelpers";

const API_URL = "https://leyes.com";

const axiosInstance = axios.create({
  baseURL: API_URL
});

const lawTypesRes = Array.from(
  new Set(
    laws.NORMAS.NORMA.map(law => getLawType(law))
      .filter(onlyUnique)
      .map((law, ix) => ({
        name: law,
        id: ix + 1 // starting from 1
      }))
  )
);
// For now, mocking all requests
export const mock = new MockAdapter(axiosInstance, { delayResponse: 0 });

mock.onGet(routes.lawTypes).reply(200, {
  data: lawTypesRes
});
mock.onGet(routes.laws).reply(200, { data: laws.NORMAS.NORMA });
mock.onGet(new RegExp(`law/*`)).reply(200, { data: laws.NORMAS.NORMA[0] });

export default axiosInstance;
