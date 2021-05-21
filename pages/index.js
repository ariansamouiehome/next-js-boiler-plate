import React from 'react';
import Home from 'containers/Home';
const axios = require('axios');

const Index = (props) => {
    return (<Home data={props.data}/>)
}

Index.getInitialProps = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    const pageData = await res.data.results;
    return { data: pageData };
};

export default Index;