import React from 'react';
import Image from 'next/image';
import styles from '../styles/utils.module.css';
import { ProjectDataContent } from '../types/projectDataTypes';

export default function Technology () {
  const TECH_FRONTEND_EXPERT = [ 'ReactJS', 'NextJS', 'Typescript', 'Javascript', 'HTML/CSS' ];
  const TECH_FRONTEND = [ 'Redux', 'Tailwind', 'Handlebars', 'Bootstrap', 'StyledComponents' ];
  const TECH_BACKEND_EXPERT = [ 'NodeJS', 'Python' ];
  const TECH_BACKEND = [ 'Express', 'SQL', 'MongoDB', 'Mongoose', 'REST', 'GraphQL', 'Apollo', 'AWS', 'S3', 'Lambdas', 'CloudFront', 'AEM', 'Azure AD', 'Docker' ];
  const MISC_EXPERT = [ 'Jest', 'Accessibility' ];
  const MISC = [ 'CI/CD', 'Agile and SAFe methodologies', 'Prompt engineering tech'];

  return (
    <section>
        <h2 id={"Tech"}>Tech</h2>
        <br />
        <p>Frontend technology:</p>
        <div className={styles.containerFlexRow}>
          {TECH_FRONTEND_EXPERT.map((item) => (
            <div key={item} className={styles.greenChip}>
                {item}
            </div>
          ))}
          {TECH_FRONTEND.map((item) => (
            <div key={item} className={styles.grayChip}>
                {item}
            </div>
          ))}
        </div>

        <br />

        <p>Backend technology:</p>
        <div className={styles.containerFlexRow}>
          {TECH_BACKEND_EXPERT.map((item) => (
            <div key={item} className={styles.greenChip}>
              {item}
            </div>
          ))}
          {TECH_BACKEND.map((item) => (
            <div key={item} className={styles.grayChip}>
              {item}
            </div>
          ))}
        </div>

        <br />

        <p>Misc. technology:</p>
        <div className={styles.containerFlexRow}>
          {MISC_EXPERT.map((item) => (
            <div key={item} className={styles.greenChip}>
              {item}
            </div>
          ))}
          {MISC.map((item) => (
            <div key={item} className={styles.grayChip}>
              {item}
            </div>
          ))}
        </div>
        <br />
    </section>
  );
}
