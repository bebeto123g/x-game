import React from 'react';
import './Burger.scss';

type PropTypeBurger = {
    callback: () => void;
    classNames?: string;
    isActive: boolean;
};

const Burger = ({ callback, classNames = '', isActive }: PropTypeBurger) => {
    return <button className={`burger-menu${isActive ? ' active' : ''} ${classNames}`} onClick={callback}></button>;
};

export default Burger;
