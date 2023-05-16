import Link from 'next/link';
import styles from '../../styles/Home.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div class={styles.footer__left}>
                <Link href={`/`}>
                    <a>
                        <img className={styles.nav__logo} src="/assets/images/LOGO_WHITE.svg" alt="Fuzzzapp Logo" width={100} height={100}/>
                    </a>
                </Link>
                <ul className={styles.footer__list}>
                    <li className={styles.footer__list_item_title}>Navigation</li>
                    <Link href={`/blog`}>
                        <a>
                            <li className={styles.footer__list_item}>Blog</li>
                        </a>
                    </Link>
                    <Link href={`/`}>
                        <a>
                            <li className={styles.footer__list_item}>Vlog</li>
                        </a>
                    </Link>
                    <Link href={`/`}>
                        <a>
                            <li className={styles.footer__list_item}>Newsletter</li>
                        </a>
                    </Link>
                    <Link href={`/`}>
                        <a>
                            <li className={styles.footer__list_item}>Music</li>
                        </a>
                    </Link>
                </ul>
                <ul className={styles.footer__list}>
                    <li className={styles.footer__list_item_title}>Chordzapp</li>
                    <Link href={`/`}>
                        <a>
                            <li className={styles.footer__list_item}>Chords fretboard</li>
                        </a>
                    </Link>
                    <Link href={`/`}>
                        <a>
                            <li className={styles.footer__list_item}>Interval fretboard</li>
                        </a>
                    </Link>
                    <Link href={`/`}>
                        <a>
                            <li className={styles.footer__list_item}>Chords lessons</li>
                        </a>
                    </Link>
                    <Link href={`/`}>
                        <a>
                            <li className={styles.footer__list_item}>Ai virtual teacher</li>
                        </a>
                    </Link>
                </ul>
            </div>
            

            <div class={styles.footer__right}>
                <div class={styles.footer__right_quote}>
                    <p class={styles.footer__right_quote_lg}>
                        <q>
                            The sky's alight with a guitar bite,
                            Heads will roll and rock tonight,
                            For those about to rock,
                            We Salute You
                        </q> 
                        - AC/DC
                    </p>
                    <p class={styles.footer__right_quote_sm}>
                        ...bez Ciebie to nie to samo, wielkie dzięki, że jesteś!
                    </p>
                </div>
                <div class={styles.footer__right_bottom}>
                    <ul className={styles.footer__list}>
                        <li className={styles.footer__list_item_title}>Contact</li>
                        <a>
                            <li className={styles.footer__list_item}>
                                <span className={styles.footer__mail}>contact@fuzzzapp.com</span>
                            </li>
                        </a>
                    </ul>
                    {/* <ul className={styles.footer__list}>
                        <li className={styles.footer__list_item_title}>Social</li>
                        <div className={styles.footer__social}>
                            <a>
                                <li className={styles.footer__list_item}>
                                    <img className={styles.nav__items_socials_icon} src="/assets/images/yt-logo-white.svg" alt="fuzzzapp youtube" width={60} height={60}/>
                                </li>
                            </a>
                            <a>
                                <li className={styles.footer__list_item}>
                                    <img className={styles.nav__items_socials_icon} src="/assets/images/instagram-logo-white.svg" alt="fuzzzapp insta" width={60} height={60}/>
                                </li>
                            </a>
                        </div>
                    </ul> */}
                    <ul className={styles.footer__list}>
                        <li className={styles.footer__list_item_title}>More from us</li>
                        <div className={styles.footer__more}>
                            <a>
                                <li className={styles.footer__list_item}>
                                    <img className={styles.nav__items_more_icon} src="/assets/images/wd-logo.svg" alt="taste with it logo" width={60} height={60}/>
                                </li>
                            </a>
                            {/* <a>
                                <li className={styles.footer__list_item}>
                                    <img className={styles.nav__items_more_icon} src="/assets/images/store-logo.png" alt="taste with it store logo" width={60} height={60}/>
                                </li>
                            </a> */}
                            <a>
                                <li className={styles.footer__list_item}>
                                    <img className={styles.nav__items_more_icon} src="/assets/images/yt-logo.svg" alt="fuzzzapp youtube" width={60} height={60}/>
                                </li>
                            </a>
                            <a>
                                <li className={styles.footer__list_item}>
                                    <img className={styles.nav__items_more_icon} src="/assets/images/instagram-logo.svg" alt="fuzzzapp insta" width={60} height={60}/>
                                </li>
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;