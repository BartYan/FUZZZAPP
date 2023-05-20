import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import useLang from '../hooks/useLang';
import AsideNav from '../../components/nav/asideNav';
import Transition from '../../components/transition';
import useChords from '../hooks/useChords';
import Panel from '../../components/chordzapp/Panel/Panel';
import Guitar from '../../components/chordzapp/Guitar/Guitar';
import Piano from '../../components/chordzapp/Piano/Piano';
import NavShorts from '../../components/nav/nav-shorts';
import dataIntervals from '../api/intervals.json';

export default function IntervalFretboard() {
    const { chords, scales } = useChords(dataIntervals);

    return (
        <Transition>
            <Head>
                <title>Chordzapp - intervals learning tool</title>
                <meta
                    name="description"
                    content="Chordzapp - intervals fretboard"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={`${styles.apps} ${styles.apps__boards}`}>
                <NavShorts/>
                <AsideNav 
                    title={useLang('chordzappIntervalFretboardMenuTitle')}
                    desc={useLang('chordzappIntervalFretboardMenuDesc')}
                />
                <div className={styles.apps__content}>
                    <main className={styles.apps__main}>
                        <Panel chords={chords} scales={scales} />
                        <Guitar />
                        <Piano />
                    </main>
                    <div className={styles.adds__aside}>
                    </div>
                </div>
            </div>
        </Transition>
    )
}
