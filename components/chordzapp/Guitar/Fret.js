import { useState, useEffect } from 'react';
import styles from '../../../styles/Home.module.scss';

export default function Fret(props) {

  const {E, A, D, G, B, id} = props

  return (
    <div className={styles.guitar__fret}>
      <div className={styles.guitar__fret_string} data-fret-sound={E}><span></span></div>
      <div className={styles.guitar__fret_string} data-fret-sound={B}><span></span></div>
      <div className={styles.guitar__fret_string} data-fret-sound={G}><span></span></div>
      <div className={styles.guitar__fret_string} data-fret-sound={D}><span></span></div>
      <div className={styles.guitar__fret_string} data-fret-sound={A}><span></span></div>
      <div className={styles.guitar__fret_string} data-fret-sound={E}><span></span></div>
    </div>
  )
}
