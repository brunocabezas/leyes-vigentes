import { Law } from "../models";

// TODO data getters
// for now, using specific getters to display information
// This should change once the shape is defined
export const getLawNumber = law =>
  (law.TIPOS_NUMEROS &&
    law.TIPOS_NUMEROS.TIPO_NUMERO &&
    law.TIPOS_NUMEROS.TIPO_NUMERO.NUMERO) ||
  "";
export const getLawType = law =>
  (law.TIPOS_NUMEROS &&
    law.TIPOS_NUMEROS.TIPO_NUMERO &&
    law.TIPOS_NUMEROS.TIPO_NUMERO.DESCRIPCION) ||
  "";
export const getLawDepartment = law =>
  law.ORGANISMOS && law.ORGANISMOS.ORGANISMO;

// parseLawsFromAPI
// receives the repsonse from the API and parses it to fit Law model
export const parseLawsFromAPI = laws =>
  laws.map(
    law =>
      new Law({
        id: law.idNorma,
        number: getLawNumber(law),
        organism: getLawDepartment(law),
        type: getLawType(law),
        title: law.TITULO,
        description: law.TEXTO,
        date: law.FECHA_PROMULGACION
      })
  );
