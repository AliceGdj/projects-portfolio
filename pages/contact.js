import Layout from '../components/layout';
import Head from 'next/head';
import { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Projects () {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Contact</h2>
                <ul>
                    <FontAwesomeIcon icon={faEnvelope} size="lg"/> alice.grandj.49@gmail.com
                </ul>
                <ul>
                    <FontAwesomeIcon icon={faLocationDot} size="lg"/> Berlin
                </ul>
                <ul> 
                    <Image
                        src="/images/linkedin.png"
                        height={30}
                        width={30}
                        alt=""
                    /> 
                    <Link style={{textDecoration: 'none'}} href="https://www.linkedin.com/in/alice-grandjean-0b536b90/"> My linkedIn</Link>
                </ul>
                <ul> 
                <Image
                    src="/images/github.png"
                    height={30}
                    width={30}
                    alt=""
                /> 
                <Link style={{textDecoration: 'none'}} href="https://github.com/AliceGdj"> My Github</Link>
                </ul>
            </section>
        </Layout>
    )
}