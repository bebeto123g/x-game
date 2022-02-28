import React, { ChangeEvent, FC, FocusEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store';
import { setUser } from '../../store/users/actions';
import './InputNamePlayer.scss';

const InputNamePlayer: FC<{ id: 0 | 1 }> = ({ id }) => {
    const users = useAppSelector((state) => state.users);
    const dispatch = useDispatch();
    const [userName, setUserName] = useState(users[id].name);

    const handlerBlur = (e: FocusEvent<HTMLInputElement>) => {
        if (userName === users[id].name) return;
        if (!userName) {
            setUserName(users[id].name);
            return;
        }
        dispatch(setUser(id, userName));
    };

    const handlerInput = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    return (
        <>
            <div className="input-player">
                <label htmlFor={String(id)} className="input-player__label">
                    Введите имя игрока
                </label>
                <input
                    className="input-player__input"
                    type="text"
                    name={String(id)}
                    id={String(id)}
                    onBlur={handlerBlur}
                    onChange={handlerInput}
                    value={userName}
                />
            </div>
        </>
    );
};

export default InputNamePlayer;
