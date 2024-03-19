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
        <header className={styles.headerContainer}>
          <Image
              priority
              src="/images/profile.jpeg"
              className={styles.headerImage}
              height={400}
              width={400}
              alt=""
          />
          <div className={styles.headerDescription}>
            <h1>Welcome to my Portfolio !</h1>
            <p>I am Alice Grandjean,</p>
            <p>React enthousiast,</p>
            <p>I will make your website&hellip;</p>
            <p className={styles.rotatingContainer}>
              <span className={styles.rotatingText}> ✨ beautiful ✨</span>
              <span className={styles.rotatingText}> 🛠️ maintainable 🛠️</span>
              <span className={styles.rotatingText}> ✅ seamless and accessible for all ✅</span>
            </p>
          </div>
        </header>
        <div className={styles.container}>
          <Profile />
          <Projects allProjectsData={allProjectsData}/>
          <Contact />
        </div>
        <Footer />
    </div>
  );
}
