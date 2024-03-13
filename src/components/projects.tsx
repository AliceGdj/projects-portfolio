import React from 'react';
import Link from 'next/link';
import { FormattedDate, DateInterval } from '../components/date';
import { ProjectDataInfo } from '../types/projectDataTypes';

export default function Projects ({ allProjectsData }: { allProjectsData: ProjectDataInfo[]}) {
  return (
    <div>
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
