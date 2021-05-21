import React from 'react';
import Link from 'next/link'

const Nav = (props) => {

    const {className, showNav, setShowNav} = props;

    const navItems = [
        {
            title: "About Us",
            link: '/'
        },
        {
            title: "Our services",
            link: '/'
        },
        {
            title: "Prices",
            link: '/'
        },
        {
            title: "Book a call",
            link: '/'
        },
    ]
    return (
        <nav className={`main-nav ${className ? className : ''} ${showNav ? 'active' : ''}`}>
            <ul className="nav-list">
                {navItems.map((item, key) => <li className="list-item" key={`nav-key-${key}`}>
                    <Link href={item.link}>
                        <a className="item-link clickable" onClick={() => setShowNav(false)}>
                            {item.title}
                        </a>
                    </Link>
                </li>)}
            </ul>
        </nav>
    )
}

export default Nav;