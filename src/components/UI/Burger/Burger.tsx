import React, { FC } from 'react';
import './Burger.scss';

type BurgerPropTypes = {
    callback: () => void;
    classNames?: string;
    isActive: boolean;
};

const Burger: FC<BurgerPropTypes> = ({ callback, classNames = '', isActive }) => {
    return <button className={`burger-menu${isActive ? ' active' : ''} ${classNames}`} onClick={callback} />;
};

export default Burger;
