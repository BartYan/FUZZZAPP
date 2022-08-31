import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Chordzapp() {
  return (
    <>
      <Head>
        <title>Chordzapp - chords learning tool</title>
        <meta name="description" content="Chordzapp - chords learning tool! Application for musicians and guitar players" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
            <h1>Chordzapp</h1>
        </div>
      </main>
    </>
  )
}
