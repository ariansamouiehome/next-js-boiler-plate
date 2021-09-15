import React from 'react';

const ScrollArrows = (props) => {

    const {onClick} = props;

    return (<button className="scroll-button" onClick={onClick}>
        <div className="scroll-round">
            <div id="cta">
                <span className="arrow primera next "></span>
                <span className="arrow segunda next "></span>
            </div>
        </div>
    </button>);
}

export default ScrollArrows;