import React  from 'react';
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import ColumnInfoImage from "components/ColumnInfoImage";

const Contact = () => {

    return (
        <>
            <FullWidthImageTextBanner
                title="BOOK A CALL"
                description="The reason I am changing this text is to get rid of the latin on the website as Chrome loves to keep telling me to translate it"
                backgroundImage="https://c.pxhere.com/images/b5/34/8ffebf573eafb155f46e10c0e507-1617158.jpg!d"
                contentCenter
                alt
            />

            <ColumnInfoImage
                alt
                title="WHY IS IT A STRUGGLE?"
                description="We will be working towards finding out why things are the way they are for you. Once we find out the why, then we are able to start healing from the core of that why."
            />
        </>
    )
}

export default Contact;