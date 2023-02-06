import Link from 'next/link';
import styles from '../../styles/Home.module.scss';

const AsideNav = () => {
    const menuItems = [
        {
          href: '/chordzapp',
          title: 'chordzapp',
        },
        {
          href: '/chordzTest',
          title: 'chordz test',
        },
        {
          href: '/chordzTest2',
          title: 'chordz test2',
        },
    ];
    return (
        <header className={styles.asides__nav}>
            <aside className={``}>
                <div className={styles.asides__logo}>
                    <Link href={`/`}>
                        <a>
                            <img className={styles.nav__logo} src="/assets/images/LOGO.svg" alt="Fuzzzapp Logo" width={100} height={100}/>
                        </a>
                    </Link>
                </div>
                <nav>
                    <h1>Chordzapp</h1>
                    <ul>
                    {menuItems.map(({ href, title }) => (
                        <li className={``} key={title}>
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