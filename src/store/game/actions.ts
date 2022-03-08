import { GameActionsType, GameMatrixType, GameOverType, GameTypes } from './reducer';
import { getWinnerLine, validateDiagonal, validateLines } from '../../services/validateGame';
import { CreateThunkActionType } from '../index';

type GameSetStepProps = {
    matrix: GameMatrixType;
    id: string;
    value: 0 | 1;
};

type GameThunkActionType = CreateThunkActionType<GameActionsType>;
// type GameThunkActionType = ThunkAction<void, RootStateType, any, GameActionsType>;
// type GameThunkAction = ThunkAction<Promise<void>, RootStateType, "extraArguments", GameActionsType>; для async await dispatch

export const setCell = (id: string, value: 0 | 1): GameThunkActionType => {
    return (dispatch, getState) => {
        const { matrix } = { ...getState().game };
        const [i, j] = id.split('').map(Number);
        matrix[i][j] = value;
        dispatch(setMatrix({ matrix, id, value }));
    };
};

export const setMatrix = ({ matrix, id, value }: GameSetStepProps) => {
    let gameOver: GameOverType = validateDiagonal(matrix, value);
    let winnerLine: Array<string> = [];
    if (!gameOver) {
        gameOver = validateLines(matrix, value);
    }

    if (gameOver) {
        winnerLine = getWinnerLine(id, gameOver);
    }

    return { type: GameTypes.setCell, matrix, id, gameOver, winnerLine };
};

export const startNextGame = () => ({ type: GameTypes.nextGame });
export const clearGame = () => ({ type: GameTypes.clear });

export default {
    setMatrix,
    startNextGame,
    clearGame,
};
