import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { ProjectDataContent } from '../types/projectDataTypes';

const projectsDirectory = path.join(process.cwd(), 'projectsData');

export function getSortedProjectsData() {
  const fileNames = fs.readdirSync(projectsDirectory);

  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // Use gray-matter to parse the project metadata
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = remark()
      .use(html)
      .processSync(matterResult.content);
    const contentHtml = processedContent.toString();
    return {
      id,
      contentHtml,
      ...matterResult.data,
    } as ProjectDataContent;
  });

  // Sort projects by date
  return allProjectsData.sort(({ dateFrom: a }, { dateFrom: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
