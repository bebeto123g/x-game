import React, { FC } from 'react';
import './Button.scss';

type ButtonPropsTypes = {
    variant?: 'danger' | 'info' | 'warning' | 'primary';
    size?: 'sm' | 'lg';
    callback: Function;
    children?: string | FC;
    classNames?: string;
};

const Button = ({ variant, size, children, classNames, callback }: ButtonPropsTypes) => {
    const variantClass = variant ? ` btn-${variant}` : '';
    const sizeClass = size ? ` btn-${size}` : '';
    const propClasses = classNames ? ` ${classNames}` : '';

    return (
        <button className={`btn${variantClass}${sizeClass}${propClasses}`} onClick={() => callback()}>
            {children}
        </button>
    );
};

export default Button;
