import React from 'react';
import InputNamePlayer from '../components/InputNamePlayer/InputNamePlayer';
import ButtonLink from '../components/UI/Button/ButtonLink';

const Home = () => {
    return (
        <div className="home-page page">
            <div className="container">
                <InputNamePlayer id={0} />
                <InputNamePlayer id={1} />

                <ButtonLink to={'/game'} variant="primary" classNames={'home-page__start-btn'}>
                    К игре
                </ButtonLink>
            </div>
        </div>
    );
};

export default Home;
