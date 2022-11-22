import Layout from '../components/layout';
import Head from 'next/head';
import { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Projects () {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Contact</h2>
                <li>Cell: (0049) 1590 149 3144</li>
                <li>Email: alice.grandj.49@gmail.com</li>
                <li>Address: Berlin</li>
            </section>
        </Layout>
    )
}