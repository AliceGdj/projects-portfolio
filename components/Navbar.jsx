import React, { useState } from 'react';
import Link from 'next/link';
import NavItem from './NavItem';
import styles from './layout.module.css';

const MENU_LIST = [
    {
        text: "Projects",
        href: "/projects"
    },
    {
        text: "Skills",
        href: "/skills"
    },
    {
        text: "Contact",
        href: "/contact"
    }
]

export const Navbar = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link style={{textDecoration: 'none'}} href={"/"}> 
                    <a onClick={() => setActiveIdx(0)}> 
                        <h1 className="logo">Portfolio</h1>
                    </a>
                </Link>
                <div onClick={() => setNavActive(!navActive)} className={styles.nav_menubar}>
                    {/* this is the hamburger for small viewport */}
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${navActive ? `${styles.active}` : ""} ${styles.nav_menulist}`}>
                    {MENU_LIST.map((el, idx) => {
                        return (
                            <div 
                                onClick={() => {
                                    setActiveIdx(idx); 
                                    setNavActive(false);
                                }} 
                                key={el.text}
                            >
                                <NavItem active={activeIdx === idx} {...el} />
                            </div>    
                        )  
                    })}
                </div>
            </nav>
        </header>
    )
}