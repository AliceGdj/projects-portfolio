import React from 'react';
import { ProjectDataContent } from '../types/projectDataTypes';
import { FormattedDate } from './date';
import Image from 'next/image';
import styles from '../styles/projects.module.css';
// import { ReactComponent as ArrowNotchDown } from '../../public/images/ArrowNotchDown.svg';
import ArrowNotchDown from '../../public/images/ArrowNotchDown.svg';


export default function Projects ({ allProjectsData }: { allProjectsData: ProjectDataContent[]}) {
   return (
    <div>
      <section>
        <h2>Projects</h2>
          {allProjectsData.map(({ id, title, dateFrom, dateTo, contentHtml }) => (
            <div key={id}>
                <div className={styles.collapsible_container}>
                    <Image
                        priority
                        src={"/images/"+id+".jpeg"}
                        height={108}
                        width={108}
                        alt=""
                    />
                    <div className={styles.collapsible_titles}>
                        <h3>{title}</h3>
                        <p>
                            <FormattedDate dateString={dateFrom} />
                            &nbsp;-&nbsp;
                            <FormattedDate dateString={dateTo} />
                        </p>
                    </div>
                    <ArrowNotchDown />

                </div>
                <div className={styles.collapsed_container}>
                    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                </div>

            </div>
          ))}
      </section>
    </div>
  );
}
