import { ThunkAction } from 'redux-thunk';
import { GameActionsType, GameMatrixType, GameTypes } from './reducer';
import { validateGameOver } from '../../services/helpers';
import { CreateThunkActionType } from '../index';

type GameSetStepProps = {
    matrix: GameMatrixType;
    id: string;
};

type GameThunkActionType = CreateThunkActionType<GameActionsType>;
// type GameThunkActionType = ThunkAction<void, RootStateType, any, GameActionsType>;
// type GameThunkAction = ThunkAction<Promise<void>, RootStateType, "extraArguments", GameActionsType>; для async await dispatch

export const setCell = (id: string, value: 0 | 1): GameThunkActionType => {
    return (dispatch, getState) => {
        const matrix = [...getState().game.matrix];
        const [i, j] = id.split('').map(Number);
        matrix[i][j] = value;
        dispatch(setMatrix({ matrix, id }));
    };
};

export const setMatrix = ({ matrix, id }: GameSetStepProps) => {
    const gameOver = validateGameOver(matrix);
    return { type: GameTypes.setCell, matrix, id, gameOver };
};

export const startNextGame = () => {
    return { type: GameTypes.nextGame };
};

export const clearGame = () => ({ type: GameTypes.clear });

export const actions = {
    setMatrix,
    startNextGame,
    clearGame,
};
