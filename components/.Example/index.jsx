import React from 'react';
import BurgerButton from "components/Elements/BurgerButton";
import {Col, Container, Row} from "reactstrap";

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

            <Container>
                <Row>
                    <Col xs={12}>
                        Example
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ExampleComponent;