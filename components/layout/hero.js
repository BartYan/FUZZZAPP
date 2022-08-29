import Image from 'next/image';
import styles from '../../styles/Home.module.scss';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero__header}>
                <div className={styles.hero__header_box}>
                    <h1 className={styles.hero__header_title}>FUZZZ<span>APP</span></h1>
                    <h2 className={styles.hero__header_subtitle}>it's more then play!</h2>
                </div>

                <p className={styles.hero__header_desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Proin a justo vulputate, ullamcorper nibh vitae, ultrices metus. 
                    Nullam id magna vitae arcu dapibus congue vel at diam. 
                    Curabitur fermentum velit orci, quis pharetra diam ullamcorper tempor. 
                    Suspendisse accumsan non felis venenatis elementum. 
                </p>
            </div>
            <div className={styles.hero__image}>
                <Image className={styles.hero__image_fuzzer} src="/assets/images/FUZZER.svg" alt="Fuzzer" width={600} height={600}/>
            </div>
        </div>
    )
}

export default Hero