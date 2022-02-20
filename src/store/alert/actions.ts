import { AlertTypes } from './reducer';
// export const showAlert = (variant: string, message: string) => {
//     return (dispatch: any) => {
//         const tid = setTimeout(() => {
//             dispatch(hideAlert());
//         }, 3000);

//         dispatch({
//             type: 'ALERT_SHOW',
//             payload: { variant, message, tid },
//         });
//     };
// };

// export const actions = {
//     showAlert: (variant: string, message: string) => ({ type: 'ALERT_SHOW', payload: { variant, message } } as const),
//     hideAlert: () => ({ type: 'ALERT_HIDE', payload: {} } as const),
// };

// после AlertTypes as const, в actions писать as const видимо необязательно

export const showAlert = (variant: string, message: string) => ({ type: AlertTypes.show, variant, message });
export const hideAlert = () => ({ type: AlertTypes.hide });
