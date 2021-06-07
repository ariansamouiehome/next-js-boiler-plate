import React from 'react';
import {Col, Container, Row} from "reactstrap";
import Button from "components/Elements/Button";

const Home = (props) => {

    console.log(props);
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} style={{marginTop: 300, marginBottom: 30}}>
                        <Button>Click button</Button>
                    </Col>
                    <Col xs={12} style={{marginTop: 30, marginBottom: 300}}>
                        <Button
                            link
                            href="/"
                        >Click Link</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;