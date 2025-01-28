import React from 'react';
import Image from 'next/image';
import styles from '../styles/utils.module.css';
import { ProjectDataContent } from '../types/projectDataTypes';

export default function PreviousClientsBanner ({ allProjectsData }: { allProjectsData: ProjectDataContent[]}) {
  return (
    <section>
        <p>Previous clients:</p>
        <div className={styles.headerContainerClients}>
            {allProjectsData.map(({ id }, index) => id !== 'freelance' && (
                <div key={index} className={styles.imageContainerClients}>                    
                    <Image
                        priority
                        src={"/images/"+id+".jpeg"}
                        className={styles.imageBanner}
                        height={100}
                        width={100}
                        alt=""
                    />
                </div>
            ))}
        </div>
    </section>
  );
}
