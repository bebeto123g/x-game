import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameGrid from '../components/GameGrid/GameGrid';
import { RootStateType } from '../store';
import { startNextGame } from '../store/game/actions';

const Game = () => {
    const { game, users } = useSelector((state: RootStateType) => state);
    const dispatch = useDispatch();

    const handler = useCallback(() => dispatch(startNextGame()), [dispatch]);

    return (
        <>
            <button className="next-game" onClick={handler}>
                Следующий матч
            </button>
            <div className="step-user">
                Чей ход: {users[game.userStep].name}
            </div>

            <GameGrid />
        </>
    );
};

export default Game;
