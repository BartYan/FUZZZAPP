import { useState } from 'react'
import { useDispatch } from 'react-redux';

import styles from '../../../styles/Home.module.scss';
import { swapMark } from '../../../slices/chordsSlice';

export default function Knob(props) {

    const [mode, setMode] = useState(false);
    const dispatch = useDispatch();

    const handleMode = (e) => {
        setMode(!mode)
        dispatch(swapMark());
    }
    
    
    return ( 
        
        <div className={styles.panel__selector}>
            <div className={styles.panel__knob}>
                <div className={styles.panel__knob_options}>
                    <p>notes</p>
                    <p>intervals</p>
                </div>
                <div className={styles.panel__knob_el}>
                    <span 
                        className={mode ? styles.panel__knob_modeOn : null}
                        onClick={() => handleMode()}
                    >
                    </span>
                </div>
            </div>
            <p className={styles.panel__item_description}>marks</p>
        </div>
    )
}
