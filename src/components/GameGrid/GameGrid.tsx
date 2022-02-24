import React, { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../store';
import { setCell } from '../../store/game/actions';
import './GameGrid.scss';

// от isCross зависит UI
//

const GameGrid = () => {
    const { game, users } = useSelector((state: RootStateType) => state);
    const dispatch = useDispatch();

    const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        const { id, cell } = target.dataset;

        if (!id || cell) return;

        target.style.setProperty('--user-color', users[game.userStep].color);
        const cellValue = game.firstUserInput === game.userStep ? 1 : 0;
        target.dataset.cell = String(cellValue);
        dispatch(setCell(id, cellValue));
    };

    if (game.gameOver) {
        return <h2>Игра окончена, победил {users[game.userStep].name}</h2>;
    }

    return (
        <div className="game-grid" onClick={clickHandler}>
            {game.matrix.map((str, i) => {
                return str.map((cell, j) => {
                    const id = `${i}${j}`;
                    let modify = '';
                    if (cell !== null) {
                        modify = ' game-grid__cell--' + (cell === 1 ? 'x' : '0');
                    }
                    return (
                        <div className={`game-grid__cell${modify}`} data-id={id} key={id} data-cell={cell} />
                    );
                });
            })}
        </div>
    );
};

export default GameGrid;
