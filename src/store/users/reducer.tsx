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

/* потом вспомнить и глянуть на графы

примитив
matrix[0][0] === matrix[1][1] === matrix[2][2]      1 5 9
matrix[0][2] === matrix[1][1] === matrix[2][0]      3 5 7

matrix[0][0] === matrix[1][0] === matrix[2][0]      1 4 7
matrix[0][1] === matrix[1][1] === matrix[2][1]      2 5 8
matrix[0][2] === matrix[1][2] === matrix[2][2]      5 6 9

some || every
matrix[0][0] === matrix[0][1] === matrix[0][2]      1 2 3
matrix[1][0] === matrix[1][1] === matrix[1][2]      4 5 6
matrix[2][0] === matrix[2][1] === matrix[2][2]      7 8 9

взять с двух углов и проверить соседей, примитив
5 - 1 || 5 - 3 || 5 - 2 || 5 - 6
1 - 2 || 1 - 4
9 - 6 || 9 - 8

самом собой начинать с варианта проверки id ячейки
*/

export const UsersTypes = {
    set: 'USER_SET',
    setName: 'USER_NAME',
} as const;

export function usersReducer(state = initState, action: GametActionsType): typeof initState {
    switch (action.type) {
        case UsersTypes.set:
            return {
                ...state,
            };

        case UsersTypes.setName:
            return { ...initState };

        default:
            return state;
    }
}
