export const translate2d = (dx, dy) => (x, y) => [x + dx, y + dy];

export const scale2d = (sx, sy) => (x, y) => [x * sx, y * sy];

export const composeTransform = (f, g) => (x, y) => g(...f(x, y));

export const memoizeTransform = (f) => {
    let lastX, lastY, lastResult;
    return (x, y) =>
        x === lastX && y === lastY
            ? lastResult
            : ((lastX = x), (lastY = y), (lastResult = f(x, y)));
};
