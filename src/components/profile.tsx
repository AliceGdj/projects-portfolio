import React from 'react';
import styles from '../styles/utils.module.css';


export default function Profile () {
  return (
    <section>
      <h2 id={"Profile"}>Profile</h2>
      <br />
      <p>
        I am a Software Developer with <span className={styles.highlighted}>5 years of experiences</span> building and maintaining responsive websites.
        I have worked with a diverse range of clients, from startups to large corporations, and have developed existing projects and greenfield projects in the automotive, finance, and healthcare industries.
      </p>
      <br />
      <p>
        My stack is primarily frontend with <span className={styles.highlighted}>Javascript, Typescript, ReactJS and NextJS</span> but my skills also include <span className={styles.highlighted}>Node, Python, AWS, REST and GraphQL</span>.
      </p>
      <br />
      <p>
        Since 2022 I am available for <span className={styles.highlighted}>freelance work</span> and I provide my expertise for Web Applications, Single Page Applications and Progressive Web Applications.
        I care deeply about the user&apos;s experience, accessibility and team communication. 
        I am highly adaptable and proficient in agile project planning and coordination, with the <span className={styles.highlighted}>ability to work effectively in German, English, and French</span>.
      </p>
      <br />
    </section>
  );
}
