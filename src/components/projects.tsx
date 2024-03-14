import React from 'react';
import { ProjectDataContent } from '../types/projectDataTypes';
import { FormattedDate } from './date';

export default function Projects ({ allProjectsData }: { allProjectsData: ProjectDataContent[]}) {
   return (
    <div>
      <section>
        <h2>Projects</h2>
          {allProjectsData.map(({ id, title, dateFrom, dateTo, contentHtml }) => (
            <div key={id}>
                <h2>{title}</h2>
                <p>
                    <FormattedDate dateString={dateFrom} />
                    &nbsp;-&nbsp;
                    <FormattedDate dateString={dateTo} />
                </p>
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

            </div>
          ))}
      </section>
    </div>
  );
}
