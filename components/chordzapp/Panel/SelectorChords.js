import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useLang from '../../../pages/hooks/useLang';
import styles from '../../../styles/Home.module.scss';
import { setMajorKey, setMinorKey, setIntervals, halfTones, setHalfTones } from '../../../slices/chordsSlice';

export default function SelectorChords(props) {
    const { apiChords } = props;
    const dispatch = useDispatch();

    const [listActive, setListActive] = useState(false);
    const [selectedChord, setSelectedChord] = useState('select name');
    const [selectedChordMode, setSelectedChordMode] = useState('major');

    const handleListActive = (e) => {
        setListActive(!listActive);
    }
    const handleChord = (chord) => {
        setSelectedChord(chord.name);
        setSelectedChordMode(chord.mode);
        setListActive(!listActive);
        dispatch(setHalfTones(chord.halfTones));
        dispatch(setIntervals(chord.intervals));
    }

    const handleNextChord = (next) => {
        if(apiChords) {
            let names = []
            let halfTonesApi = []
            let intervalsApi = []
            let modes = []
            apiChords.forEach((el) => {
                names.push(el.name)
                halfTonesApi.push(el.halfTones)
                intervalsApi.push(el.intervals)
                modes.push(el.mode)
            });

            let actualIndex = names.indexOf(selectedChord);
            let newIndex = next ? ++actualIndex : --actualIndex;

            if(newIndex > (names.length - 1) || newIndex < 0) {
                newIndex = next ? 0 : names.length - 1
            }
            setSelectedChord(names[newIndex])
            setSelectedChordMode(modes[newIndex])
            dispatch(setHalfTones(halfTonesApi[newIndex]))
            dispatch(setIntervals(intervalsApi[newIndex]))
        }
    }

    useEffect(()=> {
        if ( selectedChordMode == 'major' || selectedChordMode == 'aug' ) {
            dispatch(setMajorKey())
        } else if( selectedChordMode == 'minor' || selectedChordMode == 'dim') {
            dispatch(setMinorKey())
        }
      }, [selectedChordMode, selectedChord, halfTones]);
    
    return ( 
        <div className={styles.panel__selector}>
            <div className={styles.panel__selector_row}>
                <div className={styles.panel__selected}>
                    <span
                        className={`${styles.panel__selected_value} ${styles.chords__value}`}
                        onClick={() => handleListActive()}
                    >
                        {selectedChord}
                    </span>
                    <ul
                        className={`${styles.panel__selected_list} ${styles.panel__selected_list_wrap} ${
                            listActive ? styles.list__active : null
                        }`}
                    >
                        <span className={styles.panel__selected_list_close} onClick={() => handleListActive()}>
                            {useLang('close')}
                        </span>
                        {
                            apiChords &&
                            apiChords.map((chord, index) => {
                                return (
                                    <li
                                        className={`${styles.panel__selected_li} ${styles.panel__selected_li_chords}`}
                                        onClick={() => handleChord(chord)}
                                        key={index}
                                    >
                                        {chord.name}
                                        <span>{`(${chord.intervals.join(', ')})`}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={styles.panel__buttons}>
                    <div className={styles.panel__buttons_double}>
                        <button onClick={() => handleNextChord(false)}>prev</button>
                        <button onClick={() => handleNextChord(true)}>next</button>
                    </div>
                    <button className={styles.long_button} onClick={() => handleListActive()}>list</button>
                </div>
            </div>
            <p className={styles.panel__item_description}>name</p>
        </div>
    )
}
