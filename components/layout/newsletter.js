import { useRef, useEffect } from 'react'
import styles from '../../styles/Home.module.scss';
import gsap from 'gsap';

import { Amp } from './images/amp';

const Newsletter = () => {
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
        <div className={styles.halves}>

            <h2 className={styles.halves__title}><span>02.</span> Newsletter</h2>
            <div className={styles.halves__wrapper}>
                <div className={`${styles.halves__box}`}>
                    <p className={styles.halves__head}>
                        Dodatkowe materiały, nowości i zmiany w aplikacjach, szkolenia,
                        merch oraz ciekawe artykuły! 
                    </p>
                    <p className={styles.halves__desc}>
                        O tym wszystkim dowiesz się z naszego newslettera.
                        Dzięki niemu będziesz na bieząco i skorzystasz z materiałów oraz aplikacji które Cię interesują:
                    </p>
                    <div className={`ml-form-embed ${styles.newsletter__form}`}
                        data-account="3446489:u4w8k5o8a9"
                        data-form="5898470:b8c5r3">
                    </div>
                </div>
                <div ref={peace} className={`${styles.halves__box} ${styles.halves__box_img}`}>
                    <div className={styles.halves__image}>
                        <Amp />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Newsletter