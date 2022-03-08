import React from 'react';
import { useAppSelector } from '../../store';
import './NextStepUser.scss';

const NextStepUser = () => {
    const { game, users } = useAppSelector((state) => state);

    const user = users[game.userStep];

    return (
        <div className="step-user">
            Чей ход:
            <span className="step-user__name" style={{ color: user.color }}>
                {user.name}
            </span>
        </div>
    );
};

export default NextStepUser;
