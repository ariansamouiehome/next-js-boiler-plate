import React from 'react';
import {Col, Container, Row} from "reactstrap";
import Button from "components/Elements/Button";

const FullWidthImageTextBanner = (props) => {

    const {backgroundImage, hTag, title, description, href, cta_text, onClick, contentCenter, contentRight} = props;

    const ctaOutput = () => {
        if (href) {
            return (
                <Button
                    href={href}
                    onClick={onClick}
                >{cta_text}</Button>
            )
        } else {
            return (
                <Button
                    onClick={onClick}
                >{cta_text}</Button>
            )
        }
    }

    const hTagOutput = () => {
        if (hTag) {
            if (hTag === 2) {
                return <h2 className="content-title heading-one">{title}</h2>
            }
            if (hTag === 3) {
                return <h3 className="content-title heading-one">{title}</h3>
            }
            if (hTag === 4) {
                return <h4 className="content-title heading-one">{title}</h4>
            }
            if (hTag === 5) {
                return <h5 className="content-title heading-one">{title}</h5>
            }
        } else {
            return <h1 className="content-title heading-one">{title}</h1>
        }
    }

    return (
        <Container fluid className={`full-width-text-image-banner ${contentCenter ? 'content-center' : '' } ${contentRight ? 'content-right' : ''}`}>
            <Container>
                <Row>
                    <Col xs={12} className="inner-image" style={{backgroundImage: `url(${backgroundImage})`}}/>
                    <Col xs={12} md={8} lg={6} className="inner-content">
                        {hTagOutput()}
                        <p className="body-copy">{description}</p>
                        {cta_text && ctaOutput()}
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default FullWidthImageTextBanner;