export function getFirstCard(deck) {
  const [first] = deck;
  return first;
}

export function getSecondCard(deck) {
  const [, second] = deck;
  return second;
}

export function swapTwoCards(deck) {
  const [first, second, ...rest] = deck;
  return [second, first, ...rest];
}

export function shiftThreeCardsAround(deck) {
  const [first, ...rest] = deck;
  return [...rest, first];
}

export function pickNamedPile(piles) {
  return piles["chosen"];
}

export function swapNamedPile(piles) {
  const chosen = piles["disregarded"];
  const disregarded = piles["chosen"];

  return { chosen, disregarded };
}

