import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { startNextGame } from '../../../store/game/actions';
import Button, { ButtonPropsTypes } from '../../UI/Button/Button';

type NextGameBtnType = Omit<ButtonPropsTypes, 'callback'>;

const NextGameBtn: FC<NextGameBtnType> = (props) => {
    const dispatch = useDispatch();
    const handler = useCallback(() => dispatch(startNextGame()), [dispatch]);

    return (
        <Button {...props} callback={handler}>
            {props.children}
        </Button>
    );
};

export default NextGameBtn;
