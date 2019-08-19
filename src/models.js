export function VisTimelineOptions(start, end, editable) {
  this.start = start;
  this.end = end;
  this.editable = editable;
}
export function Range(from, to) {
  this.start = from;
  this.end = to;

  this.validator = prop => typeof prop === "string" || prop === null;
}
export function Law({ id, title, description, number, type, date, organism }) {
  this.id = id;
  this.title = title;
  this.number = number;
  this.organism = organism;
  this.description = description;
  this.type = type;
  this.date = date;
}

export function LawDetail(
  {
    HISTORIASLEY,
    IdentificacionNorma,
    Organismo,
    idNorma,
    tipoNorma,
    numeroNorma,
    TituloNorma,
    fechaPublicacion
  } = {
    HISTORIASLEY: "",
    IdentificacionNorma: "",
    Organismo: "",
    idNorma: "",
    tipoNorma: "",
    numeroNorma: "",
    TituloNorma: "",
    fechaPublicacion: " "
  }
) {
  this.HistoriaDeLaLey = HISTORIASLEY;
  this.IdentificacionNorma = IdentificacionNorma;
  this.Organismo = Organismo;
  this.idNorma = idNorma;
  this.tipoNorma = tipoNorma;
  this.TituloNorma = TituloNorma;
  this.numeroNorma = numeroNorma;
  this.fechaPublicacion = fechaPublicacion;
}
