import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a frontend developer with 4 years experience building and maintaining responsive websites. I worked for clients in the car industry (Volkswagen, Audi), in the finance industry (Claimer) and in the start-up world. My stack is primarily Javascript & React but I have some experience with Python, AWS, AWS Lambdas, Serverless, Docker, AEM...</p>
        <p>Additionally, I am very flexible and adaptable. I speak fluent English, German and French and I am a member of the "Women in Tech" movement in Berlin.</p>
        <div className={utilStyles.cta}>
          <a href="https://github.com/AliceGdj/resume/raw/main/Resume_Alice_Grandjean.pdf" target="_blank" rel="noopener noreferrer"><button>Download my Resume</button></a>
        </div>
      </section>
    </Layout>
  );
}

