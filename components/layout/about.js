import { useRef, useEffect } from 'react'
import styles from '../../styles/Home.module.scss';
import gsap from 'gsap';

import { Peace } from './images/peace';

const About = () => {
    const peace = useRef(null);
    useEffect(()=> {
        // const [elements] = peace.current.children;

        // const all = elements.getElementById('XMLID_372_');
        // const character = elements.getElementById('peace');
        // const notes = elements.getElementById('notes');
        // const notesTwo = elements.getElementById('notes 2');
        // const waves = elements.getElementById('waves');
        // const thunder = elements.getElementById('Pierun');
        // const moves = elements.getElementById('greys');
        // const electrics = elements.getElementById('yellows');

        // gsap.set([all, notes, notesTwo, thunder, ...waves.children, ...moves.children, ...electrics.children], {autoAlpha: 0});
        // // gsap.set({notes, notesTwo}, {transformOrigin: '50% 100%'});
        // const tl = gsap.timeline({defaults: {ease: 'power2.inOut'}});
        // const tl2 = gsap.timeline({defaults: {ease: 'power2.inOut'}, repeat:-1, repeatDelay: 2, yoyo:true});
        // const tl3 = gsap.timeline({defaults: {ease: 'power2.inOut'}, repeat:-1, yoyo:true});
        
        // tl.fromTo(all, {x: '-=50'}, {duration: 1, x: '+=50', autoAlpha: 1})
        //   .fromTo(notes, {y: '+=100'}, {duration: 1, autoAlpha: 1, y: '-=200'}, '-=0.25')
        //   .fromTo(notesTwo, {scaleX: 0}, {duration: 0.4, autoAlpha: 1, scaleX: 1}, '-=0.5')
        //   .to(thunder, {duration: 0.5, autoAlpha: 1}, '-=0.25')
        //   .to(moves.children, {duration: 0.5, autoAlpha: 1}, '-=0.4')
        //   .to(waves.children, {duration: 1, autoAlpha: 1, stagger: 0.3}, '-=1')
        // tl2.to(electrics.children, {duration: 0.2, autoAlpha: 1, stagger: 0.3}, '+=1')
        // tl3.fromTo(character, {y: '-=2'}, {duration: 2, y: '+=4', autoAlpha: 1})
        //   .to(moves.children, {duration: 0.2, autoAlpha: 1, stagger: 0.1}, '-=1')

    }, []);
    return (
        <div className={`${styles.halves} ${styles.section__about}`}>

            <h2 className={styles.halves__title}><span>01.</span> About</h2>
            <div className={styles.halves__wrapper}>
                <div className={`${styles.halves__box}`}>
                    <h3 className={styles.halves__head}>
                        Hello, I'm Bart & Welcome to Fuzzzapp! 
                        Place for music and guitar lovers who, ullamcorper nibh vitae, ultrices metus. 
                    </h3>
                    <div className={styles.halves__columns}>
                        <p className={styles.halves__column}>
                            Nullam id magna vitae arcu dapibus congue vel at diam. 
                            Curabitur fermentum velit orci, quis pharetra diam ullamcorper tempor. 
                            Suspendisse accumsan non felis venenatis elementum. 
                            Nullam id magna vitae arcu dapibus congue vel at diam. 
                        </p>
                        <p className={styles.halves__column}>
                            Nullam id magna vitae arcu dapibus congue vel at diam. 
                            Curabitur fermentum velit orci, quis pharetra diam ullamcorper tempor. 
                            Suspendisse accumsan non felis venenatis elementum. 
                            Nullam id magna vitae arcu dapibus congue vel at diam. 
                        </p>
                    </div>
                    <div className={styles.halves__buttons}>
                        <a href='/' className={styles.cta}>Read blog</a>
                        <a href='/' className={styles.cta}>Watch vlog</a>
                    </div>
                </div>
                <div ref={peace} className={`${styles.halves__box} ${styles.halves__box_img}`}>
                    <div className={styles.halves__image}>
                        <Peace />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About