import Link from 'next/link';
import styles from '../../styles/Home.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            
            <Link href={`/`}>
                <a>
                    <img className={styles.nav__logo} src="/assets/images/LOGO_WHITE.svg" alt="Fuzzzapp Logo" width={100} height={100}/>
                </a>
            </Link>
            <ul className={styles.footer__list}>
                <li className={styles.footer__list_item}>Navigation</li>
                <li className={styles.footer__list_item}>Navigation</li>
                <li className={styles.footer__list_item}>Navigation</li>
                <li className={styles.footer__list_item}>Navigation</li>
            </ul>
            <ul className={styles.footer__list}>
                <li className={styles.footer__list_item}>Chordzapp</li>
                <li className={styles.footer__list_item}>Navigation</li>
                <li className={styles.footer__list_item}>Navigation</li>
                <li className={styles.footer__list_item}>Navigation</li>
            </ul>
            <ul className={styles.footer__list}>
                <li className={styles.footer__list_item}>Contact</li>
                <li className={styles.footer__list_item}>Navigation</li>
                <li className={styles.footer__list_item}>Navigation</li>
                <li className={styles.footer__list_item}>Navigation</li>
                <li className={styles.footer__list_item}>Navigation</li>
                <li className={styles.footer__list_item}>Navigation</li>
            </ul>
        </footer>
    )
}

export default Footer;