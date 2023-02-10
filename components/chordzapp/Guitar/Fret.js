import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../../styles/Home.module.scss';
import { currChordSounds } from '../../../slices/chordsSlice';

export default function Fret(props) {

  const {E, A, D, G, B, id} = props;

  const chordSoundsRedux = useSelector(currChordSounds);

  const soundCheck = (fretSounds) => {
    let sounds = false;
    let fretSoundsArr = fretSounds.split(' ');
    fretSoundsArr.forEach(el => {
      if (chordSoundsRedux.includes(el)) {
        sounds = el
      }
    });

    return sounds
  }

  useEffect(()=> {
    console.log(soundCheck(E))
  }, [E, A, D, G, B, chordSoundsRedux]);

  return (
    <div className={styles.guitar__fret}>
      <div className={styles.guitar__fret_string} data-fret-sound={E}>{soundCheck(E)}<span>{soundCheck(E)}</span></div>
      <div className={styles.guitar__fret_string} data-fret-sound={B}>{soundCheck(B)}<span></span></div>
      <div className={styles.guitar__fret_string} data-fret-sound={G}>{soundCheck(G)}<span></span></div>
      <div className={styles.guitar__fret_string} data-fret-sound={D}>{soundCheck(D)}<span></span></div>
      <div className={styles.guitar__fret_string} data-fret-sound={A}>{soundCheck(A)}<span></span></div>
      <div className={styles.guitar__fret_string} data-fret-sound={E}>{soundCheck(E)}<span></span></div>
    </div>
  )
}