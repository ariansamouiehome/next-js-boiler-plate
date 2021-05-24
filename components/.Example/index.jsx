import React from 'react';
import BurgerButton from "components/Elements/BurgerButton";

const ExampleComponent = ({ data, showAnotherBurgerButton }) => {

    return (
        <>
            <div>
                Example
            </div>

            <div id='exampleText'>
                Example Text
            </div>

            <p id='exampleText'>
                Example Text
            </p>

            <span>
                {data}
            </span>

            <span id='verboseData'>
                {data} - this is the data prop
            </span>

            <BurgerButton />
            {showAnotherBurgerButton && <BurgerButton />}
        </>
    )
}

export default ExampleComponent;