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

export const showAlert = (variant: string, message: string) => {
    return {
        type: 'ALERT_SHOW',
        payload: { variant, message },
    } as const;
};

export const hideAlert = () => {
    return {
        type: 'ALERT_HIDE',
    } as const;
};
