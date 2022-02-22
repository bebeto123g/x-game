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
const rootReducer = combineReducers({ alert, game, users });

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));

export type RootReducerType = typeof rootReducer;
// export type RootStateType = ReturnType<typeof store.getState>; костыль
export type RootStateType = ReturnType<RootReducerType>;

// export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
// костьль
// export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
