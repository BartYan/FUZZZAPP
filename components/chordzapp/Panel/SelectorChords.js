import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from '../../../styles/Home.module.scss';
import { setMajorKey, setMinorKey } from '../../../slices/chordsSlice';

export default function SelectorChords(props) {
    const { apiChords } = props;
    const dispatch = useDispatch();

    const [listActive, setListActive] = useState(false);
    const [selectedChord, setSelectedChord] = useState('major');
    const [selectedChordHalfTones,  setSelectedChordHalfTones] = useState();

    const handleListActive = (e) => {
        setListActive(!listActive);
    }
    const handleChord = (chord) => {
        setSelectedChord(chord.name);
        setSelectedChordHalfTones(chord.halfTones);
        setListActive(!listActive);
    }

    const handleNextChord = (next) => {
        if(apiChords) {
            let names = []
            let halfTones = []
            apiChords.forEach((el) => {
                names.push(el.name)
                halfTones.push(el.halfTones)
            });

            let actualIndex = names.indexOf(selectedChord);
            let newIndex = next ? ++actualIndex : --actualIndex;

            if(newIndex > (names.length - 1) || newIndex < 0) {
                newIndex = next ? 0 : names.length - 1
            }
            setSelectedChord(names[newIndex])
            setSelectedChordHalfTones(halfTones[newIndex])
        }
    }

    useEffect(()=> {
        if ( selectedChord == 'major' ) {
            dispatch(setMajorKey())
        } else if( selectedChord == 'minor' ) {
            dispatch(setMinorKey())
        }
        // console.log('selectedChordHalfTones', selectedChordHalfTones)
        // console.log('selectedChord', selectedChord) 
      }, [selectedChord, selectedChordHalfTones]);
    
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
