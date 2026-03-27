export const cookingStatus = (time) =>
    time === 0
        ? 'Lasagna is done.'
        : time === undefined
            ? 'You forgot to set the timer.'
            : 'Not done, please wait.';

export const preparationTime = (layers, avg = 2) =>
    layers.length * avg;

export const quantities = (layers) =>
    layers.reduce(
        (acc, layer) => {
            if (layer === 'noodles') acc.noodles += 50;
            if (layer === 'sauce') acc.sauce += 0.2;
            return acc;
        },
        { noodles: 0, sauce: 0 }
    );

export const addSecretIngredient = (friendsList, myList) => {
    myList.push(friendsList.at(-1));
};

export const scaleRecipe = (recipe, portions) =>
    Object.fromEntries(
        Object.entries(recipe).map(([key, value]) => [
            key,
            value * (portions / 2),
        ])
    );
