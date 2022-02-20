import { GameTypes } from './reducer';




export const setCell = (id: string) => {
    return {
        type: GameTypes.setCell,
    }
}

export const rollbacGame = () => ({ type: GameTypes.rollbak });
