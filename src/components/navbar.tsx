import React, { useState } from 'react';
import styles from '../styles/navbar.module.css';
import NavItem from './navItem';
import Link from 'next/link';

const MENU_LIST = [
    {
        text: "Profile"
    },
    {
        text: "Projects"
    },
    {
        text: "Contact"
    }
]

export const Navbar = () => {
    const [activeIdx, setActiveIdx] = useState(-1);
    const scrollTo = (el: string, ) => {
        let element = document.getElementById(el);
        let headerOffset = 100;
        let elementPosition = element.getBoundingClientRect().top;
        let offsetPosition = elementPosition + window.scrollY - headerOffset;
      
        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });

    }

    return (
        <nav className={styles.nav}>
            <div className={styles.nav_menulist}>
                {MENU_LIST.map((el, idx) => {
                    return (
                        <div 
                            onClick={() => {
                                setActiveIdx(idx); 
                                scrollTo(el.text);
                            }}
                            key={el.text}
                        >
                            <NavItem active={activeIdx === idx} {...el} />
                        </div>    
                    )  
                })}
                <div className={styles.download_resume}>
                    <Link href="https://github.com/AliceGdj/resume/raw/main/Resume_Alice_Grandjean.pdf">Download Resume</Link>
                </div>
            </div>
        </nav>
    )
}