import { GameMatrixType, GameTypes } from './reducer';

type GameSetStep = {
    matrix: GameMatrixType;
    id: string;
};

// потом сделать чет покрасивее
function validateGameOver(matrix: GameMatrixType): boolean {
    const x =
        matrix[1][1] !== null &&
        ((matrix[1][1] === matrix[0][0] && matrix[1][1] === matrix[2][2]) ||
            (matrix[1][1] === matrix[0][2] && matrix[1][1] === matrix[2][0]));
    if (x) return true;

    const vertical =
        (matrix[0][0] !== null && matrix[0][0] === matrix[1][0] && matrix[0][0] === matrix[2][0]) ||
        (matrix[0][1] !== null && matrix[0][1] === matrix[1][1] && matrix[0][1] === matrix[2][1]) ||
        (matrix[0][2] !== null && matrix[0][2] === matrix[1][2] && matrix[0][2] === matrix[2][2]);
    if (vertical) return true;

    const horizont =
        (matrix[0][0] !== null && matrix[0][0] === matrix[0][1] && matrix[0][0] === matrix[0][2]) ||
        (matrix[1][0] !== null && matrix[1][0] === matrix[1][1] && matrix[1][1] === matrix[1][2]) ||
        (matrix[2][0] !== null && matrix[2][0] === matrix[2][1] && matrix[2][0] === matrix[2][2]);
    if (horizont) return true;

    return false;
}

export const setCell = ({ matrix, id }: GameSetStep) => {
    const gameOver = validateGameOver(matrix);
    return { type: GameTypes.setCell, matrix, id, gameOver };
};

export const startNextGame = () => {
    return { type: GameTypes.nextGame };
};

export const clearGame = () => ({ type: GameTypes.clear });
