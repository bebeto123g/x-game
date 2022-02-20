import React, { FC, lazy, LazyExoticComponent } from 'react';
import Home from '../views/Home';

export type RouteType = {
    Element: FC | LazyExoticComponent<FC>; // отсебятина, не копировать
    path: string;
    isAuth: boolean;
    title?: string;
};

export const routes: Array<RouteType> = [
    {
        path: '/',
        Element: Home,
        isAuth: false,
        title: 'Главная',
    },
    {
        path: '/about',
        Element: lazy(() => import('../views/About')),
        isAuth: false,
        title: 'О проекте',
    },
    {
        path: '/game',
        Element: lazy(() => import('../views/Game')),
        isAuth: false,
        title: 'Игра',
    },
];
