import React from 'react';
import GameGrid from '../components/GameGrid/GameGrid';
import NextStepUser from '../components/NextStepUser/NextStepUser';
import NextGameBtn from '../components/UX/NextGameBtn/NextGameBtn';

const Game = () => {
    return (
        <>
            <NextGameBtn />
            <NextStepUser />
            <GameGrid />
        </>
    );
};

export default Game;
