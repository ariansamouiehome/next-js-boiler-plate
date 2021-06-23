import React from 'react';
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import ColumnInfoImage from "components/ColumnInfoImage";

const Home = (props) => {

    console.log(props);

    const columnInfoImage = [
        {
            title:'This is a title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque ea eos harum qui soluta temporibus',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png',
            cta_text: 'Find out more',
            cta_href: '/',
            cta_onClick: () => console.log('clicked'),
        },
        {
            title:'Another title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque ea eos ',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png',
            cta_text: 'Find out more',
            // cta_href: '/',
            cta_onClick: () => console.log('clicked'),
        },
        {
            title:'Third one',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png',
            cta_text: 'Find out more',
            cta_href: '/',
            cta_onClick: () => console.log('clicked'),
        },
        {
            title:'lets have another',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque ea eos harum qui soluta temporibus',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png',
            cta_text: 'Find out more',
            // cta_href: '/',
            cta_onClick: () => console.log('clicked'),
        },
    ]

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

            <ColumnInfoImage
                title="What do we do?"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque ea eos harum qui soluta temporibus."
                data={columnInfoImage}
            />
        </>
    )
}

export default Home;