import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.scss';
import NavShorts from './nav-shorts';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <Link href={`/`}>
                <a>
                    <img className={styles.nav__logo} src="/assets/images/LOGO.svg" alt="Fuzzzapp Logo" width={100} height={100}/>
                </a>
            </Link>
            <NavShorts/>
        </nav>
    )
}

export default Nav