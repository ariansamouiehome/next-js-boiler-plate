import React, {useState, useEffect} from "react";
import 'styles/app.scss';
import AOS from 'aos';
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";

const MyApp = ({Component, pageProps}) => {

    // States
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        AOS.init({
            offset: 250,
            once: true
        });
    }, []);

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
