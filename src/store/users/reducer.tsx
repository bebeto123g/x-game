import { GetActionsType } from '../index';
import * as actions from './actions';

type GametActionsType = GetActionsType<typeof actions>;

const initState = [
    { name: 'Первый игрок', color: 'orange', id: 0 },
    { name: 'Второй игрок', color: 'green', id: 1 },
];

// имена нужно будет записывать вначале, так же можно будет выбрать цвет

/* логика
    по номеру ячейки записываем в матрицу, заносим ход в историю как номер ячейки,
    при rollback забираем последний элемент pop() и делаем реверс значения
    если длина истории равно 0, делаем кнопку rollback в интерфейсе неактивной

    в будущем попробовать реализовать возможность действия вперед
    добавиви значение current step, сделав history фиксированной длины

    пока хз как лучше сделать проверку на совпадения для выйгрыша
*/

export const UsersTypes = {
    set: 'USER_SET',
    setName: 'USER_NAME',
} as const;

export function usersReducer(state = initState, action: GametActionsType): typeof initState {
    switch (action.type) {
        case UsersTypes.set: {
            const newState = [...state];
            newState[action.id] = {
                ...state[action.id],
                name: action.name,
                color: action.color || newState[action.id].color,
            }

            return [ ...newState];
        }


        case UsersTypes.setName:
            return { ...initState };

        default:
            return state;
    }
}
