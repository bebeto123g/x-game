import React from 'react';
import GameGrid from '../components/GameGrid/GameGrid';
import NextStepUser from '../components/NextStepUser/NextStepUser';
import NextGameBtn from '../components/UX/NextGameBtn/NextGameBtn';

const Game = () => {
    return (
        <div className="game-page page">
            <div className="container">
                <NextGameBtn variant={'danger'}>Следующий матч</NextGameBtn>
                <NextStepUser />
                <GameGrid />
            </div>
        </div>
    );
};

export default Game;
