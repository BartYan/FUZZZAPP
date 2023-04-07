import Head from 'next/head'
import styles from '../styles/Home.module.scss'


import AsideNav from '../components/nav/asideNav';
import Transition from '../components/transition';

export default function ChordzFretboard() {

    return (
        <Transition>
            <Head>
                <title>Chordzapp - chords learning tool</title>
                <meta
                    name="description"
                    content="Chordzapp - fretboard"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.apps}>
                <AsideNav />
                <div className={styles.apps__content}>
                    Chordz Fretboard
                </div>
            </div>
        </Transition>
    )
}
