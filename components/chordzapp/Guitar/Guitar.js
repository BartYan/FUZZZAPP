import { useState, useEffect } from 'react';
import styles from '../../../styles/Home.module.scss';

import Fret from './Fret';

export default function Guitar() {

  return (
    <div className={styles.guitar__container}>
      <div className={styles.guitar}>
        <Fret E='C' A="D" D="E" G="F" B="G" id='1'/>
        <Fret E='C' A="D" D="E" G="F" B="G" id='2'/>
        <Fret E='C' A="D" D="E" G="F" B="G" id='3'/>
        <Fret E='C' A="D" D="E" G="F" B="G" id='4'/>
        <Fret E='C' A="D" D="E" G="F" B="G" id='5'/>
        <Fret E='C' A="D" D="E" G="F" B="G" id='6'/>
        <Fret E='C' A="D" D="E" G="F" B="G" id='7'/>
        <Fret E='C' A="D" D="E" G="F" B="G" id='8'/>
        <Fret E='C' A="D" D="E" G="F" B="G" id='9'/>
        <Fret E='C' A="D" D="E" G="F" B="G" id='10'/>
        <Fret E='C' A="D" D="E" G="F" B="G" id='11'/>
        <Fret E='C' A="D" D="E" G="F" B="G" id='12'/>
        <Fret E='C' A="D" D="E" G="F" B="G" id='13'/>
        <Fret E='C' A="D" D="E" G="F" B="G" id='14'/>
        <Fret E='C' A="D" D="E" G="F" B="G" id='15'/>
      </div>
    </div>
    
  )
}
