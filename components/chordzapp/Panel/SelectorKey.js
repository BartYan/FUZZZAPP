import { useState, useEffect } from 'react'
import styles from '../../../styles/Home.module.scss'

export default function SelectorKey(props) {
    // SHOULD BE REDUX 
    const [majorFlag, setMajorFlag] = useState(false);

    const { scales } = props;

    const [listActiveKey, setListActiveKey] = useState(false);

    const [majorScale, setMajorScale] = useState();
    const [minorScale, setMinorScale] = useState();

    const [selectedKey, setSelectedKey] = useState('C');

    const handleListActiveKey = (e) => {
        setListActiveKey(!listActiveKey);
    }
    const handleKey = (note) => {
        setSelectedKey(note)
        setListActiveKey(!listActiveKey);
    }

    const handleNextKey = (next) => {
        if(majorFlag && majorScale) {
            let actualIndexKey = majorScale.indexOf(selectedKey);
            let newKey = next ? ++actualIndexKey : --actualIndexKey;

            if(newKey > (majorScale.length - 1) || newKey < 0) {
                    newKey = next ? 0 : majorScale.length - 1
            }
            setSelectedKey(majorScale[newKey])
        }
    }

    useEffect(()=> {
        if(scales) {
            setMajorFlag(true)
            setMajorScale(scales[0].notes)
            setMinorScale(scales[1].notes)
        }
      }, [scales, majorScale]);
    
    return ( 
        <div className={styles.panel__selector}>
            <div className={styles.panel__selector_row}>
                <div className={styles.panel__selected}>
                    <span
                        className={styles.panel__selected_value}
                        onClick={() => handleListActiveKey()}
                    >
                        {selectedKey}
                    </span>
                    <ul
                        className={`${styles.panel__selected_list} ${
                            listActiveKey ? styles.list__active : null
                        }`}
                    >
                        {majorFlag
                            ? scales &&
                              majorScale.map((note, index) => {
                                  return (
                                      <li
                                          className={styles.panel__selected_li}
                                          onClick={() => handleKey(note)}
                                          key={note}
                                      >
                                          {note}
                                      </li>
                                  )
                              })
                            : minorScale &&
                              minorScale.map((note, index) => {
                                  return (
                                      <li
                                          className={styles.panel__selected_li}
                                          onClick={() => handleKey(note)}
                                          key={note}
                                      >
                                          {note}
                                      </li>
                                  )
                              })}
                    </ul>
                </div>
                <div className={styles.panel__buttons}>
                    <button onClick={() => handleNextKey(true)}>+</button>
                    <button onClick={() => handleNextKey(false)}>-</button>
                    <button onClick={() => handleListActiveKey()}>list</button>
                </div>
            </div>
            <p className={styles.panel__item_description}>key</p>
        </div>
    )
}
