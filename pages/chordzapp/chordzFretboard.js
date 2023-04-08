import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import useLang from '../hooks/useLang';
import AsideNav from '../../components/nav/asideNav';
import Transition from '../../components/transition';
import useChords from '../hooks/useChords';
import Panel from '../../components/chordzapp/Panel/Panel';
import Guitar from '../../components/chordzapp/Guitar/Guitar';
import Piano from '../../components/chordzapp/Piano/Piano';


export default function ChordzFretboard() {
    const { chords, scales } = useChords();

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
                <AsideNav 
                    title={useLang('chordzappFretboardTitle')}
                    desc={useLang('chordzappFretboardDesc')}
                />
                <div className={styles.apps__content}>
                    <main className={styles.chordzapp}>
                        <Panel chords={chords} scales={scales} />
                        <Guitar />
                        <Piano />
                    </main>
                </div>
            </div>
        </Transition>
    )
}
