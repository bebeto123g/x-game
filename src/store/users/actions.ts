import { UsersTypes } from './reducer';

export const setUserName = (id: 0 | 1, name: string) => ({ type: UsersTypes.setUserName, name, id });
export const setUserColor = (id: 0 | 1, color: string) => ({ type: UsersTypes.setUserColor, color, id });

export default { setUserName, setUserColor };
