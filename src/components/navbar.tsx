import React, { useState } from 'react';
import styles from '../styles/navbar.module.css';
import NavItem from './navItem';

const MENU_LIST = [
    {
        text: "Profile",
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
        <nav className={styles.nav}>
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
                <div className={styles.download_resume}>
                    <a href="https://github.com/AliceGdj/resume/raw/main/Resume_Alice_Grandjean.pdf">Download Resume</a>
                </div>
            </div>
        </nav>
    )
}