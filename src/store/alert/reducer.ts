import { GetActionsType } from '../types';
import * as actions from './actions';

type AlertActionsType = GetActionsType<typeof actions>;

const initState = {
    isAlert: false,
    variant: null as string | null,
    message: null as string | null,
};

export const AlertTypes = {
    show: 'ALERT_SHOW' as const,
    hide: 'ALERT_HIDE' as const,
};

export function alertReducer(state = initState, action: AlertActionsType): typeof initState {
    switch (action.type) {
        case AlertTypes.show:
            return {
                isAlert: true,
                variant: action.variant,
                message: action.message,
            };

        case AlertTypes.hide:
            return { ...initState };

        default:
            return state;
    }
}
