import Head from 'next/head';
import Link from 'next/link';
import { useState, useRef } from 'react'

import styles from '../../styles/Home.module.scss';
import useLang from '../hooks/useLang';
// import withTransition from '../HOC/withTransition';
import Transition from '../../components/transition';
import AsideNav from '../../components/nav/asideNav';
import NavShorts from '../../components/nav/nav-shorts';
import Accordion from '../../components/accordion';

const Chordzapp = () => {

    const accordion = [
        {
            "id": "0",
            "title": useLang('chordzAccordionOneTitle'),
            "desc": useLang('chordzAccordionOneDesc'),
            "url": "/chordzapp/chordzLessons",
            "imgUrl": "assets/images/photos/test.jpg"
        },
        {
            "id": "1",
            "title": useLang('chordzAccordionTwoTitle'),
            "desc": useLang('chordzAccordionTwoDesc'),
            "url": "/",
            "imgUrl": "assets/images/photos/test.jpg"
        },
        {
            "id": "2",
            "title": useLang('chordzAccordionThreeTitle'),
            "desc": useLang('chordzAccordionThreeDesc'),
            "url": "/",
            "imgUrl": "assets/images/photos/test.jpg"
        },
        {
            "id": "3",
            "title": useLang('chordzAccordionFourTitle'),
            "desc": useLang('chordzAccordionFourDesc'),
            "url": "/",
            "imgUrl": "assets/images/photos/test.jpg"
        },
    ]

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
                <NavShorts/>
                <AsideNav
                    title={useLang('chordzappTitle')}
                    desc={useLang('chordzappDesc')}
                />
                <div className={styles.apps__content}>
                    <main className={styles.apps__main}>
                        <h3 className={styles.apps__main_head}>{useLang('chordzappHomeTitle')}</h3>
                        <p className={styles.apps__main_desc}>{useLang('chordzappHomeDesc')}</p>
                        <Accordion items={accordion} />
                    </main>
                    <div className={styles.adds__aside}>
                    </div>
                </div>
            </div>
        </Transition>
    )
}

export default Chordzapp;