import React, { MouseEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store';
import { setCell } from '../../store/game/actions';
import './GameGrid.scss';
import { log } from 'util';
import GameWinnerAlert from './GameWinnerAlert';

const GameGrid = () => {
    const { game, users } = useAppSelector((state) => state);
    const dispatch = useDispatch();

    const isGameClassDisabled = game.gameOver ? ' game-grid--disabled' : '';

    const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        const { id, cell } = target.dataset;

        if (!id || cell) return;

        target.style.setProperty('--user-color', users[game.userStep].color);
        const cellValue = game.firstUserInput === game.userStep ? 1 : 0;
        target.dataset.cell = String(cellValue);
        dispatch(setCell(id, cellValue));
    };

    return (
        <div className={`game-grid${isGameClassDisabled}`} onClick={clickHandler}>
            {game.matrix.map((str, i) => {
                return str.map((cell, j) => {
                    const id = `${i}${j}`;
                    const modifyCellType =
                        cell !== null ? ' game-grid__cell--' + (cell === 1 ? 'x' : '0') : '';
                    const modifyCellWinner =
                        game.gameOver && game.winnerLine.includes(id) ? ' game-grid__cell--winner' : '';

                    return (
                        <div
                            className={`game-grid__cell${modifyCellType}${modifyCellWinner}`}
                            data-id={id}
                            key={id}
                            data-cell={cell}
                        />
                    );
                });
            })}
        </div>
    );
};

export default GameGrid;
