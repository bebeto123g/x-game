import { GameMatrixType, GameTypes } from './reducer';

type GameSetStep = {
    matrix: GameMatrixType;
    id: string;
};

export const setCell = ({ matrix, id }: GameSetStep) => {
    return { type: GameTypes.setCell, matrix, id };
};

export const startNextGame = () => {
    return { type: GameTypes.nextGame };
};

export const clearGame = () => ({ type: GameTypes.clear });
