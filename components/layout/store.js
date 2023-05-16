import Link from 'next/link';

import styles from '../../styles/Home.module.scss';

const Store = () => {

    return (
        <div className={`${styles.wrapper} ${styles.store}`}>
            <h2 className={styles.store__title}><span>08.</span> Merch</h2>
            <article className={styles.article}>
                <div className={styles.baner}>
                    <div className={styles.baner__wrapp}>
                        {/* <a href="/">
                            <img className={styles.store__logo} src="/assets/images/store-logo.png" alt="Taste with it Store Logo" width={100} height={100}/>
                        </a> */}
                        <p className={styles.baner__desc}>
                            Nullam id magna vitae arcu dapibus congue vel at diam. 
                            Curabitur fermentum velit orci, quis pharetra diam ullamcorper tempor. 
                            Suspendisse accumsan non felis venenatis elementum. 
                            Nullam id magna vitae arcu dapibus congue vel at diam.
                        </p>
                        <div className={styles.baner__button}>
                            <a href='/' className={styles.cta}>
                                Taste with it!
                            </a>
                        </div>
                        
                    </div>
                    <img className={styles.baner__image} src="/assets/images/transparent-t-shirt.png" alt="Fuzzzapp t-shirt" width={100} height={100}/>
                </div>
            </article>
        </div>
    )
}

export default Store