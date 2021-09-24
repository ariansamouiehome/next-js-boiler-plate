import React from 'react';
import {scrollToPosition} from "../../utils/functions";
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import ColumnInfoImage from "components/ColumnInfoImage";
import FullWidthVideoPlayer from "components/FullWidthVideoPlayer";
import ImageSideText from "components/ImageSideText";
import FullWidthInfo from "components/FullWidthInfo";
import BackImageFloatingContent from "components/BackImageFloatingContent";

const Home = () => {

    // Data
    const columnInfoImage = [
        {
            title: 'WHAT IS TRAUMA?',
            description: 'In the moment of trauma, a person experiences distress without resolve. When this happens our consciousness fragments into parts.',
            image: 'images/icons/trauma.png',
        },
        {
            title: 'HOW IT AFFECTS US',
            description: 'These parts are at war with each other which creates pain in our internal system. And instead of resolving it we tend to turn to what ever pill or substance we can take to drown out that pain.',
            image: 'images/icons/infection.png',
        },
        {
            title: 'HOW TO HEAL FROM IT',
            description: 'The way we heal from trauma is to get the fragmented parts of ourselves on the same page and in a position of agreement in order to achieve resolution.',
            image: 'images/icons/heart.png',
        },
    ]

    return (
        <>
            <FullWidthImageTextBanner
                title="BECOME THE MOST <br /> AUTHENTIC YOU"
                description="The further away we are from our most authentic self,<br /> the further away we are to healing."
                // backgroundImage="https://c.pxhere.com/images/b5/34/8ffebf573eafb155f46e10c0e507-1617158.jpg!d"
                backgroundImage="/images/peace.jpg"
                contentCenter
                showScrollArrow
                arrowsOnCLick={() => scrollToPosition('second-component')}
            />

            <div id="second-component">
                <ColumnInfoImage
                    title="WHY IS IT A STRUGGLE?"
                    description="We will work towards finding out why things are the way they are. Once we find out the why, we are able to start healing from the core of that why in order to achieve resolution."
                    data={columnInfoImage}
                    headingLine
                />
            </div>

            <FullWidthVideoPlayer
                title="MEET ARIAN"
                iframeSrc="https://www.youtube.com/embed/ac6nfXLYAok?rel=0"
                thumbnailImage="/images/profile.jpg"
            />

            <ColumnInfoImage
                title="“If you fail at something you don't want, you still fail. <br /> So why not fail at something you do want?”"
                noCurve
            />

            <ImageSideText
                backgroundImage="/images/self-love.jpg"
                title="What is self love?"
                description="We react the same way when speaking to ourselves as we would if someone else was talking to us. If a friend spoke to you the way you speak to yourself, would you still be their friend? The only difference is we can get away from that friend, but we cannot get away from ourselves.<br /><br />Learn how to accept the ego and change the judgmental thoughts you have about yourself given to you by others. <br /><br />Being aware of how you treat yourself is one of the most powerful things you can learn as a human.<br /><br /> To learn more about self love, get in touch."
                href="/book-a-call"
                cta_text="book a call"
            />

            <BackImageFloatingContent
                backgroundImage="/images/pattern-back-4.png"
                title="Learn how to stop seeking external validation."
                description="Send me a message and we can start the journey to figuring out why the things are the way they are. <br />You're never in the position where you can't start. the latin on the website as Chrome loves to keep telling me to translate it The reason I am changing this text is to get rid of the latin on the website as Chrome loves to keep telling me to translate it. <br /><br />The reason I am changing this text is to get rid of the latin on the website as Chrome loves to keep telling me to transl on the website as Chrome loves to keep telling me to translate it The reason I am changing this text is to get rid of the latin on the website as Chrome loves to keep telling me to translate it. The reason I am changing this text is to get rid of the latin on the website as Chrome loves to keep telling me to transl"
                href="/"
                cta_text="Book a call"
                headingLine
                curveBottom
            />

            <ImageSideText
                backgroundImage="/images/relationship.jpg"
                title="Do your relationships have the same outcome."
                description="The reason I am changing this text is to get rid of the latin on the website as Chrome loves to keep telling me to translate it. The reason I am changing this text is to get <br /><br /> <br />rid of the latin on the website as Chrome loves to keep telling me to translate it The reason I am changing this text is to get rid of the latin on the website as Chrome loves to keep telling me to translate it. The reason I am changing this text is to get rid of the latin on the website as Chrome loves to keep telling me to translate it The reason I am changing this text is to get rid of the latin on the website as Chrome loves to keep telling me to translate it"
                href="/"
                cta_text="find out more"
                contentSwitch
            />

            <FullWidthInfo
                hTag={3}
                title="LETS CONNECT"
                description="Send me a message and we can start the journey to figuring out why things are the way they are. <br />You're never in the position where you can't start."
                cta_show
                cta_href="/book-a-call"
                cta_text="Book a call"
                headingLine
            />
        </>
    )
}

export default Home;