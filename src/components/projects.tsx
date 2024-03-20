import React from 'react';
import { ProjectDataContent } from '../types/projectDataTypes';
import { FormattedDate } from './date';
import Image from 'next/image';
import styles from '../styles/projects.module.css';
// import ArrowNotchDown from '../../public/images/ArrowNotchDown.svg';

export default function Projects ({ allProjectsData }: { allProjectsData: ProjectDataContent[]}) {
   return (
    <section>
      <h2 id={"Projects"}>Projects</h2>
        {allProjectsData.map(({ id, title, dateFrom, dateTo, location, contentHtml }, index) => (
          <div key={index}>
              <div className={styles.flex_container}>
                  <Image
                      priority
                      src={"/images/"+id+".jpeg"}
                      height={90}
                      width={90}
                      alt=""
                  />
                  <div className={styles.flex_column_container}>
                      <h3>{title}</h3>
                      <p>
                          <FormattedDate dateString={dateFrom} />
                          &nbsp;-&nbsp;
                          <FormattedDate dateString={dateTo} />
                      </p>
                      <p>{location}</p>
                  </div>
                  {/* <Image
                      priority
                      src={ArrowNotchDown}
                      className={styles.collapsible_icon}
                      height={30}
                      width={30}
                      alt=""
                  /> */}
              </div>
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
              <br />
          </div>
        ))}
    </section>
  );
}
