import React, { useCallback, FocusEvent } from 'react';
import InputNamePlayer from '../components/InputNamePlayer/InputNamePlayer';
import { useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/users/actions';

const Home = () => {
    const users = useAppSelector((state) => state.users);
    const dispatch = useDispatch();

    const handlerName = useCallback(
        (e: FocusEvent<HTMLInputElement>) => {
            const value = e.target.value;
            const id = Number(e.target.id);
            if (id !== 0 && id !== 1) {
                throw new Error('ошибка id');
            }
            if (value === users[id].name) {
                return;
            }

            dispatch(setUser(id, value));
        },
        [users]
    );

    return (
        <>
            <InputNamePlayer name={users[0].name} id={0} callback={handlerName} />
            <InputNamePlayer name={users[1].name} id={1} callback={handlerName} />
        </>
    );
};

export default Home;
