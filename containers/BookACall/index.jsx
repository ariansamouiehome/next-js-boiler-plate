import React  from 'react';
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import ColumnInfoImage from "components/ColumnInfoImage";
import ContactForm from "components/ContactForm";
import FullWidthInfo from "components/FullWidthInfo";

const BookACall = () => {

    return (
        <>
            <FullWidthImageTextBanner
                title="LETS CONNECT"
                backgroundImage="/images/connect.webp"
                contentCenter
                alt
                noDarkOverlay
            />

            <ColumnInfoImage
                noCurve
                title="GET IN TOUCH"
                description="Fill out the form and tell me a little about yourself. <br />What you're looking for and some of the challenges you face regularly?"
            />

            <ContactForm />

            <FullWidthInfo
                hTag={3}
                title="Get to know Arian"
                description="Find out more about my background and why I have chosen to do what I do."
                cta_show
                cta_href="/meet-arian"
                cta_text="Meet Arian"
                headingLine
            />
        </>
    )
}

export default BookACall;