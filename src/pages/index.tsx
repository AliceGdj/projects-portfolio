import React from 'react';
import { ProjectDataInfo } from '../types/projectDataTypes';
import { getSortedProjectsData } from '../utils/projectsUtils';
import { Navbar } from '../components/navbar';
import Profile from '../components/profile';
import Projects from '../components/projects';
import Contact from '../components/contact';

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData: allProjectsData,
    },
  };
}

export default function Home ({ allProjectsData }: { allProjectsData: ProjectDataInfo[]}) {
  return (
    <div>
        <Navbar />
        <Profile />
        <Projects allProjectsData={allProjectsData}/>
        <Contact />
    </div>
  );
}
