import { GetActionsType } from '../index';
import * as actions from './actions';

export type GameActionsType = GetActionsType<typeof actions>;
export type GameMatrixType = Array<Array<null | 0 | 1>>;

// в матрице всегда 1 это крестик, а 0 это 0
const initState = {
    matrix: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ] as GameMatrixType,
    stepHistory: [] as Array<string>,
    userStep: 0 as 0 | 1,
    firstUserInput: 0 as 0 | 1,
    gamesResult: [] as Array<null | 0 | 1>,
    maxGamesTutorialLength: 5, // сколько матчей в турнире
    gameOver: false,
};

export const GameTypes = {
    setCell: 'GAME_SET_CELL',
    clear: 'GAME_CLEAR',
    nextGame: 'GAME_NEXT',
} as const;

export function gameReducer(state = initState, action: GameActionsType): typeof initState {
    switch (action.type) {
        case GameTypes.setCell:
            return {
                ...state,
                matrix: action.matrix,
                stepHistory: [...state.stepHistory, action.id],
                userStep: action.gameOver ? state.userStep : state.userStep === 1 ? 0 : 1,
                gameOver: action.gameOver,
            };

        case GameTypes.nextGame: {
            const firstUserInput = state.firstUserInput === 1 ? 0 : 1;
            return {
                ...state,
                matrix: [
                    [null, null, null],
                    [null, null, null],
                    [null, null, null],
                ],
                stepHistory: [],
                firstUserInput,
                userStep: firstUserInput,
                gameOver: false,
            };
        }

        case GameTypes.clear:
            return { ...initState };

        default:
            return state;
    }
}
