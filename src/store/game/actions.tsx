import { ThunkAction } from 'redux-thunk';
import { GameActionsType, GameMatrixType, GameTypes } from './reducer';
import { validateDiagonal, } from '../../services/helpers';
import { CreateThunkActionType } from '../index';

type GameSetStepProps = {
    matrix: GameMatrixType;
    id: string;
    value: 0 | 1
};

type GameThunkActionType = CreateThunkActionType<GameActionsType>;
// type GameThunkActionType = ThunkAction<void, RootStateType, any, GameActionsType>;
// type GameThunkAction = ThunkAction<Promise<void>, RootStateType, "extraArguments", GameActionsType>; для async await dispatch

export const setCell = (id: string, value: 0 | 1): GameThunkActionType => {
    return (dispatch, getState) => {
        const { matrix } = {...getState().game};
        const [i, j] = id.split('').map(Number);
        matrix[i][j] = value;
        dispatch(setMatrix({ matrix, id, value }));
    };
};

export const setMatrix = ({ matrix, id, value }: GameSetStepProps) => {
    const gameOver = validateDiagonal(matrix, value);
    return { type: GameTypes.setCell, matrix, id, gameOver };
};

export const startNextGame = () => ({ type: GameTypes.nextGame });
export const clearGame = () => ({ type: GameTypes.clear });

export const actions = {
    setMatrix,
    startNextGame,
    clearGame,
};
