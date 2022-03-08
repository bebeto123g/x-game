import { GameMatrixType, GameOverType } from '../store/game/reducer';

export const validateDiagonal = (
    matrix: GameMatrixType,
    value: 0 | 1
): Exclude<GameOverType, 'col' | 'row' | 'draw'> => {
    let toLeft = true;
    let toRight = true;

    for (let i = 0; i < 3; i++) {
        toLeft = toLeft && matrix[i][i] === value;
        toRight = toRight && matrix[2 - i][i] === value;
    }

    return toLeft ? 'toLeft' : toRight ? 'toRight' : false;
};

export const validateLines = (
    matrix: GameMatrixType,
    value: 0 | 1
): Exclude<GameOverType, 'toLeft' | 'toRight' | 'draw'> => {
    for (let i = 0; i < 3; i++) {
        let row = true;
        let col = true;
        for (let j = 0; j < 3; j++) {
            row = row && matrix[i][j] === value;
            col = col && matrix[j][i] === value;
        }

        if (col) return 'col';
        if (row) return 'row';
    }

    return false;
};

export const getWinnerLine = (id: string, type: Exclude<GameOverType, false | 'draw'>): Array<string> => {
    const [row, col] = id.split('');
    let i = 2;

    return Array(3)
        .fill(null)
        .map((_, index) => {
            switch (type) {
                case 'row':
                    return `${row}${index}`;
                case 'col':
                    return `${index}${col}`;
                case 'toLeft':
                    return `${index}${index}`;
                case 'toRight':
                    return `${i--}${index}`;
            }
        });
};
