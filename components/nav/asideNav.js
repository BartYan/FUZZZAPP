import Link from 'next/link';
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux';

import { setIntervals, setHalfTones } from '../../slices/chordsSlice';
import styles from '../../styles/Home.module.scss';
import useLang from '../../pages/hooks/useLang';

const AsideNav = ({title, desc, subNav}) => {
    const dispatch = useDispatch();
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
          href: '/chordzapp/chordzLessons',
          title: useLang('chordzappLessonsMenuTitle'),
          textcolor: '#91D5DD',
        },
        {
          index: '2',
          href: '/chordzapp/intervalFretboard',
          title: useLang('chordzappIntervalFretboardMenuTitle'),
          textcolor: '#a29bfe',
        },
        {
          index: '3',
          href: '/chordzapp/chordzFretboard',
          title: useLang('chordzappFretboardMenuTitle'),
          textcolor: '#ff7979',
        },
        {
          index: '4',
          href: '/chordzapp/chordzAiTeacher',
          title: useLang('chordzappAiMenuTitle'),
          textcolor: '#ffcb70',
        },
    ];

    // if you swap page to the fretboard, clear fretboard from last filtering results 
    const handleFretboardsClear = (index) => {
        if(index == '2' || index == '3') {
            console.log('yo');
            dispatch(setIntervals([]));
            dispatch(setHalfTones([]));
        }
    }
    return (
        <header className={styles.aside__container}>
            <aside className={styles.aside}>
                <div className={styles.aside__top}>
                    <Link href={`/`}>
                        <a>
                            <img className={styles.nav__logo} src="/assets/images/LOGO.svg" alt="Fuzzzapp Logo" width={100} height={100}/>
                        </a>
                    </Link>
                </div>
                <div className={styles.aside__text}>
                    <h1 className={styles.aside__text_title}>{title}</h1>
                    <p className={styles.aside__text_desc}>{desc}</p>
                    {
                        subNav &&
                        <ul className={styles.aside__nav_list}>
                        {subNav.map((item, index) => {
                            return (
                                <li className={styles.aside__nav_item} key={index}>
                                    <a href={`#${item.id}`}>
                                        {item.name}
                                    </a>
                                </li>
                            )
                        })}
                        </ul>
                    }
                    <hr></hr>
                </div>
                <nav className={styles.aside__nav}>
                    <ul className={styles.aside__nav_list}>
                    {menuItems.map(({ href, title, textcolor, index }) => (
                        <li className={styles.aside__nav_item} style={{color: `${router.pathname == href ? textcolor : ''}`}} key={index}>
                        <Link href={href}>
                            <a onClick={()=> handleFretboardsClear(index)}>
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