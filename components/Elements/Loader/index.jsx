import React from 'react';

const Loader = (props) => {

    const {button} = props

    return (
        <div className={`lds-ring ${button ? 'button' : ''}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader;