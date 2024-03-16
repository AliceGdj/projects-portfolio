import React from "react";
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

interface Props {
    text: string;
    active: boolean;
}

const NavItem = ({ text, active }: Props) => {
    return (
        <div className={`${styles.nav_link} ${active && styles.active}`}>
            {text}
        </div> 
    )
}

export default NavItem;
