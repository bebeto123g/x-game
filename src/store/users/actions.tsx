import { UsersTypes } from './reducer';

export const setUser = (variant: string, message: string) => ({ type: UsersTypes.set, variant, message });
export const setNameUser = () => ({ type: UsersTypes.setName });
