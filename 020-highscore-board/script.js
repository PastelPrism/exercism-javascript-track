export const createScoreBoard = () => ({ 'The Best Ever': 1000000 });

export const addPlayer = (b, p, s) => ((b[p] = s), b);

export const removePlayer = (b, p) => (delete b[p], b);

export const updateScore = (b, p, s) => ((b[p] += s), b);

export const applyMondayBonus = b => {
    for (const p in b) b[p] += 100;
    return b;
};
