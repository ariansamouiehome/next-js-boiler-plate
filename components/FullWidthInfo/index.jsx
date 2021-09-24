import React from 'react';
import {Col, Container, Row} from "reactstrap";
import Button from "components/Elements/Button";

const FullWidthInfo = (props) => {

    const {hTag, title, description, cta_show, cta_href, cta_onClick, cta_text, headingLine, alt} = props;

    const ctaOutput = () => {
        if (cta_href) {
            return (
                <Button
                    href={cta_href}
                    onClick={cta_onClick}
                    secondary={!alt}
                >{cta_text}</Button>
            )
        } else {
            return (
                <Button
                    onClick={cta_onClick}
                    secondary={!alt}
                >{cta_text}</Button>
            )
        }
    }

    const hTagOutput = () => {
        if (hTag) {
            if (hTag === 1) {
                return <h1 className={`content-head-title ${headingLine ? 'heading-mark' : ''}`}
                           dangerouslySetInnerHTML={{__html: title}}/>
            }
            if (hTag === 3) {
                return <h3 className={`content-head-title ${headingLine ? 'heading-mark' : ''}`}
                           dangerouslySetInnerHTML={{__html: title}}/>
            }
            if (hTag === 4) {
                return <h4 className={`content-head-title ${headingLine ? 'heading-mark' : ''}`}
                           dangerouslySetInnerHTML={{__html: title}}/>
            }
            if (hTag === 5) {
                return <h5 className={`content-head-title ${headingLine ? 'heading-mark' : ''}`}
                           dangerouslySetInnerHTML={{__html: title}}/>
            }
        } else {
            return <h2 className={`content-head-title ${headingLine ? 'heading-mark' : ''}`}
                       dangerouslySetInnerHTML={{__html: title}}/>
        }
    }

    return (
        <Container className={`full-width-info ${alt ? 'alt' : ''}`} fluid data-aos>
            <Container>
                <Row>
                    <Col xs={12} className="inner-content-head">
                        {hTagOutput()}
                        <p className="body-copy" dangerouslySetInnerHTML={{__html: description}}/>
                        <div className="theme-button-wrapper">
                            {cta_show && ctaOutput()}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default FullWidthInfo;