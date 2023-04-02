import styles from '../../styles/Home.module.scss';

const More = () => {

    return (
        <div className={styles.halves}>

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
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default More