import React from 'react';
import PageComponents from 'containers/Home';

const Page = (props) => {
    return (<PageComponents data={props.data}/>)
}

export default Page;