import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

import Nav from '../components/nav/nav';
import Explorer from '../components/nav/explorer';
import Hero from '../components/layout/hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fuzzzapp - it's more then play</title>
        <meta name="description" content="Fuzzzapp - it's more then play! Application for musicians and guitar players" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav/>
        <Hero/>
        <Explorer/>
      </main>
    </>
  )
}
