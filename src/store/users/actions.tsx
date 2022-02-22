import { UsersTypes } from './reducer';


export const setUser = (id: 0 | 1, name: string, color?: string, ) => ({ type: UsersTypes.set, name, color, id });
export const setNameUser = () => ({ type: UsersTypes.setName });
