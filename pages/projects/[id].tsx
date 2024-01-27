import React from 'react';
import RootLayout from '../../components/rootLayout';
import { getAllProjectIds, getProjectData } from '../../lib/projects';
import Head from 'next/head';
import { FormattedDate } from '../../components/date';
import Image from 'next/image';
import styles from '../../components/layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import { ProjectDataContent } from '../../types/projectDataTypes';

export async function getStaticPaths() {
    // an array of possible values for id
    const paths = getAllProjectIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // fetch necessary data for hte project id
    const projectData = await getProjectData(params.id);
    return {
        props: {
            projectData,
        },
    };
}

export default function Project({ projectData } : {projectData: ProjectDataContent }) {
    const logoPath = "/images/"+projectData.id+".jpeg";
    return (
        <RootLayout>
            <Head>
                <title>{projectData.title}</title>
            </Head>
            <header className={styles.header}>
                <Image
                    priority
                    src={logoPath}
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt=""
                />
            </header>
            <article>
                <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
                <div className={utilStyles.lightText}>
                    <FormattedDate dateString={projectData.dateFrom} />
                    &nbsp;-&nbsp;
                    <FormattedDate dateString={projectData.dateTo} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
            </article>
        </RootLayout>
    )
}