import React, { ChangeEvent, FC, FocusEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store';
import { setUserName, setUserColor } from '../../store/users/actions';
import './InputNamePlayer.scss';

const InputNamePlayer: FC<{ id: 0 | 1 }> = ({ id }) => {
    const users = useAppSelector((state) => state.users);
    const dispatch = useDispatch();
    const [userName, seNameValue] = useState(users[id].name);

    const handlerBlurName = (e: FocusEvent<HTMLInputElement>) => {
        if (userName === users[id].name) return;
        if (userName.length < 3) {
            seNameValue(users[id].name);
            return;
        }
        dispatch(setUserName(id, userName));
    };

    const handlerInputName = (e: ChangeEvent<HTMLInputElement>) => {
        seNameValue(e.target.value);
    };

    const handlerBlurColor = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setUserColor(id, e.target.value));
    };

    return (
        <div className="input-player">
            <label htmlFor={`user-name-${id}`} className="input-player__label">
                Введите имя игрока
            </label>
            <div className="input-player__inputs">
                <input
                    className="input-player__name"
                    type="text"
                    name={`user-name-${id}`}
                    id={`user-name-${id}`}
                    onBlur={handlerBlurName}
                    onChange={handlerInputName}
                    value={userName}
                />
                <input
                    type="color"
                    name={`user-color-${id}`}
                    id={`user-color-${id}`}
                    className="input-player__color"
                    onBlur={handlerBlurColor}
                    defaultValue={users[id].color}
                />
            </div>
        </div>
    );
};

export default InputNamePlayer;
