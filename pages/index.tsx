import React from 'react';
import Head from 'next/head';
import RootLayout, { siteTitle } from '../components/rootLayout';
import utilStyles from '../styles/utils.module.css';
import { getSortedProjectsData } from '../lib/projects';
import Link from 'next/link';
import { Date, DateInterval } from '../components/date';
import { ProjectDataInfo } from '../types/projectDataTypes';

export async function getStaticProps() { // depends on external data >> getStaticProps to fetch required data to render the index page
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData: allProjectsData,
    },
  };
}

export default function Home ({ allProjectsData }: { allProjectsData: ProjectDataInfo[]}) {
  return (
    <RootLayout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a frontend developer with 4 years experience building and maintaining responsive websites. I worked for clients in the car industry (Volkswagen, Audi), in the finance industry (Claimer) and in the start-up world. My stack is primarily Javascript & React but I have some experience with Python, AWS, Docker, AEM...</p>
        <p>Additionally, I am very flexible and adaptable. I speak fluent English, German and French and I am a member of the Women in Tech movement in Berlin.</p>
      </section>
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
    </RootLayout>
  );
}

