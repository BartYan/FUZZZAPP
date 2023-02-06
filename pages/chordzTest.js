import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Nav from '../components/nav/nav';
import AsideNav from '../components/nav/asideNav';
import Explorer from '../components/nav/explorer'
import useChords from './hooks/useChords'
import Panel from '../components/chordzapp/Panel/Panel'
import Guitar from '../components/chordzapp/Guitar/Guitar'

export default function ChordzTest() {
    const { chords, scales } = useChords()

    return (
        <>
            <Head>
                <title>Chordzapp - chords learning tool</title>
                <meta
                    name="description"
                    content="Chordzapp - test1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.asides}>
                <AsideNav />
                <div className={styles.asides__content}>
                    TS2
                </div>
            </div>
        </>
    )
}
