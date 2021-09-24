import React from 'react';
import {Col, Container, Row} from "reactstrap";
import Link from "next/link";
import {navItems} from "../../../utils/globalArrays";
import {useRouter} from "next/router";

const Footer = () => {

    const router = useRouter();

    return (
        <footer className={`main-footer ${router.asPath === '/admin' ? 'admin' : ''}`} data-aos>
            <Container>
                <Row>
                    <Col xs={12} className="main-footer-content">
                        <Link href="/">
                            <a className="footer-logo">
                                <img src="/images/logo-single.svg" alt="brand logo" className="footer-logo-image"/>
                            </a>
                        </Link>

                        <ul className="social-media-list">
                            <li className="list-item">
                                <a href="https://www.instagram.com/arian_samouie" target="_blank" className="item-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"/></svg>
                                </a>
                            </li>
                            <li className="list-item">
                                <a href="https://www.youtube.com/channel/UCJLf_QdB9icW3mhCPX66brg" target="_blank" className="item-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"/></svg>
                                </a>
                            </li>
                            <li className="list-item">
                                <a href="https://www.facebook.com/arian.samouie/" target="_blank" className="item-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
                                        <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="list-item">
                                <a href="https://vm.tiktok.com/ZMRQTuLnH/" target="_blank" className="item-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M38.4,21.68V16c-2.66,0-4.69-.71-6-2.09a8.9,8.9,0,0,1-2.13-5.64V7.86L24.9,7.73s0,.23,0,.54V30.8a5,5,0,1,1-3.24-5.61v-5.5a10.64,10.64,0,0,0-1.7-.14A10.36,10.36,0,1,0,30.32,29.91a10.56,10.56,0,0,0-.08-1.27V19.49A14.48,14.48,0,0,0,38.4,21.68Z"/></svg>
                                </a>
                            </li>
                        </ul>

                        <ul className="footer-nav-list">
                            {navItems.map((item, key) => <li className="list-item" key={`nav-key-${key}`}>
                                <Link href={item.link}>
                                    <a className={`item-link clickable ${router.asPath === item.link ? 'active' : ''}`}>
                                        {item.title}
                                    </a>
                                </Link>
                            </li>)}
                        </ul>
                    </Col>
                    <Col xs={12} className="main-footer-footer">
                        <p className="body-copy">Website designed and developed by Arian Samouie</p>
                        <p className="body-copy">&copy; Copyright {new Date().toLocaleDateString('en-GB')}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;