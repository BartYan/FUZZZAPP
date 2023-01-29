import styles from '../../../styles/Home.module.scss';

import SelectorKey from './SelectorKey';
import SelectorChords from './SelectorChords';
import Knob from './Knob';

export default function Panel(props) {
    const { chords, scales } = props;

    return (
        <div className={styles.panel}>
            <div className={styles.panel__container}>

                <SelectorKey scales={scales}/>
                <SelectorChords chords={chords}/>
                <Knob/>

            </div>
        </div>
    )
}