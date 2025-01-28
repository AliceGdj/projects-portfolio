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
import PreviousClientsBanner from '../components/previousClientsBanner';
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
    <div className={styles.pageContainer}>
        <Navbar />
        <header className={styles.titleSectionBackground}>
          <Image
              priority
              src="/images/profile.jpeg"
              className={styles.headerImage}
              height={200}
              width={200}
              alt=""
          />
          <div className={styles.headerDescription}>
            <p className={styles.title}>Alice Grandjean</p>
            <p>Javascript enthusiast,</p>
            <p>I will make your Web App&hellip;</p>
            <p className={styles.rotatingContainer}>
              <span className={styles.rotatingText}> ✨ beautiful ✨</span>
              <span className={styles.rotatingText}> 🛠️ maintainable 🛠️</span>
              <span className={styles.rotatingText}> ✅ seamless and accessible for all ✅</span>
            </p>
          </div>
            {/* <Image
                priority
                src={ArrowNotchDown}
                className={styles.collapsible_icon}
                height={50}
                width={50}
                alt=""
            /> */}
        </header>
        <div className={styles.container}>
          <Profile />
          <PreviousClientsBanner allProjectsData={allProjectsData} />
          <Technology />
          <Projects allProjectsData={allProjectsData}/>
          <Contact />
        </div>
        <Footer />
    </div>
  );
}
