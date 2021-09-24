import React from 'react';
import Link from 'next/link';
import {navItems} from "../../../utils/globalArrays";
import {useRouter} from 'next/router';

const Nav = (props) => {

    const {className, showNav, setShowNav} = props;
    const router = useRouter();

    return (
        <nav className={`main-nav ${className ? className : ''} ${showNav ? 'active' : ''}`}>
            <ul className="nav-list">
                {navItems.map((item, key) => <li className="list-item" key={`nav-key-${key}`}>
                    <Link href={item.link}>
                        <a className={`item-link clickable ${router.asPath === item.link ? 'active' : ''}`} onClick={() => setShowNav(false)}>
                            {item.title}
                        </a>
                    </Link>
                </li>)}
            </ul>
        </nav>
    )
}

export default Nav;