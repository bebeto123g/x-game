import React, { FC, FocusEvent } from 'react';
import './InputNamePlayer.scss';

interface InputNamePlayerType {
    name: string;
    id: 0 | 1;
    callback: (e: FocusEvent<HTMLInputElement>) => void;
}

const InputNamePlayer: FC<InputNamePlayerType> = ({ name, id, callback }) => {
    return (
        <input
            className="input-player"
            type="text"
            name={String(id)}
            id={String(id)}
            defaultValue={name}
            onBlur={callback}
        />
    );
};

export default InputNamePlayer;
