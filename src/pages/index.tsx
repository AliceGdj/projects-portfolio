import React from 'react';
import { ProjectDataContent } from '../types/projectDataTypes';
import { getSortedProjectsData } from '../utils/projectsUtils';
import { Navbar } from '../components/navbar';
import Profile from '../components/profile';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';
import styles from '../styles/utils.module.css';
import Image from 'next/image';
import Clients from '../components/clients';
import Technology from '../components/technology';
import ArrowNotchDown from '../../public/images/ArrowNotchDown.svg';


export function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData: allProjectsData,
    },
  };
}

export default function Home ({ allProjectsData }: { allProjectsData: ProjectDataContent[]}) {
  return (
    <div>
        <Navbar />
        <header className={styles.headerBackground}>
          <Image
              priority
              src="/images/profile.jpeg"
              className={styles.headerImage}
              height={300}
              width={300}
              alt=""
          />
          <p className={styles.headerTitle}>Alice Grandjean</p>
          <div className={styles.headerDescription}>
            <p>Fullstack developer & Javascript focused</p>
            <p>I can help with Web Apps, PWAs or Greenfield Projects</p>
            <Image
                priority
                src={ArrowNotchDown}
                className={styles.headerIcon}
                height={50}
                width={50}
                alt=""
            />
          </div>
        </header>
        <div className={styles.container}>
          <Profile />
          <Clients allProjectsData={allProjectsData} />
          <Technology />
          <Projects allProjectsData={allProjectsData}/>
          <Contact />
        </div>
        <Footer />
    </div>
  );
}
