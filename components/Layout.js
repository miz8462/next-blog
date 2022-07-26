import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "./layout.module.css";


const name = "Kiki's Blog";
export const siteTitle = "Kiki's blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              className={`${utilStyles.borderCircle}`}
              src="/images/title.jpeg"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              className={`${utilStyles.borderCircle}`}
              src="/images/title.jpeg"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
