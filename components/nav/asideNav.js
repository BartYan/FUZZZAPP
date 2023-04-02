import Link from 'next/link';
import { useRouter } from "next/router";

import styles from '../../styles/Home.module.scss';

const AsideNav = () => {

    const router = useRouter();

    const menuItems = [
        {
          index: '0',
          href: '/chordzapp',
          title: 'chordzapp home',
          textcolor: '#a29bfe',
        },
        {
          index: '1',
          href: '/chordzTest',
          title: 'chordz lessons',
          textcolor: '#91D5DD',
        },
        {
          index: '2',
          href: '/chordzTest2',
          title: 'fretboard',
          textcolor: '#ff7979',
        },
        {
          index: '3',
          href: '/chordzTest3',
          title: 'ai teacher',
          textcolor: '#ffcb70',
        },
    ];
    return (
        <header className={styles.aside__container}>
            <aside className={styles.aside}>
                <div className={styles.aside__top}>
                    <Link href={`/`}>
                        <a>
                            <img className={styles.nav__logo} src="/assets/images/LOGO.svg" alt="Fuzzzapp Logo" width={100} height={100}/>
                        </a>
                    </Link>
                    {/* <h1>Chordzzapp</h1> */}
                </div>
                <div className={styles.aside__text}>
                    <h1 className={styles.aside__text_title}>Chordzapp</h1>
                    <p className={styles.aside__text_desc}>
                        Witaj w fuzzapowym miejscu poświęconym nauce grania akordów.
                        Znajdziesz tutaj kilka ciekawych narzędzi które
                        pomogą Ci zrozumieć to zagadnienie:
                    </p>
                    <hr></hr>
                </div>
                <nav className={styles.aside__nav}>
                    <ul className={styles.aside__nav_list}>
                    {menuItems.map(({ href, title, textcolor, index }) => (
                        <li className={styles.aside__nav_item} style={{color: `${router.pathname == href ? textcolor : ''}`}} key={index}>
                        <Link href={href}>
                            <a className={``}>
                            {title}
                            </a>
                        </Link>
                        </li>
                    ))}
                    </ul>
                </nav>
            </aside>
        </header>
    )
}

export default AsideNav