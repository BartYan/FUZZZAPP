import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import Nav from '../components/nav/nav';
import Explorer from '../components/nav/explorer';

export default function Chordzapp() {

  const [chords, setChords] = useState([]);
  useEffect(()=> {
    fetch('/api/createChords')
    .then(response => response.json())
    .then(data => setChords(data));
    (error) => {
      setChords(error);
    }
  }, []);
  useEffect(()=> {
    console.log('chords', chords);
  }, [chords]);


  return (
    <>
      <Head>
        <title>Chordzapp - chords learning tool</title>
        <meta name="description" content="Chordzapp - chords learning tool! Application for musicians and guitar players" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>

      <main className={styles.chordzapp}>
        <div className={styles.chordzapp__baner}>
            <h1>Chordzapp</h1>
        </div>
        <div className={styles.appContainer}>
        </div>

        {/* {chords && (
          chords.map((chord, index) => {
            return (
              <p>
                {chord.name}
              </p>
            )
          })
        )} */}


      <Explorer/>
      </main>
    </>
  )
}
