import React from 'react';
import Image from 'next/image';
import styles from '../styles/utils.module.css';

export default function Profile () {
  return (
    <div>
      <header className={styles.headerImage}>
          <Image
              priority
              src="/images/profile.jpeg"
              className={styles.full_rounded}
              height={450}
              width={450}
              alt=""
          />
          <h1>Alice Grandjean</h1>
      </header>
      <section>
      <h2 id={"Profile"}>Profile</h2>
        <p>I am a Frontend Developer with <strong>{new Date().getFullYear()-2019} years of experience</strong> building and maintaining responsive websites.
        I worked for various clients from startups to big companies and I developed (or created from scratch) various products for the car, finance or health industries.
        My stack is primarily <strong>Javascript, Typescript, React</strong> and I include in my skills <strong>Node, Python, AWS, Docker, REST and GraphQL</strong>.</p>
        <br />
        <p>Since 2022 I am available for <strong>freelance work</strong> and I provide my expertise for Web Applications, Single Page Applications, and Progressive Web Applications (PWAs).
          In my everyday work, I care deeply about users' needs, performance optimization, accessibility and communication with the team.</p>
      </section>
      <br />
    </div>
  );
}
