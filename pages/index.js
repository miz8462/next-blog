import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import { getPostsData } from "../lib/post";
import styles from "../styles/Home.module.css";
import utilStyle from "../styles/utils.module.css";

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); // id, title, date, thumbnail

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>
          {siteTitle}
        </title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>キキは13歳の女の子です。落ち込んだりもするけど、元気です。おかあさん。</p>
      </section>

      <section>
        <h2>📝キキのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} />
              </Link>
              <Link href="/">
                <a className={utilStyle.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
