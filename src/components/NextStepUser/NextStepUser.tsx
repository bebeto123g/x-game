import React from 'react';
import { useAppSelector } from '../../hooks/state';

const NextStepUser = () => {
    const { game, users } = useAppSelector((state) => state);

    return <div className="step-user">Чей ход: {users[game.userStep].name}</div>;
};

export default NextStepUser;
