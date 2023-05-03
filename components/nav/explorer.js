import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.scss';

const Explorer = () => {
    const [explore, setExplore] = useState(false);
    const handleExplore = () => setExplore(!explore);
    return (
        <>
            <div className={styles.explorer__head} onClick={handleExplore}>
                <span className={styles.explorer__title}>EXPLORER</span>
                <img className={styles.explorer__arrow} src="/assets/images/Arrowshort.svg" alt="explore more arrow" width={60} height={60}/>
                <div className={styles.explorer__cta}>
                    <p className={styles.explorer__cta_txt}>(Kind of Menu)</p>
                </div>
            </div>
            <nav className={!explore ? styles.explorer : styles.explorer__expand}>

                <div className={styles.explorer__menu}>
                    <ul className={styles.explorer__menu_list}>
                        <Link href={`/`}>
                            <a>
                                <li className={styles.explorer__blue}>
                                    <div className={styles.menu_item_header}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path fill='black' d="M18.3 22.1 16.6 26l-3.9 1.7 3.9 1.7 1.7 3.9 1.7-3.9 3.9-1.7L20 26Zm13.3-.6-1.25 2.7-2.7 1.25 2.7 1.25 1.25 2.7 1.25-2.7 2.7-1.25-2.7-1.25ZM7 8l3.7 7.6h6.5L13.5 8h4.45l3.7 7.6h6.5L24.45 8h4.45l3.7 7.6h6.5L35.4 8H41q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9H7q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8Zm0 10.6V37h34V18.6Zm0 0V37Z"/></svg>
                                        <h5>Vlog</h5>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Nullam hendrerit condimentum tortor a consequat. 
                                        Cras bibendum erat non nibh convallis feugiat. 
                                        Phasellus ut turpis sed ligula ornare lobortis. 
                                        Nulla efficitur libero sed sollicitudin lobortis. 
                                    </p>
                                </li>
                            </a>
                        </Link>
                        <Link href={`/`}>
                            <a>
                                <li className={styles.explorer__grey}>
                                    <div className={styles.menu_item_header}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path fill='black' d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h23.1l9.9 9.9V39q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V17.55h-8.55V9H9v30Zm4.95-5.55h20.1v-3h-20.1Zm0-15.9H24v-3H13.95Zm0 7.95h20.1v-3h-20.1ZM9 9v8.55V9v30V9Z"/></svg>
                                        <h5>Newsletter</h5>
                                    </div>
                                    <p>
                                    Proin condimentum mi non mi auctor venenatis. 
                                    Ut in elit commodo, vestibulum neque in, elementum erat. 
                                    Aliquam a diam consectetur, cursus ligula at, tempor dui. 
                                    Integer sollicitudin velit non purus tempor, vel euismod erat molestie. 
                                    Nam faucibus sit amet sem non condimentum.
                                    </p>
                                </li>
                            </a>
                        </Link>
                        <Link href={`/`}>
                            <a>
                                <li className={styles.explorer__yellow}>
                                    <div className={styles.menu_item_header}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="45" width="45"><path fill='black' d="M42 22.05V39q0 1.2-.9 2.1-.9.9-2.1.9H8.95q-1.2 0-2.1-.9-.9-.9-.9-2.1V22.05q-1.4-1.2-1.85-2.95-.45-1.75.1-3.5l2.15-6.75q.4-1.35 1.4-2.1 1-.75 2.3-.75H37.7q1.4 0 2.45.775 1.05.775 1.45 2.075l2.2 6.75q.55 1.75.075 3.5Q43.4 20.85 42 22.05ZM28.5 20.5q1.45 0 2.45-.95 1-.95.8-2.3L30.5 9h-5v8.25q0 1.3.85 2.275.85.975 2.15.975Zm-9.35 0q1.4 0 2.375-.95.975-.95.975-2.3V9h-5l-1.25 8.25q-.2 1.3.7 2.275.9.975 2.2.975Zm-9.1 0q1.2 0 2.075-.825.875-.825 1.025-2.025L14.45 9h-5l-2.3 7.3q-.5 1.55.4 2.875t2.5 1.325Zm27.85 0q1.6 0 2.525-1.3.925-1.3.425-2.9L38.55 9h-5l1.3 8.65q.15 1.2 1.025 2.025.875.825 2.025.825ZM8.95 39H39V23.45q.05.05-.325.05H37.9q-1.25 0-2.375-.525T33.3 21.35q-.8 1-2 1.575t-2.65.575q-1.5 0-2.575-.425Q25 22.65 24 21.65q-.75.9-1.9 1.375t-2.6.475q-1.55 0-2.75-.55t-2.05-1.6q-1.2 1.05-2.35 1.6-1.15.55-2.3.55h-.675q-.325 0-.425-.05V39ZM39 39H8.95 39Z"/></svg>
                                        <h5>Shop</h5>
                                    </div>
                                    <p>
                                    Aenean vestibulum quam ac lacinia vulputate. 
                                    Cras eu orci in velit vulputate semper a convallis tellus. 
                                    Phasellus nisi lacus, consequat vitae bibendum nec, sollicitudin at risus.
                                    </p>
                                </li>
                            </a>
                        </Link>
                        <Link href={`/chordzapp`}>
                            <a>
                                <li className={styles.explorer__red}>
                                    <div className={styles.menu_item_header}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="45" width="45"><path fill='black' d="M11.3 40q-1.4 0-2.35-.95Q8 38.1 8 36.7q0-1.4.95-2.35.95-.95 2.35-.95 1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95ZM24 40q-1.4 0-2.35-.95-.95-.95-.95-2.35 0-1.4.95-2.35.95-.95 2.35-.95 1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35Q25.4 40 24 40Zm12.7 0q-1.4 0-2.35-.95-.95-.95-.95-2.35 0-1.4.95-2.35.95-.95 2.35-.95 1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95ZM11.3 27.3q-1.4 0-2.35-.95Q8 25.4 8 24q0-1.4.95-2.35.95-.95 2.35-.95 1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95Zm12.7 0q-1.4 0-2.35-.95-.95-.95-.95-2.35 0-1.4.95-2.35.95-.95 2.35-.95 1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95Zm12.7 0q-1.4 0-2.35-.95-.95-.95-.95-2.35 0-1.4.95-2.35.95-.95 2.35-.95 1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95ZM11.3 14.6q-1.4 0-2.35-.95Q8 12.7 8 11.3q0-1.4.95-2.35Q9.9 8 11.3 8q1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95Zm12.7 0q-1.4 0-2.35-.95-.95-.95-.95-2.35 0-1.4.95-2.35Q22.6 8 24 8q1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95Zm12.7 0q-1.4 0-2.35-.95-.95-.95-.95-2.35 0-1.4.95-2.35Q35.3 8 36.7 8q1.4 0 2.35.95.95.95.95 2.35 0 1.4-.95 2.35-.95.95-2.35.95Z"/></svg>
                                        <h5>Chordzapp</h5>
                                    </div>
                                    <p>
                                    Fusce sed odio sapien. Proin vitae nulla eu leo pellentesque sodales. 
                                    Donec fermentum dignissim eros, eu fermentum sem maximus non. 
                                    Morbi ultricies pretium lectus, vitae convallis nisi consectetur quis. 
                                    Aenean lobortis, augue eu porttitor gravida, dolor purus mattis diam, 
                                    a semper felis dolor in enim. Praesent id lacinia ligula, 
                                    finibus malesuada libero. 
                                    </p>
                                </li>
                            </a>
                        </Link>
                    </ul>
                    <div className={styles.explorer__head_les} onClick={handleExplore}>
                        <span className={styles.explorer__title_les}>LES</span>
                        <img className={styles.explorer__arrow_les} src="/assets/images/Arrowshort-black.svg" alt="explore more arrow" width={60} height={60}/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Explorer