import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import { alertReducer as alert } from './alert/reducer';
import { gameReducer as game } from './game/reducer';
import { usersReducer as users } from './users/reducer';

type SomeType<T> = T extends { [key: string]: infer U } ? U : never;
export type GetActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<SomeType<T>>;

// для использования Redux-devTools
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({ alert, game, users }),
    composeEnhancers(applyMiddleware(reduxThunk))
);

export type RootState = ReturnType<typeof store.getState>;
