import React from 'react';
import {Col, Container, Row} from "reactstrap";

const Footer = () => {
    return (
        <footer className="main-footer">
            <Container>
                <Row>
                    <Col xs={12} style={{marginBottom: 400}}>
                        Footer
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;