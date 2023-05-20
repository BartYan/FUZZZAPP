import Link from 'next/link';
import { useState } from 'react'

import styles from '../styles/Home.module.scss';
import useLang from '../pages/hooks/useLang';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    const renderedItems = items.map((item, index) => {
      const isActive = index === activeIndex;
  
      return (
        <div 
            onClick={() => handleClick(index)} 
            className={`${styles.accordion__item} ${isActive ? styles.active : ''}`} 
            key={index}
        >
            <div className={styles.accordion__item_panel}>
                <p className={styles.accordion__item_title}>{item.title}</p>
                <img className={styles.accordion__item_arrow} src="/assets/images/arrow_forward.svg" alt="explore more arrow" width={35} height={35}/>
            </div>
            <div className={`${styles.accordion__item_desc} ${isActive ? 'active' : ''}`}>
                <img src={item.imgUrl} width={135} height={135}/>
                <div className={styles.accordion__item_desc_right}>
                    <p>{item.desc}</p>
                    <Link href={item.url}>
                        <a className={styles.cta}>
                            {useLang('accordionCta')}
                        </a>
                    </Link>
                </div>
            </div>
        </div>
      );
    });
  
    return <div className={styles.accordion}>{renderedItems}</div>;
  };
  
  export default Accordion;