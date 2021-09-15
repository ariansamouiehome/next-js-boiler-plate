import React from 'react';
import Link from 'next/link';

const Button = (props) => {

    const {onClick, className, style, href, type} = props;

    if(href) {
        return (
            <Link href={href}>
                <a
                    className={`theme-button ${className ? className : ''}`}
                    onClick={onClick}
                >
                    {props.children}
                </a>
            </Link>
        )
    } else {
        return (
            <button
                onClick={onClick}
                style={style}
                type={type}
                className={`theme-button ${className ? className : ''}`}
            >
                {props.children}
            </button>
        )
    }
}

export default Button;