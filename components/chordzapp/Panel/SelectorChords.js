import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from '../../../styles/Home.module.scss';
import { setMajorKey, setMinorKey, halfTones, setHalfTones } from '../../../slices/chordsSlice';

export default function SelectorChords(props) {
    const { apiChords } = props;
    const dispatch = useDispatch();

    const halfTonesRedux = useSelector(halfTones);
    const [listActive, setListActive] = useState(false);
    const [selectedChord, setSelectedChord] = useState('major');

    const handleListActive = (e) => {
        setListActive(!listActive);
    }
    const handleChord = (chord) => {
        setSelectedChord(chord.name);
        setListActive(!listActive);
        dispatch(setHalfTones(chord.halfTones))
    }

    const handleNextChord = (next) => {
        if(apiChords) {
            let names = []
            let halfTonesApi = []
            apiChords.forEach((el) => {
                names.push(el.name)
                halfTonesApi.push(el.halfTones)
            });

            let actualIndex = names.indexOf(selectedChord);
            let newIndex = next ? ++actualIndex : --actualIndex;

            if(newIndex > (names.length - 1) || newIndex < 0) {
                newIndex = next ? 0 : names.length - 1
            }
            setSelectedChord(names[newIndex])
            dispatch(setHalfTones(halfTonesApi[newIndex]))
        }
    }

    useEffect(()=> {
        if ( selectedChord == 'major' ) {
            dispatch(setMajorKey())
        } else if( selectedChord == 'minor' ) {
            dispatch(setMinorKey())
        }
        // console.log('selectedChord', selectedChord);
        // console.log('halfTonesRedux', halfTonesRedux);
      }, [selectedChord, halfTones]);
    
    return ( 
        <div className={styles.panel__selector}>
            <div className={styles.panel__selector_row}>
                <div className={styles.panel__selected}>
                    <span
                        className={styles.panel__selected_value}
                        onClick={() => handleListActive()}
                    >
                        {selectedChord}
                    </span>
                    <ul
                        className={`${styles.panel__selected_list} ${
                            listActive ? styles.list__active : null
                        }`}
                    >
                        {
                            apiChords &&
                            apiChords.map((chord, index) => {
                                return (
                                    <li
                                        className={styles.panel__selected_li}
                                        onClick={() => handleChord(chord)}
                                        key={chord.id}
                                    >
                                        {chord.name}
                                        {`(${chord.intervals.join(', ')})`}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={styles.panel__buttons}>
                    <button onClick={() => handleNextChord(true)}>+</button>
                    <button onClick={() => handleNextChord(false)}>-</button>
                    <button onClick={() => handleListActive()}>list</button>
                </div>
            </div>
            <p className={styles.panel__item_description}>chord</p>
        </div>
    )
}
