import React, {useEffect, useState} from 'react';

const axios = require('axios');
import {Col, Container, Row} from "reactstrap";

const Example = (props) => {

    console.log(props);

    // States
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // Functions
    const fetchData = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(function (response) {
                setData(response.data.results);
                setLoading(false);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        {!loading && <ul>
                            {data.map((item, key) => <li key={`list-key-${key}`}>{item.name}</li>)}
                        </ul>}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Example;