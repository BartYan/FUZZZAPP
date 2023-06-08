import Head from 'next/head'
import Image from 'next/image';
import styles from '../../styles/Home.module.scss'

import useLang from '../hooks/useLang';
import NavShorts from '../../components/nav/nav-shorts';
import AsideNav from '../../components/nav/asideNav';
import MediapipeCam from '../../components/mediapipeCam';
import Transition from '../../components/transition';

export default function ChordzAiTeacher() {

    return (
        <Transition>
            <Head>
                <title>Chordzapp - chords learning tool</title>
                <meta
                    name="description"
                    content="Chordzapp - chords ai techaer"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.apps}>
                <NavShorts/>
                <AsideNav
                    title={useLang('chordzappAiMenuTitle')}
                    desc={useLang('chordzappAiMenuDesc')}
                />
                <div className={styles.apps__content}>
                    <main className={styles.apps__main}>
                        <div className={`${styles.baner} ${styles.baner__info}`}>
                            <div className={styles.baner__wrapp}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="48" fill="#000" viewBox="0 -960 960 960" width="48"><path d="M453-280h60v-240h-60v240Zm26.982-314q14.018 0 23.518-9.2T513-626q0-14.45-9.482-24.225-9.483-9.775-23.5-9.775-14.018 0-23.518 9.775T447-626q0 13.6 9.482 22.8 9.483 9.2 23.5 9.2Zm.284 514q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/></svg>
                                <p className={styles.baner__desc}>
                                    {/* {useLang('chordzappAiMenuDesc')} */}
                                    Nullam id magna vitae arcu dapibus congue vel at diam. 
                                    Curabitur fermentum velit orci, quis pharetra diam ullamcorper tempor. 
                                    Suspendisse accumsan non felis venenatis elementum. 
                                    Nullam id magna vitae arcu dapibus congue vel at diam.
                                </p>
                            </div>
                        </div>

                        <article className={styles.apps__main_article}>
                            <h2 className={styles.apps__main_article_title}><span>01.</span> Major Seven - E string</h2>
                            <p className={styles.apps__main_article_desc}>
                                Nullam id magna vitae arcu dapibus congue vel at diam. 
                                Curabitur fermentum velit orci, quis pharetra diam ullamcorper tempor. 
                                Suspendisse accumsan non felis venenatis elementum. 
                                Nullam id magna vitae arcu dapibus congue vel at diam. 
                            </p>
                            <div className={styles.aibox}>
                                <div className={styles.aibox__left}>
                                    <div className={styles.aibox__left_image}>
                                        <p className={styles.aibox__left_image_caption}>
                                            Basic chord
                                        </p>
                                        <Image
                                            src="/../public/assets/images/testChord.png"
                                            width={250}
                                            height={180}
                                            alt="chord drop"
                                            style={{ width: '50%' }}
                                        />
                                    </div>
                                    <div className={styles.aibox__left_image}>
                                        <p className={styles.aibox__left_image_caption}>
                                            chord inversion from third
                                        </p>
                                        <Image
                                            src="/../public/assets/images/testChord.png"
                                            width={250}
                                            height={180}
                                            alt="chord drop"
                                            style={{ width: '50%' }}
                                        />
                                    </div>
                                    <div className={styles.aibox__left_image}>
                                        <p className={styles.aibox__left_image_caption}>
                                            position from fifth
                                        </p>
                                        <Image
                                            src="/../public/assets/images/testChord.png"
                                            width={250}
                                            height={180}
                                            alt="chord drop"
                                            style={{ width: '50%' }}
                                        />
                                    </div>
                                    <div className={styles.aibox__left_image}>
                                        <p className={styles.aibox__left_image_caption}>
                                            position from third
                                        </p>
                                        <Image
                                            src="/../public/assets/images/testChord.png"
                                            width={250}
                                            height={180}
                                            alt="chord drop"
                                            style={{ width: '50%' }}
                                        />
                                    </div>
                                    
                                   
                                </div>
                                <div className={styles.aibox__right}>
                                    <MediapipeCam/>
                                </div>
                                
                            </div>
                        </article>
                        <article className={styles.apps__main_article}>
                            <h2 className={styles.apps__main_article_title}><span>01.</span> Major Seven - E string</h2>
                            <p className={styles.apps__main_article_desc}>
                                Nullam id magna vitae arcu dapibus congue vel at diam. 
                                Curabitur fermentum velit orci, quis pharetra diam ullamcorper tempor. 
                                Suspendisse accumsan non felis venenatis elementum. 
                                Nullam id magna vitae arcu dapibus congue vel at diam. 
                            </p>
                            <div className={styles.aibox}>
                                <div className={styles.aibox__left}>
                                    <div className={styles.aibox__left_image}>
                                        <p className={styles.aibox__left_image_caption}>
                                            Basic chord
                                        </p>
                                        <Image
                                            src="/../public/assets/images/testChord.png"
                                            width={250}
                                            height={180}
                                            alt="chord drop"
                                            style={{ width: '50%' }}
                                        />
                                    </div>
                                    <div className={styles.aibox__left_image}>
                                        <p className={styles.aibox__left_image_caption}>
                                            chord inversion from third
                                        </p>
                                        <Image
                                            src="/../public/assets/images/testChord.png"
                                            width={250}
                                            height={180}
                                            alt="chord drop"
                                            style={{ width: '50%' }}
                                        />
                                    </div>
                                    <div className={styles.aibox__left_image}>
                                        <p className={styles.aibox__left_image_caption}>
                                            position from fifth
                                        </p>
                                        <Image
                                            src="/../public/assets/images/testChord.png"
                                            width={250}
                                            height={180}
                                            alt="chord drop"
                                            style={{ width: '50%' }}
                                        />
                                    </div>
                                    <div className={styles.aibox__left_image}>
                                        <p className={styles.aibox__left_image_caption}>
                                            position from third
                                        </p>
                                        <Image
                                            src="/../public/assets/images/testChord.png"
                                            width={250}
                                            height={180}
                                            alt="chord drop"
                                            style={{ width: '50%' }}
                                        />
                                    </div>
                                    
                                   
                                </div>
                                <div className={styles.aibox__right}>
                                    <MediapipeCam/>
                                </div>
                                
                            </div>
                        </article>
                        
                    </main>
                    <div className={styles.adds__aside}>
                    </div>
                </div>
            </div>
        </Transition>
    )
}
