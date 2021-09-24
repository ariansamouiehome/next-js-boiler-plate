import React from 'react';
import Link from 'next/link';
import Loader from "components/Elements/Loader";

const Button = (props) => {

    const {onClick, className, style, href, type, loading, secondary} = props;

    if(href) {
        return (
            <Link href={href}>
                <a
                    className={`theme-button ${className ? className : ''} ${loading ? 'loading' : ''} ${secondary ? 'secondary' :''}`}
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
                className={`theme-button ${className ? className : ''} ${loading ? 'loading' : ''} ${secondary ? 'secondary' :''}`}
            >
                {loading ? <Loader button/> : props.children}
            </button>
        )
    }
}

export default Button;