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
                        <div className={`${styles.cards__gallery_apla} ${styles.bg_red}`}>
                            <h5>fretboard</h5>
                            <p>uspendisse accumsan non felis venenatis elementum.Nullam id magna vitae arcu dapibus congue vel at diam.</p>
                        </div>
                    </div>
                    <div className={`${styles.cards__gallery_item}`}>
                        <img src="assets/images/photos/test.jpg" className={`${styles.cards__gallery_photo}`}/>
                        <div className={`${styles.cards__gallery_apla} ${styles.bg_purple}`}>
                            <h5>Ai Teacher</h5>
                            <p>uspendisse accumsan non felis venenatis elementum.Nullam id magna vitae arcu dapibus congue vel at diam.</p>
                        </div>
                    </div>
                    <div className={`${styles.cards__gallery_item}`}>
                        <img src="assets/images/photos/test.jpg" className={`${styles.cards__gallery_photo}`}/>
                        <div className={`${styles.cards__gallery_apla} ${styles.bg_yellow}`}>
                            <h5>Chords Lessons</h5>
                            <p>uspendisse accumsan non felis venenatis elementum.Nullam id magna vitae arcu dapibus congue vel at diam.</p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Cards