import React from 'react';
import { ProjectDataContent } from '../types/projectDataTypes';
import { getSortedProjectsData } from '../utils/projectsUtils';
import { Navbar } from '../components/navbar';
import Profile from '../components/profile';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';
import styles from '../styles/utils.module.css';

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
        <div className={styles.container}>
          <Profile />
          <Projects allProjectsData={allProjectsData}/>
          <Contact />
        </div>
        <Footer />
    </div>
  );
}
