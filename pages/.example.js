import React from 'react';
import PageComponents from 'containers/{PAGE}';
const axios = require('axios');

const Page = (props) => {
    return (<PageComponents data={props.data}/>)
}

Page.getInitialProps = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    const pageData = await res.data.results;
    return { data: pageData };
};

export default Page;