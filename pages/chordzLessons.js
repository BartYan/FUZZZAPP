import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import AsideNav from '../components/nav/asideNav';
import Transition from '../components/transition';

export default function ChordzLessons() {

    return (
        <Transition>
            <Head>
                <title>Chordzapp - chords learning tool</title>
                <meta
                    name="description"
                    content="Chordzapp - chords lessons"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.apps}>
                <AsideNav />
                <div className={styles.apps__content}>
                    chordz lessons
                </div>
            </div>
        </Transition>
    )
}
