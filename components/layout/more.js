import styles from '../../styles/Home.module.scss';

const More = () => {

    return (
        <div className={`${styles.halves} ${styles.section__more}`}>

            <h2 className={styles.halves__title}><span>03.</span> Music</h2>
            <div className={styles.halves__wrapper}>
                <div className={`${styles.halves__box}`}>
                    <h3 className={styles.halves__head}>
                        {/* It's all about the music.  */}
                        Przede wszystkim Muzyki!
                        Fuzzzapp powstał z pasji do grania i tworzenia.
                    </h3>
                    <div className={styles.halves__columns}>
                        Dlatego chciałbym Cię zaprosić do posłuchania dźwięków spod mojej ręki i ...
                        dasd jhdaskjh dasdjkdhaskjh dasdaskjhasdas  askjdhkask dasdjkh asd jkhas h .
                        Miłej zabawy!
                    </div>
                </div>
                <div className={`${styles.halves__box} ${styles.halves__box_img}`}>
                    <div className={styles.halves__image}>
                        <img src="assets/images/photos/jaTest.jpg" className={`${styles.halves__column} ${styles.halves__photo}`}/>
                        <div className={styles.halves__mediabox}>
                            <a href='https://www.youtube.com/watch?v=TwdBGV0DM14&ab_channel=BartYan%26SzymonKu%C5%9Bnierz' target='_blank'>
                                <div className={`${styles.halves__media} ${styles.halves__media_top}`}>
                                    <img src="assets/images/bent-arrow.svg" className={styles.halves__media_arrows}/>
                                    <img src="assets/images/photos/bluejay.jpg" className={styles.halves__media_image}/>
                                </div>
                            </a>
                            <a href='https://www.youtube.com/watch?v=6yrV2_Z-Z8E&list=RD6yrV2_Z-Z8E&start_radio=1&ab_channel=BartYan%26WojtekCzyrnek' target='_blank'>
                                <div className={`${styles.halves__media} ${styles.halves__media_bottom}`}>
                                    <img src="assets/images/photos/french2.png" className={styles.halves__media_image}/>
                                    <img src="assets/images/bent-arrow.svg" className={styles.halves__media_arrows}/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default More