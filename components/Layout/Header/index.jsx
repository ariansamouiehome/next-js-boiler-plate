import React from 'react';
import Link from 'next/link'
import {Col, Container, Row} from "reactstrap";
import Nav from "components/Layout/Nav";
import BurgerButton from "components/Elements/BurgerButton";

const Header = (props) => {

    const {showNav, setShowNav} = props;

    return (<>
        <header className="main-header">
            <Container>
                <Row>
                    <Col xs={12} className="main-header-inner">
                        <Link href="/">
                            <a className="header-logo">
                                <img src="/images/vercel.svg" alt="brand logo" className="header-logo-image"/>
                            </a>
                        </Link>
                        <Nav className="desktop"/>
                        <BurgerButton
                            activeState={showNav}
                            setState={setShowNav}
                        />
                    </Col>
                </Row>
            </Container>
        </header>
        <Nav
            showNav={showNav}
            setShowNav={setShowNav}
        />
    </>)
}

export default Header;