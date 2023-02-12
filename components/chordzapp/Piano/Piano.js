import { useState, useEffect } from 'react';
import styles from '../../../styles/Home.module.scss';

export default function Piano() {

  return (
    <div className={styles.piano__container}>
        <div className={styles.piano}>
            <div className={styles.double}>
                <div className={styles.white} data-tone="C"></div>
                <div className={styles.black} data-sharp="C#" data-flat="Db"></div>
            </div>
            <div className={styles.double}>
                <div className={styles.white} data-tone="D"></div>
                <div className={styles.black} data-sharp="D#" data-flat="Eb"></div>
            </div>
            <div className={styles.white} data-tone="E"></div>
            <div className={styles.double}>
                <div className={styles.white} data-tone="F"></div>
                <div className={styles.black} data-sharp="F#" data-flat="Gb"></div>
            </div>
            <div className={styles.double}>
                <div className={styles.white} data-tone="G"></div>
                <div className={styles.black} data-sharp="G#" data-flat="Ab"></div>
            </div>
            <div className={styles.double}>
                <div className={styles.white} data-tone="A"></div>
                <div className={styles.black} data-sharp="A#" data-flat="Bb"></div>
            </div>
            <div className={styles.white} data-tone="B"></div>
            <div className={styles.double}>
                <div className={styles.white} data-tone="C"></div>
                <div className={styles.black} data-sharp="C#" data-flat="Db"></div>
            </div>
            <div className={styles.double}>
                <div className={styles.white} data-tone="D"></div>
                <div className={styles.black} data-sharp="D#" data-flat="Eb"></div>
            </div>
            <div className={styles.white} data-tone="E"></div>
            <div className={styles.double}>
                <div className={styles.white} data-tone="F"></div>
                <div className={styles.black} data-sharp="F#" data-flat="Gb"></div>
            </div>
            <div className={styles.double}>
                <div className={styles.white} data-tone="G"></div>
                <div className={styles.black} data-sharp="G#" data-flat="Ab"></div>
            </div>
            <div className={styles.double}>
                <div className={styles.white} data-tone="A"></div>
                <div className={styles.black} data-sharp="A#" data-flat="Bb"></div>
            </div>
            <div className={styles.white} data-tone="B"></div>
        </div>
    </div>
    
  )
}
