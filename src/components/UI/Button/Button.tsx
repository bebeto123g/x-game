import React, { FC } from 'react';

export type ButtonPropsTypes = {
    variant?: 'danger' | 'info' | 'warning' | 'primary';
    size?: 'sm' | 'lg';
    callback: () => void;
    classNames?: string;
};

const Button: FC<ButtonPropsTypes> = ({ variant, size, children, classNames, callback }) => {
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
