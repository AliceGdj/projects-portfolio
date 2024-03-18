import React from "react";
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

interface Props {
    text: string;
    active: boolean;
}

const NavItem = ({ text, active }: Props) => {
    return (
        <button className={`${styles.nav_link} ${active && styles.active}`}>
            {text}
        </button> 
    )
}

export default NavItem;
