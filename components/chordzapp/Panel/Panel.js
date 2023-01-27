import { useState, useEffect } from 'react';
import styles from '../../../styles/Home.module.scss';

import SelectorKey from './SelectorKey';

export default function Panel(props) {
    const { chords, scales } = props;

    return (
        <div className={styles.panel}>
            <div className={styles.panel__container}>
                <SelectorKey chords={chords} scales={scales}/>

                <div className={styles.panel__buttons}>
                    <p>chord</p>
                </div>
                <div className={styles.panel__knob}>
                    <p>marks</p>
                </div>
            </div>
        </div>
    )
}


                    {/* {scales && (
                    scales.map((scale, index) => {
                        return (
                        <p>
                            {scale.name}
                        </p>
                        )
                    })
                    )} */}

// {
//     majorFlag
//     ? scales && (
//         majorScale.map((note, index) => {
//             return (
//             <li>
//                 {note}
//             </li>
//             )
//         })
//         )
//     : scales && (
//         scales.map((scale, index) => {
//             return (
//             <p>
//                 {scale.name}
//             </p>
//             )
//         })
//         )
// }