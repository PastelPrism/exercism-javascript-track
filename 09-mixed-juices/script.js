export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let count = 0;
  for (let i = 0; i < limes.length && wedges < wedgesNeeded; i++) {
    const lime = limes[i];
    if (lime === 'small') wedges += 6;
    else if (lime === 'medium') wedges += 8;
    else if (lime === 'large') wedges += 10;
    count++;
  }
  return count;
}

export function remainingOrders(timeLeft, orders) {
  let i = 0;
  while (i < orders.length && timeLeft > 0) {
    const timeNeeded = timeToMixJuice(orders[i]);
    timeLeft -= timeNeeded;
    i++;
  }
  return orders.slice(i);
}