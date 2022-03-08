import React, { FC } from 'react';

export type ButtonPropsTypes = {
    variant?: 'danger' | 'info' | 'warning' | 'primary';
    size?: 'sm' | 'lg';
    callback: () => void;
    classNames?: string;
    disabled?: boolean;
};

const Button: FC<ButtonPropsTypes> = ({
    variant,
    size,
    disabled = false,
    children,
    classNames,
    callback,
}) => {
    const variantClass = variant ? ` btn-${variant}` : '';
    const sizeClass = size ? ` btn-${size}` : '';
    const propClasses = classNames ? ` ${classNames}` : '';

    return (
        <button
            className={`btn${variantClass}${sizeClass}${propClasses}`}
            onClick={() => callback()}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
