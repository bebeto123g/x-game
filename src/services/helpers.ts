import { GameMatrixType } from '../store/game/reducer';

// избыточная фигня, можно делать по id ячейки возможные варианты, а пока будет так

export const validateDiagonal = (matrix: GameMatrixType, value: 0 | 1): boolean => {
    let toLeft = true;
    let toRight = true;

    for (let i = 0; i < 3; i++) {
        toLeft = toLeft && matrix[i][i] === value;
        toRight = toRight && matrix[2 - i][i] === value;
    }

    return toLeft || toRight;
};

export const validateLines = (matrix: GameMatrixType, value: 0 | 1) => {
    for (let i = 0; i < 3; i++) {
        let row = true;
        let col = true;
        for (let j = 0; j < 3; j++) {
            row = row && matrix[i][j] === value;
            col = col && matrix[j][i] === value;
        }

        if (col || row) return true;
    }

    return false
};
