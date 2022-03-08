import React from 'react';
import GameGrid from '../components/GameGrid/GameGrid';
import NextStepUser from '../components/NextStepUser/NextStepUser';
import NextGameBtn from '../components/UX/NextGameBtn/NextGameBtn';
import GameWinnerAlert from '../components/GameGrid/GameWinnerAlert';

const Game = () => {
    return (
        <div className="game-page page">
            <div className="container">
                <NextStepUser />
                <GameGrid />
                <GameWinnerAlert />
                <NextGameBtn variant={'danger'} classNames="game-page__next">
                    Следующий матч
                </NextGameBtn>
            </div>
        </div>
    );
};

export default Game;
