import React from 'react';
import Link from 'next/link';

const Button = (props) => {

    const {onCLick, className, style, link, href} = props;

    if(link) {
        return (
            <Link href={href}>
                <a className={`theme-button ${className ? className : ''}`}>
                    {props.children}
                </a>
            </Link>
        )
    } else {
        return (
            <button
                onClick={onCLick}
                style={style}
                className={`theme-button ${className ? className : ''}`}
            >
                {props.children}
            </button>
        )
    }
}

export default Button;