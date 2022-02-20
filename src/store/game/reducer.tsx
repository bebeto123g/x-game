import { GetActionsType } from '../index';
import * as actions from './actions';

export type GameActionsType = GetActionsType<typeof actions>;

const initState = {
    matrix: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ] as Array<Array<null | 0 | 1>>,
    stepHistory: [] as Array<string>,
    userStep: 0 as 0 | 1,
    firstInput: 0 as 0 | 1,
    gamesResult: [] as Array<null | 0 | 1>,
    maxGamesTutorialLength: 5, // сколько матчей в турнире
};

// TODO с 0 и 1 билеберда по сути, придумать ченить другое. возможно лучше вынести в состояние игрока

/* логика
    по номеру ячейки записываем в матрицу, заносим ход в историю как номер ячейки,
    при rollback забираем последний элемент pop() и делаем реверс значения
    если длина истории равно 0, делаем кнопку rollback в интерфейсе неактивной

    в будущем попробовать реализовать возможность действия вперед
    добавиви значение current step, сделав history фиксированной длины

    пока хз как лучше сделать проверку на совпадения для выйгрыша
*/

export const GameTypes = {
    setCell: 'GAME_SET_CELL',
    rollbak: 'GAME_ROLLBACK',
} as const;

export function gameReducer(state = initState, action: GameActionsType): typeof initState {
    switch (action.type) {
        case GameTypes.setCell:
            return {
                ...state,
            };

        case GameTypes.rollbak:
            return { ...initState };

        default:
            return state;
    }
}
