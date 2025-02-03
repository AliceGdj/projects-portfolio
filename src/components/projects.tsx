import React from 'react';
import { ProjectDataContent } from '../types/projectDataTypes';
import { FormattedDate } from './date';

export default function Projects ({ allProjectsData }: { allProjectsData: ProjectDataContent[]}) {
   return (
    <section>
      <h2 id={"Projects"}>Projects</h2>
      <br />
        {allProjectsData.map(({ id, title, dateFrom, dateTo, location, contentHtml }, index) => (
          <div key={index}>
            <h3>{title}</h3>
            <p>
                <FormattedDate dateString={dateFrom} />
                &nbsp;-&nbsp;
                <FormattedDate dateString={dateTo} />
            </p>
            <p>{location}</p>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <br />
          </div>
        ))}
    </section>
  );
}
