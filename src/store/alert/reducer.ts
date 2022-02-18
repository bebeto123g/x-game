import { GetActionsType } from '../types';
import * as actions from './actions';

type AlertActionsType = GetActionsType<typeof actions>;

const initState = {
    isAlert: false,
    variant: null as string | null,
    message: null as string | null,
};

export function alertReducer(state = initState, action: AlertActionsType): typeof initState {
    switch (action.type) {
        case 'ALERT_SHOW':
            return {
                isAlert: true,
                variant: action.payload.variant,
                message: action.payload.message,
            };

        case 'ALERT_HIDE':
            return { ...initState };

        default:
            return state;
    }
}
