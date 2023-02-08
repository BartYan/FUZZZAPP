import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectMajorFlag } from '../../../slices/chordsSlice';
import styles from '../../../styles/Home.module.scss'

export default function SelectorKey(props) {
    // SHOULD BE REDUX
    const { apiScales } = props;
    const majorFlag = useSelector(selectMajorFlag);
    
    const [scale, setScale] = useState();
    const [listActiveKey, setListActiveKey] = useState(false);
    const [selectedKey, setSelectedKey] = useState('C');

    const handleListActiveKey = (e) => {
        setListActiveKey(!listActiveKey);
    }
    const handleKey = (note) => {
        setSelectedKey(note)
        setListActiveKey(!listActiveKey);
    }

    const handleNextKey = (next) => {
        if(scale) {
            let actualIndexKey = scale.indexOf(selectedKey);
            let newKey = next ? ++actualIndexKey : --actualIndexKey;

            if(newKey > (scale.length - 1) || newKey < 0) {
                    newKey = next ? 0 : scale.length - 1
            }
            setSelectedKey(scale[newKey])
        }
    }

    useEffect(()=> {
        if(apiScales && majorFlag) {
            setScale(apiScales[0].notes)
        }
        if (apiScales && !majorFlag) {
            setScale(apiScales[1].notes)
        }
        console.log('majorFlag', majorFlag)
        console.log('maping scale', scale)
      }, [apiScales, scale, majorFlag]);
    
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
                        {scale &&
                            scale.map((note, index) => {
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
                        }
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
