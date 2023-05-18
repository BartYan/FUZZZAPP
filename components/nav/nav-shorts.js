import Link from 'next/link';
import styles from '../../styles/Home.module.scss';

const NavShorts = () => {
    return (
        <div className={styles.nav__items}>
            <p className={styles.nav__items_title}>shortcuts</p>
            <Link href={`/chordzapp`}>
                <a className={`${styles.nav__items_link} ${styles.nav__items_link_one}`}>
                    <p className={styles.nav__items_link_text}>chordzapp</p>
                    <img className={styles.nav__items_link_img} src="/assets/images/arrow_forward.svg" alt="explore more arrow" width={60} height={60}/>
                </a>
            </Link>
            <Link href={`/blog`}>
                <a className={`${styles.nav__items_link} ${styles.nav__items_link_two}`}>
                    <p className={styles.nav__items_link_text}>blog</p>
                    <img className={styles.nav__items_link_img} src="/assets/images/arrow_forward.svg" alt="explore more arrow" width={60} height={60}/>
                </a>
            </Link>
            <Link href={`/virtual-teacher`}>
                <a className={`${styles.nav__items_link} ${styles.nav__items_link_three}`}>
                    <p className={styles.nav__items_link_text}>ai teacher</p>
                    <img className={styles.nav__items_link_img} src="/assets/images/arrow_forward.svg" alt="explore more arrow" width={60} height={60}/>
                </a>
            </Link>
            <div className={styles.nav__items_socials}>
                <a href="/">
                    <img className={styles.nav__items_socials_store} src="/assets/images/store-logo.png" alt="taste with it store" width={60} height={60}/>
                </a>
                <div>
                    <a href="/">
                        <img className={styles.nav__items_socials_icon} src="/assets/images/yt-logo.svg" alt="fuzzzapp youtube" width={60} height={60}/>
                    </a>
                    <a href="/">
                        <img className={styles.nav__items_socials_icon} src="/assets/images/instagram-logo.svg" alt="fuzzzapp insta" width={60} height={60}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavShorts