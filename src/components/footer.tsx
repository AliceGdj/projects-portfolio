import React from 'react';
import styles from '../styles/footer.module.css';
import Image from 'next/image';
import Link from 'next/link'

export default function Contact () {
  return (
        <footer className={styles.footer}>
            <p>
                Copyright © 2024 - Alice Grandjean
            </p>
            <div>
                <Link href="https://www.linkedin.com/in/alice-grandjean-0b536b90/" target="_blank" title="Alice's LinkedIn profile">
                    <Image
                        priority
                        src={"/images/linkedin.png"}
                        height={50}
                        width={50}
                        alt="link to Alice's linkedin profile"
                    />
                </Link>
                <Link href="https://github.com/AliceGdj" target="_blank" title="Alice's Github profile">
                    <Image
                        priority
                        src={"/images/github.png"}
                        height={50}
                        width={50}
                        alt="link to Alice's github profile"
                    />
                </Link>
                <Link href="https://www.xing.com/profile/Alice_Grandjean/web_profiles" target="_blank" title="Alice's Xing profile">
                    <Image
                        priority
                        src={"/images/xing.png"}
                        height={50}
                        width={50}
                        alt="link to Alice's xing profile"
                    />
                </Link>
            </div>
        </footer>
  );
}
