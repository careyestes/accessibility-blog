import Layout from '../../components/layout';
import Head from 'next/head';
import Article from '../../components/article';

import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}


export default function Post({ postData }) {
  return (
    <Layout location='post'>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <Article 
        type="-single_post" 
        date={postData.date} 
        index={0} 
        title={postData.title} 
        content={postData.contentHtml}
        image={postData.image}
      />

      <section className="sources_section_wrapper">
        <h3>Sources</h3>
        <ul>
        { 
            postData.sites.map(item => (
                <li key={item.name}>
                  <a target="_blank" href={item.url}>{item.name}</a>
                </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  );
}