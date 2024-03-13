import React from 'react';
import Link from 'next/link';
import { FormattedDate, DateInterval } from '../components/date';
import { ProjectDataInfo } from '../types/projectDataTypes';
import { getSortedProjectsData } from '../utils/projectsUtils';
import Image from 'next/image';
import { Navbar } from '../components/navbar';
import styles from './index.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Alice Grandjean';

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData: allProjectsData,
    },
  };
}

export default function Home ({ allProjectsData }: { allProjectsData: ProjectDataInfo[]}) {
  return (
    <div>
        <Navbar />
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
        <p>I am a frontend developer with {new Date().getFullYear()-2019} years experience building and maintaining responsive websites. I worked for clients in the car industry (Volkswagen, Audi), in the finance industry (Claimer) and in the start-up world. My stack is primarily Javascript & React but I have some experience with Python, AWS, Docker, AEM...</p>
        <p>Additionally, I am very flexible and adaptable. I speak fluent English, German and French and I am a member of the Women in Tech movement in Berlin.</p>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          {allProjectsData.map(({ id, dateFrom, dateTo, title }) => (
            <li key={id}>
              <Link href={`/projectsData/${id}`}>
                {title}
              </Link>
              <br />
              <small>
                <FormattedDate dateString={dateFrom} />
                &nbsp;-&nbsp;
                <FormattedDate dateString={dateTo} />
                &nbsp;-&nbsp;
                <DateInterval dateStringFrom={dateFrom} dateStringTo={dateTo}/>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
