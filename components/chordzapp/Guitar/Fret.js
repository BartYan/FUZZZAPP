import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from '../../../styles/Home.module.scss';
import { marksFlag, currChordSounds } from '../../../slices/chordsSlice';

import useChords from '../../../pages/hooks/useChords';

export default function Fret(props) {

  const {E, A, D, G, B, id} = props;

  const chordSoundsRedux = useSelector(currChordSounds);
  const marksFlagsRedux = useSelector(marksFlag);

  const {
    soundCheck
  } = useChords();

  useEffect(()=> {
    // console.log(soundCheck(E))
  }, [E, A, D, G, B, chordSoundsRedux]);

  return (
    <div className={styles.guitar__fret}>
      <div className={styles.guitar__fret_string} data-id={id} data-fret-sound={E}><span data-color={soundCheck(E)[1]} className={`${soundCheck(E)[0] ? styles.dotVisible : null}`}>{marksFlagsRedux ? soundCheck(E)[0] : soundCheck(E)[2]}</span></div>
      <div className={styles.guitar__fret_string} data-id={id} data-fret-sound={B}><span data-color={soundCheck(B)[1]} className={`${soundCheck(B)[0] ? styles.dotVisible : null}`}>{marksFlagsRedux ? soundCheck(B)[0] : soundCheck(B)[2]}</span></div>
      <div className={styles.guitar__fret_string} data-id={id} data-fret-sound={G}><span data-color={soundCheck(G)[1]} className={`${soundCheck(G)[0] ? styles.dotVisible : null}`}>{marksFlagsRedux ? soundCheck(G)[0] : soundCheck(G)[2]}</span></div>
      <div className={styles.guitar__fret_string} data-id={id} data-fret-sound={D}><span data-color={soundCheck(D)[1]} className={`${soundCheck(D)[0] ? styles.dotVisible : null}`}>{marksFlagsRedux ? soundCheck(D)[0] : soundCheck(D)[2]}</span></div>
      <div className={styles.guitar__fret_string} data-id={id} data-fret-sound={A}><span data-color={soundCheck(A)[1]} className={`${soundCheck(A)[0] ? styles.dotVisible : null}`}>{marksFlagsRedux ? soundCheck(A)[0] : soundCheck(A)[2]}</span></div>
      <div className={styles.guitar__fret_string} data-id={id} data-fret-sound={E}><span data-color={soundCheck(E)[1]} className={`${soundCheck(E)[0] ? styles.dotVisible : null}`}>{marksFlagsRedux ? soundCheck(E)[0] : soundCheck(E)[2]}</span></div>
    </div>
  )
}