import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Article from '../components/article';
import { getSortedPostsData } from '../lib/posts';
import classNames from 'classnames';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout location='home'>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section>
        
        <ul className="post_list">
          {allPostsData.map(({ id, date, title, snippet, image }, index, row) => (
            <li className={classNames({'last-item' : index + 1 === row.length})} key={id} >
              <Article 
                type={ index === 0 ? "-hero" : "-list"} 
                date={date} 
                index={index} 
                title={title} 
                snippet={snippet} 
                id={id} 
                isEven={ index % 2 === 0 ? '-even' : '-odd' }
                image={image}
                />
            </li>
          ))}
        </ul>

      </section>
    </Layout>
  );
}