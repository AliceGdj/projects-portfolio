import React from "react";
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

interface Props {
    href: string;
    text: string;
    active: boolean;
}

const NavItem = ({ href, text, active }: Props) => {
    return (
        <Link href={href} className={`${styles.nav_link} ${active && styles.active}`}>
            {text}
        </Link> 
    )
}

export default NavItem;
