import Head from 'next/head';
import { useState, useEffect } from 'react';

import styles from '../styles/Home.module.scss';
import withTransition from '../HOC/withTransition';
import Transition from '../components/transition';
import AsideNav from '../components/nav/asideNav';
import useChords from './hooks/useChords';
import Panel from '../components/chordzapp/Panel/Panel';
import Guitar from '../components/chordzapp/Guitar/Guitar';
import Piano from '../components/chordzapp/Piano/Piano';

const Chordzapp = () => {
    const { chords, scales } = useChords();

    return (
        <Transition>
            <Head>
                <title>Chordzapp - Fuzzzapp chords learning tool</title>
                <meta
                    name="description"
                    content="Chordzapp - chords learning tool! Application for musicians and guitar players"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.apps}>
                <AsideNav />
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

export default Chordzapp;