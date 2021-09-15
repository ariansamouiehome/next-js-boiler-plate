import React from 'react';
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import ColumnInfoImage from "components/ColumnInfoImage";
import axios from 'axios';
import Button from 'components/Elements/Button';
import { Col, Container, Row } from "reactstrap";
import FullWidthVideoPlayer from "components/FullWidthVideoPlayer";

const Home = (props) => {

    const columnInfoImage = [
        {
            title: 'WHAT IS TRAUMA?',
            description: 'The reason I am changing this text is to get rid of the latin on the website as Chrome loves to keep telling me to translate it',
            image: 'images/icons/trauma.png',
            cta_show: false,
            cta_text: 'Find out more',
            cta_href: '/',
            cta_onClick: () => console.log('clicked'),
        },
        {
            title: 'HOW IT AFFECTS US',
            description: 'The reason I am changing this text is to get rid of the latin on the website as Chrome loves to keep telling me to translate it',
            image: 'images/icons/infection.png',
            cta_show: false,
            cta_text: 'Find out more',
            // cta_href: '/',
            cta_onClick: () => console.log('clicked'),
        },
        {
            title: 'HOW TO HEAL',
            description: 'The reason I am changing this text is to get rid of the latin on the website as Chrome loves to keep telling me to translate it',
            image: 'images/icons/heart.png',
            cta_show: false,
            cta_text: 'Find out more',
            // cta_href: '/',
            cta_onClick: () => console.log('clicked'),
        },
    ]

    return (
        <>
            <FullWidthImageTextBanner
                title={`BECOME THE <br /> BEST YOU`}
                description="The reason I am changing this text is to get rid of the latin on the website as Chrome loves to keep telling me to translate it"
                backgroundImage="https://c.pxhere.com/images/b5/34/8ffebf573eafb155f46e10c0e507-1617158.jpg!d"
                // href="/"
                cta_text="Find out more"
                onClick={() => console.log('clicked')}
                contentCenter
                // contentRight
            />

            <ColumnInfoImage
                title="WHY IS IT A STRUGGLE?"
                description="We will work towards finding out why things are the way they are. Once we find out the why, we are able to start healing from the core of that why in order to achieve resolution."
                data={columnInfoImage}
            />

            <FullWidthVideoPlayer
                title="HOW IT ALL STARTED"
                iframeSrc="https://www.youtube.com/embed/ac6nfXLYAok"
                thumbnailImage="https://c.pxhere.com/images/b5/34/8ffebf573eafb155f46e10c0e507-1617158.jpg!d"
            />
        </>
    )
}

export default Home;