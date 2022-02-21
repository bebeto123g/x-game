import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { startNextGame } from '../../../store/game/actions';
import Button from '../../UI/Button/Button';

const NextGameBtn = () => {
    const dispatch = useDispatch();
    const handler = useCallback(() => dispatch(startNextGame()), [dispatch]);

    return (
        <Button variant='warning' callback={handler}>
            Следующий матч
        </Button>
    );
};

export default NextGameBtn;