import React from 'react';
import {Col, Container, Row} from "reactstrap";
import Button from "components/Elements/Button";

const BackImageFloatingContent = (props) => {

    const {
        backgroundImage,
        hTag,
        title,
        description,
        href,
        cta_text,
        onClick,
        curveBottom,
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
                return <h2 className="content-title heading-one heading-mark mark-left" dangerouslySetInnerHTML={{ __html: title }} />
            }
            if (hTag === 1) {
                return <h1 className="content-title heading-one heading-mark mark-left" dangerouslySetInnerHTML={{ __html: title }} />
            }
            if (hTag === 4) {
                return <h4 className="content-title heading-one heading-mark mark-left" dangerouslySetInnerHTML={{ __html: title }} />
            }
            if (hTag === 5) {
                return <h5 className="content-title heading-one heading-mark mark-left" dangerouslySetInnerHTML={{ __html: title }} />
            }
        } else {
            return <h3 className="content-title heading-one heading-mark mark-left" dangerouslySetInnerHTML={{ __html: title }} />
        }
    }

    return (
        <Container fluid className={`back-image-floating-content ${curveBottom ? 'curve-bottom' : ''}`} data-aos>
            <Col xs={12} className="inner-image" style={{backgroundImage: `url(${backgroundImage})`}}/>
            <Container>
                <Row>
                    <Col xs={12} xl={10} className="inner-content">
                        {title && hTagOutput()}
                        {description && <p className="body-copy" dangerouslySetInnerHTML={{ __html: description }} />}
                        {cta_text && <div className="theme-button-wrapper">{ctaOutput()}</div>}
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default BackImageFloatingContent;