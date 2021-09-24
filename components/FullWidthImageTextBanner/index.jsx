import React from 'react';
import {Col, Container, Row} from "reactstrap";
import Button from "components/Elements/Button";
import ScrollArrows from "components/Elements/ScrollArrows";

const FullWidthImageTextBanner = (props) => {

    const {
        backgroundImage,
        hTag,
        title,
        description,
        href,
        cta_text,
        onClick,
        contentCenter,
        contentRight,
        alt,
        arrowsOnCLick,
        showScrollArrow,
        noDarkOverlay,
        fadeBottom,
    } = props;

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
                return <h2 className="content-title heading-one" dangerouslySetInnerHTML={{__html: title}}/>
            }
            if (hTag === 3) {
                return <h3 className="content-title heading-one" dangerouslySetInnerHTML={{__html: title}}/>
            }
            if (hTag === 4) {
                return <h4 className="content-title heading-one" dangerouslySetInnerHTML={{__html: title}}/>
            }
            if (hTag === 5) {
                return <h5 className="content-title heading-one" dangerouslySetInnerHTML={{__html: title}}/>
            }
        } else {
            return <h1 className="content-title heading-one" dangerouslySetInnerHTML={{__html: title}}/>
        }
    }

    return (
        <Container fluid
                   className={`full-width-text-image-banner ${contentCenter ? 'content-center' : ''} ${contentRight ? 'content-right' : ''} ${alt ? 'alt' : ''}`}>
            <Col xs={12} className={`inner-image ${noDarkOverlay ? 'noDarkOverlay' : ''}`}
                 style={{backgroundImage: `url(${backgroundImage})`}}/>
            <Container>
                <Row>
                    <Col xs={12} md={8} lg={6} className="inner-content">
                        {hTagOutput()}
                        {description && <p className="body-copy" dangerouslySetInnerHTML={{__html: description}}/>}
                        {cta_text && ctaOutput()}
                    </Col>
                </Row>
                {showScrollArrow && <ScrollArrows onClick={arrowsOnCLick}/>}
            </Container>
        </Container>
    )
}

export default FullWidthImageTextBanner;