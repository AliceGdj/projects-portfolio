import React from 'react';
import styles from '../styles/contact.module.css';
import Link from 'next/link';

export default function Contact () {
  return (
    <section>
      <h2 id={"Contact"}>Contact</h2>
      <p>Do you want us to work together?</p> 
      <p>Feel free to contact me at : <strong><u>alice.grandj.49@gmail.com</u></strong></p>
      <br />
      <Link href="mailto:alice.grandj.49@gmail.com" className={styles.linkEmail}>Send me an email</Link>
      <br />
      <br />
      <br />
    </section>
  );
}
