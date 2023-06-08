import Head from 'next/head';

import styles from '../../../styles/Home.module.scss';
import useLang from '../hooks/useLang';
// import withTransition from '../HOC/withTransition';
import Transition from '../../../components/transition';
import AsideNav from '../../../components/nav/asideNav';
import NavShorts from '../../../components/nav/nav-shorts';
import Accordion from '../../../components/accordion';

const Chordzapp = () => {

    const accordion = [
        {
            "id": "0",
            "title": useLang('chordzappLessonsMenuTitle'),
            "subtitle": useLang('chordzappLessonsMenuSubTitle'),
            "desc": useLang('chordzAccordionOneDesc'),
            "url": "/chordzapp/chordzLessons",
            "imgUrl": "/../public/assets/images/photos/test.jpg"
        },
        {
            "id": "1",
            "title": useLang('chordzappIntervalFretboardMenuTitle'),
            "subtitle": useLang('chordzappIntervalFretboardMenuSubTitle'),
            "desc": useLang('chordzAccordionTwoDesc'),
            "url": "/chordzapp/intervalFretboard",
            "imgUrl": "/../public/assets/images/photos/test.jpg"
        },
        {
            "id": "2",
            "title": useLang('chordzappFretboardMenuTitle'),
            "subtitle": useLang('chordzappFretboardMenuSubTitle'),
            "desc": useLang('chordzAccordionTwoDesc'),
            "url": "/chordzapp/chordzFretboard",
            "imgUrl": "/../public/assets/images/photos/test.jpg"
        },
        {
            "id": "3",
            "title": useLang('chordzappAiMenuTitle'),
            "subtitle": useLang('chordzappAiMenuSubTitle'),
            "desc": useLang('chordzAccordionFourDesc'),
            "url": "/chordzapp/chordzAiTeacher",
            "imgUrl": "/../public/assets/images/photos/test.jpg"
        },
    ]

    return (
        <Transition>
            <Head>
                <title>Chordzapp - Fuzzzapp chords learning tools</title>
                <meta
                    name="description"
                    content="Chordzapp - chords learning tool! Application for musicians and guitar players"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.apps}>
                <NavShorts/>
                <AsideNav
                    title={useLang('chordzappMenuTitle')}
                    desc={useLang('chordzappMenuDesc')}
                />
                <div className={styles.apps__content}>
                    <main className={styles.apps__main}>
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