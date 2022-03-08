import React from 'react';
import { useAppSelector } from '../../store';

const GameWinnerAlert = () => {
    const { game, users } = useAppSelector((state) => state);
    const { name, color } = users[game.userStep];
    const isWinnerClassVisible = game.gameOver ? ' game-winner--visible' : '';

    return (
        <div className={`game-winner${isWinnerClassVisible}`}>
            Игра окончена,
            {game.gameOver === 'draw' ? (
                ' ничья'
            ) : (
                <>
                    {' '}
                    победил{' '}
                    <span className="game-winner__name" style={{ color }}>
                        {name}
                    </span>
                </>
            )}
        </div>
    );
};

export default GameWinnerAlert;
