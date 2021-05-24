import React from 'react';
import {Col, Container, Row} from "reactstrap";
import Loader from "components/Elements/Loader";

const ListWrapper = (props) => {

    // Props Info
    // listWrapperItems should be an array of the components
    // If no loading state then remove prop
    // loadingHeight determines the height of the wrapper that the loader sits in. 400 by default

    const {listWrapperItems, loadingState, loadingHeight} = props;

    const loadingHeightStyle = {
        minHeight: loadingHeight ? loadingHeight : 400,
    }

    return (
        <Container className="list-wrapper">
            <Row>
                {loadingState ?
                    <Col xs={12} className="list-wrapper-loader" style={loadingHeightStyle}>
                        <Loader/>
                    </Col>
                    : listWrapperItems.map((item, key) => <Col xs={12} sm={6} md={4} xl={3}
                                                               className="list-wrapper-each"
                                                               key={`list-wrapper-each-key-${key}`}>
                        {item}
                    </Col>)}
            </Row>
        </Container>
    )
}

export default ListWrapper;