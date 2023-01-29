import { useState, useEffect } from 'react'
import styles from '../../../styles/Home.module.scss'

export default function SelectorChords(props) {
    const { chords } = props;

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
        if(chords) {
            let names = []
            let halfTones = []
            chords.forEach((el) => {
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
        console.log('selectedChordHalfTones', selectedChordHalfTones)
        console.log('selectedChord', selectedChord)
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
                            chords &&
                            chords.map((chord, index) => {
                                return (
                                    <li
                                        className={styles.panel__selected_li}
                                        onClick={() => handleChord(chord)}
                                        key={chord.id}
                                    >
                                        {chord.name}
                                        {` (${chord.intervals.join(', ')})`}
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
