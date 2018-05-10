export function Attribute(e) {
  return e[0] + "/" + e[1] + "/" + e[2];
}

export function Talent(t) {
  return t.talent + " (" + t.anwendungsgebiet + ") - " + Attribute(t.eigenschaften)
}

export function Time(t) {
  return t.start + " " + t.unit;
}
