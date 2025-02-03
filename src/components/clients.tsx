import React from 'react';
import Image from 'next/image';
import styles from '../styles/utils.module.css';
import { ProjectDataContent } from '../types/projectDataTypes';

export default function Clients ({ allProjectsData }: { allProjectsData: ProjectDataContent[]}) {
  return (
    <section>
        <p>Previous clients:</p>
        <div className={styles.containerFlexRow}>
            {allProjectsData.map(({ id }, index) => id !== 'freelance' && (
                <div key={index} className={styles.containerGrow}>                    
                    <Image
                        priority
                        src={"/images/"+id+".jpeg"}
                        height={100}
                        width={100}
                        alt=""
                    />
                </div>
            ))}
        </div>
        <br />
    </section>
  );
}
