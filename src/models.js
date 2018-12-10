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
export function Law(id, name) {
  this.id = id;
  this.name = name;
}
