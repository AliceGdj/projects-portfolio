import Layout from '../components/layout';
import Head from 'next/head';
import { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedProjectsData } from '../lib/projects';
import Link from 'next/link';
import { Date, DateInterval } from '../components/date';

export async function getStaticProps() { 
    // depends on external data >> fetch required data to render the index page
    // not working with the _app.js file
    const allProjectsData = getSortedProjectsData();
    return {
      props: {
        allProjectsData: allProjectsData,
      },
    };
}

export default function Projects ({ allProjectsData: allProjectsData }) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Projects</h2>
                <ul className={utilStyles.list}>
                {allProjectsData.map(({ id, dateFrom, dateTo, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                    <Link href={`/projects/${id}`}>
                        {title}
                    </Link>
                    <br />
                    <small className={utilStyles.lightText}>
                        <Date dateString={dateFrom} />
                        &nbsp;-&nbsp;
                        <Date dateString={dateTo} />
                        &nbsp;-&nbsp;
                        <DateInterval dateStringFrom={dateFrom} dateStringTo={dateTo}/>
                    </small>
                    </li>
                ))}
                </ul>
            </section>
        </Layout>
    )
}