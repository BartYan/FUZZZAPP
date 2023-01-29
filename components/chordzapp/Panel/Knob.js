import { useState } from 'react'
import styles from '../../../styles/Home.module.scss'

export default function Knob(props) {

    const [mode, setMode] = useState(false);

    const handleMode = (e) => setMode(!mode);
    
    return ( 
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
            <p className={styles.panel__item_description}>marks</p>
        </div>
    )
}
