import styles from '../../styles/Home.module.scss';

const More = () => {

    return (
        <div className={styles.halves}>

            <h2 className={styles.halves__title}><span>03.</span> More</h2>
            <div className={styles.halves__wrapper}>
                <div className={`${styles.halves__box}`}>
                    <p className={styles.halves__head}>
                        Nullam id magna vitae arcu dapibus congue vel at diam. 
                        Curabitur fermentum velit orci, quis pharetra diam ullamcorper tempor. 
                    </p>
                    <div className={styles.halves__columns}>
                        Nullam id magna vitae arcu dapibus congue vel at diam. 
                        Curabitur fermentum velit orci, quis pharetra diam ullamcorper tempor. 
                        Suspendisse accumsan non felis venenatis elementum. 
                        Nullam id magna vitae arcu dapibus congue vel at diam. 
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