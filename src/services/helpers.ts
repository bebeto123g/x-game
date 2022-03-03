import { GameMatrixType } from '../store/game/reducer';

// костыль
// проходить двойным циклом по диагонали после 5 клика (можно и после 1, так то пох)
export const validateGameOver = (matrix: GameMatrixType): boolean => {
    return false;
};
