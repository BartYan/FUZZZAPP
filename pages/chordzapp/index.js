import Head from 'next/head';
import Link from 'next/link';
import { useState, useRef } from 'react'

import styles from '../../styles/Home.module.scss';
import useLang from '../hooks/useLang';
// import withTransition from '../HOC/withTransition';
import Transition from '../../components/transition';
import AsideNav from '../../components/nav/asideNav';
import {Peace} from '../../components/layout/images/peace'

const Chordzapp = () => {

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
                <AsideNav
                    title={useLang('chordzappTitle')}
                    desc={useLang('chordzappDesc')}
                />
                <div className={styles.apps__content}>
                        <Link href={'/chordzapp/chordzLessons'}>
                            <a className={styles.blue__hover}>
                                <div className={styles.halves}>
                                    <h2 className={styles.halves__title}><span>01.</span> {useLang('chordzappLessonsTitle')}</h2>
                                    <div className={styles.halves__wrapper}>
                                        <div className={styles.halves__box}>
                                            <p className={styles.halves__desc}>
                                                {useLang('chordzappLessonsDesc')}
                                            </p>
                                        </div>
                                        <div className={`${styles.halves__box} ${styles.halves__box_img}`}>
                                            <div className={styles.halves__image}>
                                                <Peace />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href={'/chordzapp/chordzFretboard'}>
                            <a className={styles.red__hover}>
                                <div className={styles.halves}>
                                    <h2 className={styles.halves__title}><span>02.</span> {useLang('chordzappFretboardTitle')}</h2>
                                    <div className={styles.halves__wrapper}>
                                        <div className={styles.halves__box}>
                                            <p className={styles.halves__desc}>
                                                {useLang('chordzappFretboardDesc')}
                                            </p>
                                        </div>
                                        <div className={`${styles.halves__box} ${styles.halves__box_img}`}>
                                            <div className={styles.halves__image}>
                                                <Peace />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href={'/chordzapp/chordzAiTeacher'}>
                            <a className={styles.yellow__hover}>
                                <div className={styles.halves}>
                                    <h2 className={styles.halves__title}><span>03.</span> {useLang('chordzappAiTitle')}</h2>
                                    <div className={styles.halves__wrapper}>
                                        <div className={styles.halves__box}>
                                            <p className={styles.halves__desc}>
                                                {useLang('chordzappAiDesc')}
                                            </p>
                                        </div>
                                        <div className={`${styles.halves__box} ${styles.halves__box_img}`}>
                                            <div className={styles.halves__image}>
                                                <Peace />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href={'/chordzapp/chordzGame'}>
                            <a className={styles.blue__hover}>
                                <div className={styles.halves}>
                                    <h2 className={styles.halves__title}><span>01.</span> game</h2>
                                    <div className={styles.halves__wrapper}>
                                        <div className={styles.halves__box}>
                                            <p className={styles.halves__desc}>
                                                game
                                            </p>
                                        </div>
                                        <div className={`${styles.halves__box} ${styles.halves__box_img}`}>
                                            <div className={styles.halves__image}>
                                                <Peace />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                </div>
            </div>
        </Transition>
    )
}

export default Chordzapp;