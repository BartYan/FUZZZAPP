import styles from '../../styles/Home.module.scss';

const Cards = () => {

    return (
        <div className={`${styles.wrapper} ${styles.cards}`}>
            <h2 className={styles.cards__title}><span>08.</span> Chordzapp</h2>
            <article className={styles.article}>
                <p className={styles.cards__head}>
                    Nullam id magna vitae arcu dapibus congue vel at diam. 
                    Curabitur fermentum velit orci, quis pharetra diam ullamcorper tempor. 
                    Suspendisse accumsan non felis venenatis elementum. 
                    Nullam id magna vitae arcu dapibus congue vel at diam.
                </p>
                <div className={styles.cards__gallery}>
                    <div className={`${styles.cards__gallery_item}`}>
                        <img src="assets/images/photos/test.jpg" className={`${styles.cards__gallery_photo}`}/>
                        <p className={styles.cards__gallery_txt}>#chords fretboard</p>
                    </div>
                    <div className={`${styles.cards__gallery_item}`}>
                        <img src="assets/images/photos/test.jpg" className={`${styles.cards__gallery_photo}`}/>
                        <p className={styles.cards__gallery_txt}>#chords lessons</p>
                    </div>
                    <div className={`${styles.cards__gallery_item}`}>
                        <img src="assets/images/photos/test.jpg" className={`${styles.cards__gallery_photo}`}/>
                        <p className={styles.cards__gallery_txt}>#ai virtual teacher</p>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Cards