import React from 'react';
import Image from 'next/image';
import styles from '../pages/index.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Alice Grandjean';

export default function Profile () {
  return (
    <div>
      <header className={styles.headerImage}>
          <Image
              priority
              src="/images/profile.jpeg"
              className={utilStyles.borderCircle}
              height={450}
              width={450}
              alt=""
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <section>
      <h3>Profile</h3>
        <p>I am a frontend developer with {new Date().getFullYear()-2019} years experience building and maintaining responsive websites. I worked for clients in the car industry (Volkswagen, Audi), in the finance industry (Claimer) and in the start-up world. My stack is primarily Javascript & React but I have some experience with Python, AWS, Docker, AEM...</p>
        <p>Additionally, I am very flexible and adaptable. I speak fluent English, German and French and I am a member of the Women in Tech movement in Berlin.</p>
      </section>
    </div>
  );
}
