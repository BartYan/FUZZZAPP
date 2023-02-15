import styles from '../../../styles/Home.module.scss';

import Keyboard from './Keyboard';

export default function Piano() {

  return (
    <div className={styles.piano__container}>
        <div className={styles.piano}>
            <Keyboard/>
            <Keyboard/>
        </div>
    </div>
    
  )
}
