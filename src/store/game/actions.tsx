import { GameTypes } from './reducer';

export const setGame = (variant: string, message: string) => ({ type: GameTypes.set, variant, message });
export const rollbacGAme = () => ({ type: GameTypes.rollbak });
