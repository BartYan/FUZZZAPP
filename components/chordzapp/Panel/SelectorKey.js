import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectMajorFlag, setCurrChord, halfTones } from '../../../slices/chordsSlice';
import styles from '../../../styles/Home.module.scss';

export default function SelectorKey(props) {

    const { apiScales } = props;
    const majorFlag = useSelector(selectMajorFlag);
    const halfTonesRedux = useSelector(halfTones);
    const dispatch = useDispatch();
    
    const [scale, setScale] = useState();
    const [listActiveKey, setListActiveKey] = useState(false);
    const [selectedKey, setSelectedKey] = useState('C');

    const handleListActiveKey = (e) => {
        setListActiveKey(!listActiveKey);
    }
    const handleKey = (note) => {
        setSelectedKey(note);
        setListActiveKey(!listActiveKey);
    }

    const handleNextKey = (next) => {
        if(scale) {
            let actualIndexKey = scale.indexOf(selectedKey);
            let newKey = next ? ++actualIndexKey : --actualIndexKey;

            if(newKey > (scale.length - 1) || newKey < 0) {
                    newKey = next ? 0 : scale.length - 1
            }
            setSelectedKey(scale[newKey]);
        }
    }

    const handleFilterSounds = () => {
        if(scale) {
            const indexEnd = scale.indexOf(selectedKey);
            let oldScale = [...scale];
            let slicedSounds = oldScale.splice(0, indexEnd);
            let newScale = oldScale.concat(slicedSounds);

            let newChordSounds = [];

            halfTonesRedux.forEach(el => {
                newChordSounds.push(newScale[el]);
            });

            // console.log(' newChordSounds', newChordSounds);
            dispatch(setCurrChord(newChordSounds));
        }
    }

    useEffect(() => {
        if(apiScales && majorFlag) {
            setScale(apiScales[0].notes);
        }
        if (apiScales && !majorFlag) {
            setScale(apiScales[1].notes);
        }

        handleFilterSounds()
      }, [apiScales, scale, majorFlag, selectedKey, halfTonesRedux]);

    //Set setSelectedKey('C') with every chord change
    useEffect(()=> {
        setSelectedKey('C')
    }, [majorFlag]);

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
                                        key={index}
                                    >
                                        {note}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={styles.panel__buttons}>
                    <div className={styles.panel__buttons_double}>
                        <button onClick={() => handleNextKey(false)}>prev</button>
                        <button onClick={() => handleNextKey(true)}>next</button>
                    </div>
                    <button className={styles.long_button} onClick={() => handleListActiveKey()}>list</button>
                </div>
            </div>
            <p className={styles.panel__item_description}>key</p>
        </div>
    )
}
