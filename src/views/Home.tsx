import React from 'react';
import InputNamePlayer from '../components/InputNamePlayer/InputNamePlayer';
import ButtonEmotion from '../components/UI/Button/ButtonEmation';
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

                <ButtonEmotion size='sm' variant='primary' callback={() => console.log('click')}>Кнопка</ButtonEmotion>
                <ButtonEmotion callback={() => console.log('click2')}>Кнопка2</ButtonEmotion>
                <ButtonEmotion size='lg' variant='warning' callback={() => console.log('click3')}>Кнопка3</ButtonEmotion>
            </div>
        </div>
    );
};

export default Home;
