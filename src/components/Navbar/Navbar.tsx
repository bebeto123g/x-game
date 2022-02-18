import React, { MouseEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Burger from '../UI/Burger/Burger';

import './Navbar.scss';

const Navbar = () => {
    const [isVisibleMenu, setVisibleMenu] = useState(false);

    const burgerHandler = () => {
        setVisibleMenu((prev) => !prev);
    };

    const handlerClose = (event: MouseEvent<HTMLDivElement>) => {
        const target = event.target as Element;
        if (target.classList.contains('navbar__link')) {
            setVisibleMenu(false);
        }
    };

    return (
        <div className="navbar" onClick={handlerClose}>
            <div className="container navbar__wrapper">
                <div className="navbar__logo">X-GAME-O</div>
                <div className={`navbar__navigate${isVisibleMenu ? ' active' : ''}`}>
                    <NavLink to="/" className="navbar__link">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="navbar__link">
                        About
                    </NavLink>
                </div>
                <Burger callback={burgerHandler} classNames={'navbar__burger'} isActive={isVisibleMenu} />
            </div>
        </div>
    );
};

export default Navbar;
