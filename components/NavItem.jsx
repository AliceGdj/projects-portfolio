import React from "react";
import Link from 'next/link';
import styles from './layout.module.css';

const NavItem = ({ href, text, active }) => {
    return (
        <Link style={{textDecoration: 'none'}} href={href}>
            <a className={`${styles.nav_link} ${active ? `${styles.active}` : ""}`}>
                {text}
            </a>
        </Link> 
    )
}

export default NavItem;
