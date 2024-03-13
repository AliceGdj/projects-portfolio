import React, { useState } from 'react';
import Link from 'next/link';
import styles from './layout.module.css';
import NavItem from './navItem';

const MENU_LIST = [
    {
        text: "About",
        href: "/"
    },
    {
        text: "Projects",
        href: "/"
    },
    {
        text: "Contact",
        href: "/"
    }
]

export const Navbar = () => {
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link style={{textDecoration: 'none'}} href={"/"} onClick={() => setActiveIdx(0)}> 
                    <h1 className="logo">Portfolio</h1>
                </Link>
                <div className={styles.nav_menulist}>
                    {MENU_LIST.map((el, idx) => {
                        return (
                            <div 
                                onClick={() => {
                                    setActiveIdx(idx); 
                                }} 
                                key={el.text}
                            >
                                <NavItem active={activeIdx === idx} {...el} />
                            </div>    
                        )  
                    })}
                    {/* TODO add in the projects section */}
                    {/* <a href="https://github.com/AliceGdj/resume/raw/main/Resume_Alice_Grandjean.pdf" className={styles.download_resume}>Download Resume</a> */}
                </div>
            </nav>
        </header>
    )
}