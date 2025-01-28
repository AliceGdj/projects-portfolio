import React from 'react';
import styles from '../styles/utils.module.css';


export default function Profile () {
  return (
    <section>
      <h2 id={"Profile"}>Profile</h2>
      <p>I am a Software Developer with <span className={styles.boldStyle}>5 years of experiences</span> building and maintaining responsive websites.
      I worked for various clients from startups to big companies and I developed or created from scratch multiple products for the car, finance or health industries.</p>
      <br />
      <p>My stack is primarily frontend with <span className={styles.boldStyle}>Javascript, Typescript, ReactJS and NextJS</span> but my skills also include <span className={styles.boldStyle}>Node, Python, AWS, REST and GraphQL</span>.</p>
      <br />
      <p>Since 2022 I am available for <span className={styles.boldStyle}>freelance work</span> and I provide my expertise for Web Applications, Single Page Applications and Progressive Web Applications.
        In my everyday work, I care deeply about the <span className={styles.boldStyle}>user&apos;s experience</span>, <span className={styles.boldStyle}>accessibility</span> and <span className={styles.boldStyle}>team communication</span>.</p>
        <br />
    </section>
  );
}
