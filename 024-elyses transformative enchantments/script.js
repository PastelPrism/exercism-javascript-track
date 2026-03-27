export function seeingDouble(deck) {
  return deck.map(card => card * 2);
}

export function threeOfEachThree(deck) {
  return deck.flatMap(card => (card === 3 ? [3, 3, 3] : card));
}

export function middleTwo(deck) {
  const mid = deck.length / 2;
  return deck.slice(mid - 1, mid + 1);
}

export function sandwichTrick(deck) {
  const first = deck[0];
  const last = deck[deck.length - 1];
  const middle = deck.slice(1, -1); 

  const midIndex = middle.length / 2;

  return [
    ...middle.slice(0, midIndex),
    last,
    first,
    ...middle.slice(midIndex),
  ];
}

export function twoIsSpecial(deck) {
  return deck.filter(card => card === 2);
}

export function perfectlyOrdered(deck) {
  return [...deck].sort((a, b) => a - b);
}

export function reorder(deck) {
  return [...deck].reverse();
}

