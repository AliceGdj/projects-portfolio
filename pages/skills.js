import Layout from '../components/layout';
import Head from 'next/head';
import { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Projects () {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Skills</h2>
                <h3 className={utilStyles.headingLg}>Competences </h3>
                <li>ReactJS, Redux, Jquery</li>
                <li>Typescript, ECMAScript (a.k.a ES)</li>
                <li>NodeJS, ExpressJS</li>
                <li>Npm, Yarn, Webpack, Babel, Vite</li>
                <li>AWS, Serverless, Lambdas, Cloudfront</li>
                <li>Bootstrap, StyledComponent, HTML5, CSS3, Tailwind</li>
                <li>Handlebars, DotJS</li>
                <li>Python</li>
                <li>AEM, Docker</li>
                <li>Mongoose, MongoDB, SQL</li>
                <li>A11Y, AA compliancy</li>
                <li>Jest, Cypress</li>
                <li>Github, Gitlab</li>
                <li>CI/CD pipelines</li>
                <li>Scrum, Agile, SAFe methodologies</li>
            </section>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h3 className={utilStyles.headingLg}>Education</h3>
                <li>The Web Developer Bootcamp Course</li>
                <li>08/2018 – 03/2019: Bootcamp Course from Colt Steele (EN)</li>
                <li>Master Business, Languages, Economics</li>
                <li>09/2014 – 11/2016: University of Angers (FR)</li>
                <li>Bachelor Business - Dual degree (German/French)</li>
                <li>09/2011 – 06/2014: University Angers (FR) and Wernigerode (DE)</li>
                
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h3 className={utilStyles.headingLg}>Language</h3>
                <li>French - mother tongue</li>
                <li>English - fluently, spoken and written</li>
                <li>German - fluently, spoken and written</li>
            </section>
        </Layout>
    )
}