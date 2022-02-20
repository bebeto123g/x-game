import { GetActionsType } from '../types';
import * as actions from './actions';

type GametActionsType = GetActionsType<typeof actions>;

const initState = {
    matrix: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ],
    history: []
};

/* логика
    по номеру ячейки записываем в матрицу, заносим ход в историю как номер ячейки,
    при rollback забираем последний элемент pop() и делаем реверс значения
    если длина истории равно 0, делаем кнопку rollback в интерфейсе неактивной

    в будущем попробовать реализовать возможность действия вперед
    добавиви значение current step, сделав history фиксированной длины

    пока хз как лучше сделать проверку на совпадения для выйгрыша
*/

export const GameTypes = {
    set: 'GAME_SET' as const,
    rollbak: 'GAME_ROLLBACK' as const,
};

export function gameReducer(state = initState, action: GametActionsType): typeof initState {
    switch (action.type) {
        case GameTypes.set:
            return {
                ...state,
            };

        case GameTypes.rollbak:
            return { ...initState };

        default:
            return state;
    }
}
