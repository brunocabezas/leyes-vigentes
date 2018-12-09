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
