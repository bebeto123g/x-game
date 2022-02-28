import { GameMatrixType } from '../store/game/reducer';

export const validateGameOver = (matrix: GameMatrixType): boolean => {
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
};