import Head from 'next/head'
import ReactMarkdown from 'react-markdown';

import styles from '../../styles/Home.module.scss'
import useLang from '../hooks/useLang';
import AsideNav from '../../components/nav/asideNav';
import Transition from '../../components/transition';
import NavShorts from '../../components/nav/nav-shorts';

export default function ChordzLessons() {

    const lessons = [
        {
            "id": "lessons-1",
            "name": useLang('chordzappLessonsOneName'),
            "body": useLang('chordzappLessonsOne'),
        },
        {
            "id": "lessons-2",
            "name": useLang('chordzappLessonsOneName'),
            "body": useLang('chordzappLessonsOne'),
        },
        // {
        //     "id": "lessons-3",
        //     "name": useLang('chordzappLessonsOneName'),
        //     "body": useLang('chordzappLessonsOne'),
        // },
        // {
        //     "id": "lessons-4",
        //     "name": useLang('chordzappLessonsOneName'),
        //     "body": useLang('chordzappLessonsOne'),
        // },
        // {
        //     "id": "lessons-5",
        //     "name": useLang('chordzappLessonsOneName'),
        //     "body": useLang('chordzappLessonsOne'),
        // },
        // {
        //     "id": "lessons-6",
        //     "name": useLang('chordzappLessonsOneName'),
        //     "body": useLang('chordzappLessonsOne'),
        // },
        // {
        //     "id": "lessons-7",
        //     "name": useLang('chordzappLessonsOneName'),
        //     "body": useLang('chordzappLessonsOne'),
        // },
        // {
        //     "id": "lessons-8",
        //     "name": useLang('chordzappLessonsOneName'),
        //     "body": useLang('chordzappLessonsOne'),
        // },
        // {
        //     "id": "lessons-9",
        //     "name": useLang('chordzappLessonsOneName'),
        //     "body": useLang('chordzappLessonsOne'),
        // },
    ]

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

            <div className={`${styles.apps} ${styles.apps__tallnav}`}>
                <NavShorts/>    
                <AsideNav 
                    title={useLang('chordzappLessonsMenuTitle')}
                    desc={useLang('chordzappLessonsMenuDesc')}
                    subNav={lessons}
                />
                <div className={styles.apps__content}>
                    <main className={styles.apps__main}>
                        <div className={styles.apps__main_content}>
                            {
                                lessons &&
                                lessons.map((lesson, index) => {
                                    return (
                                        <article id={lesson.id} className={styles.apps__main_content_article} key={lesson.id}>
                                            <ReactMarkdown>{lesson.body}</ReactMarkdown>
                                        </article>
                                    )
                                })
                            }
                        </div>
                    </main>
                    <div className={styles.adds__aside}>
                    </div>
                </div>
            </div>
        </Transition>
    )
}
