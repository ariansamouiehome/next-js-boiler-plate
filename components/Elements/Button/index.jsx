import React from 'react';
import Link from 'next/link';
import Loader from "components/Elements/Loader";

const Button = (props) => {

    const {onClick, className, style, href, type, loading} = props;

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
                className={`theme-button ${className ? className : ''} ${loading ? 'loading' : ''}`}
            >
                {loading ? <Loader button/> : props.children}
            </button>
        )
    }
}

export default Button;