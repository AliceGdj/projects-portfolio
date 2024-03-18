import React from 'react';
import styles from '../styles/contact.module.css';

export default function Contact () {
  return (
    <section>
      <h2 id={"Contact"}>Contact</h2>
      <p>Do you want us to work together?</p> 
      <p>Feel free to contact me at : <strong><u>alice.grandj.49@gmail.com</u></strong></p>
      <br />
      <a href="mailto:alice.grandj.49@gmail.com" className={styles.button}>Send me an email !</a>
      <br />
      <br />
      <br />
    </section>
  );
}
