import React from 'react';
import {Col, Container, Row} from "reactstrap";
import Button from "components/Elements/Button";

const ColumnInfoImage = (props) => {

    // Example of data for mapped array
    // {
    //     title:'',
    //     description: '',
    //     image: '',
    //     cta_text: '',
    //     cta_href: '',
    //     cta_onClick: () => console.log('clicked'),
    // },

    const {hTag, title, description, data, noCurve, headingLine} = props;

    const ctaOutput = (item) => {
        if (item.cta_show) {
            if (item.cta_href) {
                return (
                    <Button
                        href={item.cta_href}
                        onClick={item.cta_onClick}
                    >{item.cta_text}</Button>
                )
            } else {
                return (
                    <Button
                        onClick={item.cta_onClick}
                    >{item.cta_text}</Button>
                )
            }
        }
    }

    const hTagOutput = () => {
        if (hTag) {
            if (hTag === 1) {
                return <h1 className={`content-head-title ${headingLine ? 'heading-mark' : ''}`} dangerouslySetInnerHTML={{ __html: title }}/>
            }
            if (hTag === 3) {
                return <h3 className={`content-head-title ${headingLine ? 'heading-mark' : ''}`} dangerouslySetInnerHTML={{ __html: title }}/>
            }
            if (hTag === 4) {
                return <h4 className={`content-head-title ${headingLine ? 'heading-mark' : ''}`} dangerouslySetInnerHTML={{ __html: title }}/>
            }
            if (hTag === 5) {
                return <h5 className={`content-head-title ${headingLine ? 'heading-mark' : ''}`} dangerouslySetInnerHTML={{ __html: title }}/>
            }
        } else {
            return <h2 className={`content-head-title ${headingLine ? 'heading-mark' : ''}`} dangerouslySetInnerHTML={{ __html: title }}/>
        }
    }

    return (
        <Container className={`column-info-image ${noCurve ? 'noCurve' : ''}`} fluid data-aos>
            <Container className={data ? '' : 'no-data'}>
                <Row>
                    <Col xs={12} className="inner-content-head">
                        {hTagOutput()}
                        <p className="body-copy" dangerouslySetInnerHTML={{ __html: description }} />
                    </Col>
                    {data?.map((item, key) => <Col xs={12} sm={6} md={4} className={`inner-content-each ${item.cta_show ? '' : 'remove-bottom-padding'}`}
                                                  key={`column-info-image-data-key-${key}`}>
                        <img src={item.image} alt="content image" className="inner-content-image"/>
                        <h3 className="inner-content-heading">{item.title}</h3>
                        <p className="body-copy">{item.description}</p>
                        <div className="inner-content-each-footer">
                            {ctaOutput(item)}
                        </div>
                    </Col>)}
                </Row>
            </Container>
        </Container>
    )
}

export default ColumnInfoImage;