import Head from 'next/head';
import styles from '../styles/Home.module.scss'

import AsideNav from '../components/nav/asideNav';
import useChords from './hooks/useChords';
import Panel from '../components/chordzapp/Panel/Panel';
import Guitar from '../components/chordzapp/Guitar/Guitar';

export default function Chordzapp() {
    const { chords, scales } = useChords()

    

    return (
        <>
            <Head>
                <title>Chordzapp - Fuzzzapp chords learning tool</title>
                <meta
                    name="description"
                    content="Chordzapp - chords learning tool! Application for musicians and guitar players"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.asides}>
                <AsideNav />
                <div className={styles.asides__content}>
                    <main className={styles.chordzapp}>
                        <Panel chords={chords} scales={scales} />
                        <Guitar />
                    </main>
                </div>
            </div>
        </>
    )
}
