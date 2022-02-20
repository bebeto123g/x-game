import React from 'react';

const GameGrid = () => {
    return (
        <div className="game-grid">
            {Array(9).map((cell, index) => (
                <div className="game-grid__cell" key={index} data-cell={index}></div>
            ))}
        </div>
    );
};

export default GameGrid;
