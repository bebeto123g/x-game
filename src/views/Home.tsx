import React from 'react';
import InputNamePlayer from '../components/InputNamePlayer/InputNamePlayer';
import ButtonLink from '../components/UI/Button/ButtonLink';

const Home = () => {
    return (
        <>
            <InputNamePlayer id={0} />
            <InputNamePlayer id={1} />

            <ButtonLink to={'/game'}>К игре</ButtonLink>
        </>
    );
};

export default Home;
