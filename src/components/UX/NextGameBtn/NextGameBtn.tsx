import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { startNextGame } from '../../../store/game/actions';
import Button, { ButtonPropsTypes } from '../../UI/Button/Button';
import { useAppSelector } from '../../../store';

const NextGameBtn: FC<Omit<ButtonPropsTypes, 'callback'>> = (props) => {
    const game = useAppSelector((state) => state.game);
    const dispatch = useDispatch();

    const handler = useCallback(() => dispatch(startNextGame()), [dispatch]);

    return (
        <Button {...props} callback={handler} disabled={!game.gameOver}>
            {props.children}
        </Button>
    );
};

export default NextGameBtn;
