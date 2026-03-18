export function pizzaPrice(pizza, ...extras) {
    let base;

    if (pizza === 'Margherita') base = 7;
    else if (pizza === 'Caprese') base = 9;
    else base = 10;

    const extraCost = extras.reduce((sum, extra) => {
        if (extra === 'ExtraSauce') return sum + 1;
        if (extra === 'ExtraToppings') return sum + 2;
        return sum;
    }, 0);

    return base + extraCost;
}

export function orderPrice(pizzaOrders) {
    let total = 0;

    for (const order of pizzaOrders) {
        total += pizzaPrice(order.pizza, ...order.extras);
    }

    return total;
}

