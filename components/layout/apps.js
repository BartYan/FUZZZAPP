import styles from '../../styles/Home.module.scss';

const Apps = () => {

    return (
        <div className={`${styles.wrapper} ${styles.apps}`}>
            <h2 className={styles.apps__title}><span>08.</span> Chordzapp</h2>
            <article className={styles.article}>
                <p className={styles.apps__head}>
                    Nullam id magna vitae arcu dapibus congue vel at diam. 
                    Curabitur fermentum velit orci, quis pharetra diam ullamcorper tempor. 
                    Suspendisse accumsan non felis venenatis elementum. 
                    Nullam id magna vitae arcu dapibus congue vel at diam.
                </p>
                <div className={styles.apps__gallery}>
                    <div className={`${styles.apps__gallery_item}`}>
                        <img src="assets/images/photos/test.jpg" className={`${styles.apps__gallery_photo}`}/>
                        <div className={`${styles.apps__gallery_apla} ${styles.bg_red}`}>
                            <h5>fretboard</h5>
                            <p>uspendisse accumsan non felis venenatis elementum.Nullam id magna vitae arcu dapibus congue vel at diam.</p>
                        </div>
                    </div>
                    <div className={`${styles.apps__gallery_item}`}>
                        <img src="assets/images/photos/test.jpg" className={`${styles.apps__gallery_photo}`}/>
                        <div className={`${styles.apps__gallery_apla} ${styles.bg_purple}`}>
                            <h5>Ai Teacher</h5>
                            <p>uspendisse accumsan non felis venenatis elementum.Nullam id magna vitae arcu dapibus congue vel at diam.</p>
                        </div>
                    </div>
                    <div className={`${styles.apps__gallery_item}`}>
                        <img src="assets/images/photos/test.jpg" className={`${styles.apps__gallery_photo}`}/>
                        <div className={`${styles.apps__gallery_apla} ${styles.bg_yellow}`}>
                            <h5>Chords Lessons</h5>
                            <p>uspendisse accumsan non felis venenatis elementum.Nullam id magna vitae arcu dapibus congue vel at diam.</p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Apps