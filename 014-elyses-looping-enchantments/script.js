export function cardTypeCheck(stack, card) {
  let count = 0;
  stack.forEach(c => {
    if (c === card) {
      count++;
    }
  });

  return count;
}

export function determineOddEvenCards(stack, type) {
  let count = 0;
  for (const card of stack) {
    const isEven = card % 2 === 0;
    if (type === true && isEven) {
      count++;
    }
    if (type === false && !isEven) {
      count++;
    }
  }

  return count;
}
