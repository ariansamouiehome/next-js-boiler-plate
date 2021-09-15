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
                title="CONNECT WITH ME"
                description="Fill out the form and tell me a little about yourself. What you are looking for and what some of your challenges are"
            />

            <ContactForm />
        </>
    )
}

export default Contact;