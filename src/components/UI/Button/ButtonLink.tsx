import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ButtonPropsTypes } from './Button';

interface ButtonLinkPropsTypes extends Omit<ButtonPropsTypes, 'callback'>{
    to: string
}

const ButtonLink: FC<ButtonLinkPropsTypes> = ({ variant, size, children, classNames, to }) => {
    const variantClass = variant ? ` btn-${variant}` : '';
    const sizeClass = size ? ` btn-${size}` : '';
    const propClasses = classNames ? ` ${classNames}` : '';

    return (
        <Link to={to} className={`btn${variantClass}${sizeClass}${propClasses}`}>
            {children}
        </Link>
    );
};

export default ButtonLink;
