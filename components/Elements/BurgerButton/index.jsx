import React from 'react';

const BurgerButton = (props) => {

    const {activeState, setState} = props;

    return (<button
            className={`burger-button ${activeState ? 'active' : ''}`}
            onClick={() => setState(!activeState)}
        >
            <span/>
            <span/>
            <span/>
        </button>)
}

export default BurgerButton;