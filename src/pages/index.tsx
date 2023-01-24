import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae cum consectetur asperiores natus molestiae odio fugit nesciunt voluptatem, magni illo sequi quo? Voluptates tenetur quod accusamus placeat repellendus, in voluptatem.
        Placeat officiis reprehenderit ea voluptatem exercitationem nostrum fuga reiciendis ratione alias dolor, sed asperiores aspernatur aperiam commodi voluptates repellat quis? Unde itaque voluptates dolores voluptate enim tenetur molestias animi quisquam?</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="posts/first-post">first post</a>.)
        </p>
      </section>
    </Layout>
  );
}