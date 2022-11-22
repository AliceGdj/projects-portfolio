import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import {Navbar} from "./Navbar";

const name = 'Alice Grandjean';
export const siteTitle = 'Portfolio Alice';

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Portfolio from a React Enthousiast"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.headerImage}>
          {home && (
            <>
              <Image
                  priority
                  src="/images/profile.jpeg"
                  className={utilStyles.borderCircle}
                  height={450}
                  width={450}
                  alt=""
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          )}
        </div>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
              ← 
              <Link href="/">Back to home</Link>
          </div>
        )}
      </div>
    </>
  );
}