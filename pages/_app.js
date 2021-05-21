import React, {useState} from "react";
import 'styles/app.scss'
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";

const MyApp = ({Component, pageProps}) => {

    // States
    const [showNav, setShowNav] = useState(false);

    return (
        <>
            <Header
                showNav={showNav}
                setShowNav={setShowNav}
            />
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}

export default MyApp
