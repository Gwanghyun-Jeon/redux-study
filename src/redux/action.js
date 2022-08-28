export function makeAction(type, body) {
  if (body) {
    return { type: type, body: body };
  } else {
    return { type: type };
  }
}
