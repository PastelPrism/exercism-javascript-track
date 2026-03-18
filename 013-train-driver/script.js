
export function getListOfWagons(...ids) {
  return ids;
}

export function fixListOfWagons(ids) {
  const [first, second, ...rest] = ids;
  return [...rest, first, second];
}

export function correctListOfWagons(ids, missingWagons) {
  const [locomotive, ...rest] = ids;
  return [locomotive, ...missingWagons, ...rest];
}

export function extendRouteInformation(information, additional) {
  return { ...information, ...additional };
}

export function separateTimeOfArrival(information) {
  const { timeOfArrival, ...rest } = information;
  return [timeOfArrival, rest];
}