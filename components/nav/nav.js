import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.scss';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <Link href={`/`}>
                <a>
                    <img className={styles.nav__logo} src="/assets/images/LOGO.svg" alt="Fuzzzapp Logo" width={100} height={100}/>
                </a>
            </Link>
            <div className={styles.nav__appBox}>
                <Link href={`/`}>
                    <a>
                        <p className={styles.nav__chordzapp}>CHORDZAPP</p>
                    </a>
                </Link>
                <Link href={`/`}>
                    <a>
                        <p className={styles.nav__quizapp}>QUIZHORDZAPP</p>
                    </a>
                </Link>
            </div>
        </nav>
    )
}

export default Nav