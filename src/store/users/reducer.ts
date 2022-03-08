import { GetActionsType } from '../index';
import actions from './actions';

type GameActionsType = GetActionsType<typeof actions>;

const initState = [
    { name: 'Первый игрок', color: '#d07607', id: 0 as 0 | 1 },
    { name: 'Второй игрок', color: '#10b305', id: 1 as 0 | 1 },
];

/* логика
    по номеру ячейки записываем в матрицу, заносим ход в историю как номер ячейки,
    при rollback забираем последний элемент pop() и делаем реверс значения
    если длина истории равно 0, делаем кнопку rollback в интерфейсе неактивной

    в будущем попробовать реализовать возможность действия вперед
    добавиви значение current step, сделав history фиксированной длины

    пока хз как лучше сделать проверку на совпадения для выйгрыша
*/

export const UsersTypes = {
    setUserName: 'SET_USER_NAME',
    setUserColor: 'SET_USER_COLOR',
} as const;

export function usersReducer(state = initState, action: GameActionsType): typeof initState {
    switch (action.type) {
        case UsersTypes.setUserName: {
            const newState = [...state];
            newState[action.id] = {
                ...state[action.id],
                name: action.name,
            };

            return [...newState];
        }

        case UsersTypes.setUserColor: {
            const newState = [...state];
            newState[action.id] = {
                ...state[action.id],
                color: action.color,
            };

            return [...newState];
        }

        default:
            return state;
    }
}
