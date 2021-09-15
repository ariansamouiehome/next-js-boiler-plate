import React  from 'react';
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import ColumnInfoImage from "components/ColumnInfoImage";
import ContactForm from "components/ContactForm";

const Contact = () => {

    return (
        <>
            <FullWidthImageTextBanner
                title="GET IN TOUCH"
                backgroundImage="https://c.pxhere.com/images/b5/34/8ffebf573eafb155f46e10c0e507-1617158.jpg!d"
                contentCenter
                alt
            />

            <ColumnInfoImage
                alt
                title="LETS CONNECT"
                description={`Fill out the form and tell me a little about yourself. <br />What are you looking for and what are some of the challenges you face regularly?`}
            />

            <ContactForm />
        </>
    )
}

export default Contact;