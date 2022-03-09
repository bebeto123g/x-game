import React, { FC } from 'react';
import styled from '@emotion/styled';

export type ButtonPropsTypes = {
    variant?: 'danger' | 'info' | 'warning' | 'primary' | 'secondary';
    size?: 'sm' | 'lg';
    callback: () => void;
    disabled?: boolean;
};

const ButtonEmotion: FC<ButtonPropsTypes> = ({
    disabled = false,
    children,
    variant = 'secondary',
    size,
    callback,
}) => {
    return (
        <ButtonStyled size={size} onClick={() => callback()} disabled={disabled} variant={variant}>
            {children}
        </ButtonStyled>
    );
};

export default ButtonEmotion;


type ButtonStyledPropsType = Omit<ButtonPropsTypes, 'callback'>;

const bgColor = (props: ButtonStyledPropsType) => {
    switch (props.variant) {
        case 'primary':
            return 'cadetblue';
        case 'danger':
            return '#bb2d3b';
        case 'info':
            return '#31d2f2';
        case 'warning':
            return '#ffca2c';
        default:
            return '#5c636a'
    }
};

const btnSizeGap = (props: ButtonStyledPropsType) => {
    switch (props.size) {
        case 'lg':
            return '10px 20px';
        case 'sm':
            return '6px 8px';
        default:
            return '8px 16px'
    }
}

const btnSizeFont = (props: ButtonStyledPropsType) => {
    switch (props.size) {
        case 'lg':
            return '20px';
        case 'sm':
            return '14px';
        default:
            return '16px'
    }
}

const ButtonStyled = styled.button<ButtonStyledPropsType>`
    padding: ${btnSizeGap};
    border-radius: 4px;
    transition: box-shadow 0.2s, background-color 0.5s;
    color: white;
    text-shadow: 0 0 4px gray;
    box-shadow: 0 0 4px 0 ${bgColor};
    font-size: ${btnSizeFont};
    text-decoration: none;
    background-color: ${bgColor};
    border: 1px solid ${bgColor};
    cursor: pointer;
    margin-top: 20px;

    &:disabled {
        cursor: not-allowed;
    }
`;
