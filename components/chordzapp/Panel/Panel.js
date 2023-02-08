import styles from '../../../styles/Home.module.scss';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectValue } from '../../../slices/counterSlice'
import { RootState } from '../../../store'

import SelectorKey from './SelectorKey';
import SelectorChords from './SelectorChords';
import KnobMarks from './KnobMarks';

export default function Panel(props) {

    const { chords, scales } = props;

    const count = useSelector(selectValue);
    const dispatch = useDispatch();

    return (
        <div className={styles.panel}>
            <div className={styles.panel__container}>
                {/* <p>count {count}</p>
                <button onClick={()=>dispatch(decrement())}>
                    decrement
                </button> */}
                <SelectorKey apiScales={scales}/>
                <SelectorChords apiChords={chords}/>
                <KnobMarks/>

            </div>
        </div>
    )
}