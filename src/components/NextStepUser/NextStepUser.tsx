import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';

const NextStepUser = () => {
    const { game, users } = useSelector((state: RootStateType) => state);

    return (
        <div className="step-user">Чей ход: {users[game.userStep].name}</div>
    );
};

export default NextStepUser;