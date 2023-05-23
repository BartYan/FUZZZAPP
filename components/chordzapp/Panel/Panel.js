import styles from '../../../styles/Home.module.scss';

import SelectorKey from './SelectorKey';
import SelectorChords from './SelectorChords';
import KnobMarks from './KnobMarks';

export default function Panel(props) {

    const { chords, scales } = props;

    return (
        <div className={styles.panel}>
            <div className={styles.panel__desc}>
                fuzzzapp / <span>chordzapp v1.0.0</span>
            </div>
            <div className={styles.panel__container}>
                <SelectorKey apiScales={scales}/>
                <SelectorChords apiChords={chords}/>
                <KnobMarks/>
            </div>
        </div>
    )
}