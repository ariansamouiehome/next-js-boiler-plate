import React from 'react';
// import PageComponents from 'containers/{PAGE}';
import {getContentfulEntries} from 'utils/contentfulApi';

const axios = require('axios');

const Page = (props) => {
    // return (<PageComponents {...props}/>)
    return (<div />)
}

// ----------------------------
// Contentful call tutorial
// https://www.youtube.com/watch?v=m9mNsYJbkNg
export async function getStaticProps() {
    const res = await getContentfulEntries('blog');
    return {
        props: {
            data: res.items
        }
    }
}
// ----------------------------
// Server side api call
// Page.getInitialProps = async () => {
//     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
//     const pageData = await res.data.results;
//     return {data: pageData};
// };
// ----------------------------

export default Page;