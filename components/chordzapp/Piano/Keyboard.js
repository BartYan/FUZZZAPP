import styles from '../../../styles/Home.module.scss';
import { useSelector } from 'react-redux';
import useChords from '../../../pages/hooks/useChords';

import { marksFlag } from '../../../slices/chordsSlice';

export default function Keyboard() {

    const marksFlagsRedux = useSelector(marksFlag);

    const {
        soundCheck
    } = useChords();

  return (
    <>
        <div className={styles.double}>
            <div className={styles.white} data-tone="C">
                <span data-color={soundCheck("C")[1]} className={`${soundCheck("C")[0] ? styles.dotVisible : null}`}>{marksFlagsRedux ? soundCheck("C")[0] : soundCheck("C")[2]}</span>
            </div>
            <div className={styles.black} data-tone="C# Db">
                <span data-color={soundCheck("C# Db")[1]} className={`${soundCheck("C# Db")[0] ? styles.dotVisible : null}`}>{marksFlagsRedux ? soundCheck("C# Db")[0] : soundCheck("C# Db")[2]}</span>
            </div>
        </div>
        <div className={styles.double}>
            <div className={styles.white} data-tone="D">
                <span data-color={soundCheck("D")[1]} className={`${soundCheck("D")[0] ? styles.dotVisible : null}`}>{marksFlagsRedux ? soundCheck("D")[0] : soundCheck("D")[2]}</span>
            </div>
            <div className={styles.black} data-tone="D# Eb">
                <span data-color={soundCheck("D# Eb")[1]} className={`${soundCheck("D# Eb")[0] ? styles.dotVisible : null}`}>{marksFlagsRedux ? soundCheck("D# Eb")[0] : soundCheck("D# Eb")[2]}</span>
            </div>
        </div>
        <div className={styles.white} data-tone="E">
            <span data-color={soundCheck("E")[1]} className={`${soundCheck("E")[0] ? styles.dotVisible : null}`}>{marksFlagsRedux ? soundCheck("E")[0] : soundCheck("E")[2]}</span>
        </div>
        <div className={styles.double}>
            <div className={styles.white} data-tone="F">
                <span data-color={soundCheck("F")[1]} className={`${soundCheck("F")[0] ? styles.dotVisible : null}`}>{marksFlagsRedux ? soundCheck("F")[0] : soundCheck("F")[2]}</span>
            </div>
            <div className={styles.black} data-tone="F# Gb">
                <span data-color={soundCheck("F# Gb")[1]} className={`${soundCheck("F# Gb")[0] ? styles.dotVisible : null}`}>{marksFlagsRedux ? soundCheck("F# Gb")[0] : soundCheck("F# Gb")[2]}</span>
            </div>
        </div>
        <div className={styles.double}>
            <div className={styles.white} data-tone="G">
                <span data-color={soundCheck("G")[1]} className={`${soundCheck("G")[0] ? styles.dotVisible : null}`}>{marksFlagsRedux ? soundCheck("G")[0] : soundCheck("G")[2]}</span>
            </div>
            <div className={styles.black} data-tone="G# Ab">
                <span data-color={soundCheck("G# Ab")[1]} className={`${soundCheck("G# Ab")[0] ? styles.dotVisible : null}`}>{marksFlagsRedux ? soundCheck("G# Ab")[0] : soundCheck("G# Ab")[2]}</span>
            </div>
        </div>
        <div className={styles.double}>
            <div className={styles.white} data-tone="A">
                <span data-color={soundCheck("A")[1]} className={`${soundCheck("A")[0] ? styles.dotVisible : null}`}>{marksFlagsRedux ? soundCheck("A")[0] : soundCheck("A")[2]}</span>
            </div>
            <div className={styles.black} data-tone="A# Bb">
                <span data-color={soundCheck("A# Bb")[1]} className={`${soundCheck("A# Bb")[0] ? styles.dotVisible : null}`}>{marksFlagsRedux ? soundCheck("A# Bb")[0] : soundCheck("A# Bb")[2]}</span>
            </div>
        </div>
        <div className={styles.white} data-tone="B">
            <span data-color={soundCheck("B")[1]} className={`${soundCheck("B")[0] ? styles.dotVisible : null}`}>{marksFlagsRedux ? soundCheck("B")[0] : soundCheck("B")[2]}</span>
        </div>
    </>
  )
}
