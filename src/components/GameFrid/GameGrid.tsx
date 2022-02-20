import React, { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setCell } from '../../store/game/actions';
import './GameGrid.scss';

const GameGrid = () => {
    const matrix = useSelector((state: RootState) => state.game.matrix);
    const dispatch = useDispatch();

    const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        const { id, cell } = target.dataset;

        if (!id || cell) {
            return;
        }
        console.log(id);
        console.log(cell);

        dispatch(setCell(id));
        target.classList.add('game-grid__cell--x');
        target.dataset.cell = '0';
        // не помню че я тут делал, но идея была херовой, нужно менять структуру состояния
    };

    return (
        <div className="game-grid" onClick={clickHandler}>
            {matrix.map((str, i) => {
                return str.map((_, j) => {
                    const id = `${i}${j}`;
                    return <div className="game-grid__cell" data-id={id} key={id} data-cell="" />;
                });
            })}
        </div>
    );
};

export default GameGrid;
