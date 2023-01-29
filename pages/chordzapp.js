import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Nav from '../components/nav/nav'
import Explorer from '../components/nav/explorer'
import useChords from './hooks/useChords'
import Panel from '../components/chordzapp/Panel/Panel'
import Guitar from '../components/chordzapp/Guitar/Guitar'

export default function Chordzapp() {
    const { chords, scales } = useChords()

    return (
        <>
            <Head>
                <title>Chordzapp - chords learning tool</title>
                <meta
                    name="description"
                    content="Chordzapp - chords learning tool! Application for musicians and guitar players"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />

            <main className={styles.chordzapp}>
                <div className={styles.chordzapp__baner}>
                    <h1>Chordzapp</h1>
                </div>
                <Panel chords={chords} scales={scales} />
                <Guitar />

                {/* <Explorer/> */}
            </main>
        </>
    )
}
