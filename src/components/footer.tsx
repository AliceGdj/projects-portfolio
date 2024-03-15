import React from 'react';
import styles from '../styles/utils.module.css';
import Image from 'next/image';

export default function Contact () {
  return (
        <section className={styles.footer}>
            <p>
                Copyright © 2024 - Alice Grandjean
            </p>
            <a href="https://www.linkedin.com/in/alice-grandjean-0b536b90/" target="_blank">
                <Image
                    priority
                    src={"/images/linkedin.png"}
                    height={50}
                    width={50}
                    alt=""
                />
            </a>
            <a href="https://github.com/AliceGdj" target="_blank">
                <Image
                    priority
                    src={"/images/github.png"}
                    height={50}
                    width={50}
                    alt=""
                />
            </a>
            <a href="https://www.xing.com/profile/Alice_Grandjean/web_profiles" target="_blank">
                <Image
                    priority
                    src={"/images/xing.png"}
                    height={50}
                    width={50}
                    alt=""
                />
            </a>
        </section>
  );
}
