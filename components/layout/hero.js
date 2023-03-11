import { useRef, useEffect } from 'react'
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import gsap from 'gsap'

// import { Fuzzer } from '../../public/assets/images/fuzzer/fuzzer.svg';
import { Fuzzer } from './images/fuzzer';

const Hero = () => {
    const fuzzer = useRef(null);
    useEffect(()=> {
        const [elements] = fuzzer.current.children;

        const all = elements.getElementById('XMLID_372_');
        const character = elements.getElementById('Fuzzer');
        const notes = elements.getElementById('notes');
        const notesTwo = elements.getElementById('notes 2');
        const waves = elements.getElementById('waves');
        const thunder = elements.getElementById('Pierun');
        const moves = elements.getElementById('greys');
        const electrics = elements.getElementById('yellows');

        gsap.set([all, notes, notesTwo, thunder, ...waves.children, ...moves.children, ...electrics.children], {autoAlpha: 0});
        // gsap.set({notes, notesTwo}, {transformOrigin: '50% 100%'});
        const tl = gsap.timeline({defaults: {ease: 'power2.inOut'}});
        const tl2 = gsap.timeline({defaults: {ease: 'power2.inOut'}, repeat:-1, repeatDelay: 2, yoyo:true});
        const tl3 = gsap.timeline({defaults: {ease: 'power2.inOut'}, repeat:-1, yoyo:true});
        
        tl.fromTo(all, {x: '-=50'}, {duration: 1, x: '+=50', autoAlpha: 1})
          .fromTo(notes, {y: '+=100'}, {duration: 1, autoAlpha: 1, y: '-=200'}, '-=0.25')
          .fromTo(notesTwo, {scaleX: 0}, {duration: 0.4, autoAlpha: 1, scaleX: 1}, '-=0.5')
          .to(thunder, {duration: 0.5, autoAlpha: 1}, '-=0.25')
          .to(moves.children, {duration: 0.5, autoAlpha: 1}, '-=0.4')
          .to(waves.children, {duration: 1, autoAlpha: 1, stagger: 0.3}, '-=1')
        tl2.to(electrics.children, {duration: 0.2, autoAlpha: 1, stagger: 0.3}, '+=1')
        tl3.fromTo(character, {y: '-=2'}, {duration: 2, y: '+=4', autoAlpha: 1})
          .to(moves.children, {duration: 0.2, autoAlpha: 1, stagger: 0.1}, '-=1')

    }, []);
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
            <div ref={fuzzer} className={styles.hero__image}>
                <Fuzzer />
                {/* <Image className={styles.hero__image_fuzzer} src="/assets/images/FUZZER.svg" alt="Fuzzer" width={600} height={600}/> */}
            </div>
        </div>
    )
}

export default Hero