import React from 'react';
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";

const Home = (props) => {

    console.log(props);

    return (
        <>
            <FullWidthImageTextBanner
                title="Arian Samouie"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque ea eos harum qui soluta temporibus. Asperiores at doloribus laborum minima necessitatibus odio sint? Dolorem dolorum eaque in neque voluptatum!"
                backgroundImage="https://joannamartin.com/wp-content/uploads/2016/04/top_header_bg.jpg"
                // href="/"
                cta_text="Find out more"
                onClick={() => console.log('clicked')}
                // contentCenter
                // contentRight
            />
        </>
    )
}

export default Home;