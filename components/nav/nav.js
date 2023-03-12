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
            <div className={styles.nav__items}>
                <Link href={`/chordzapp`}>
                    <a>
                        <p className={styles.nav__chordzapp}>CHORDZAPP</p>
                    </a>
                </Link>
                <Link href={`/blog`}>
                    <a>
                        <p className={styles.nav__blog}>BLOG</p>
                    </a>
                </Link>
                <Link href={`/virtual-teacher`}>
                    <a>
                        <p className={styles.nav__teacher}>AI TEACHER</p>
                    </a>
                </Link>
            </div>
        </nav>
    )
}

export default Nav