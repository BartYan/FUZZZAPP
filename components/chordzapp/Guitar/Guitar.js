import { useState, useEffect } from 'react';
import styles from '../../../styles/Home.module.scss';

import Fret from './Fret';

export default function Guitar() {

  return (
    <div className={styles.guitar__container}>
      <div className={styles.guitar}>
        <Fret E='F'       A="Bb A#"   D="D# Eb"   G="G# Ab"   B="C"       id='1'/>
        <Fret E='F# Gb'   A="B"       D="E"       G="A"       B="C# Db"   id='2'/>
        <Fret E='G'       A="C"       D="F"       G="A# Bb"   B="D"       id='3'/>
        <Fret E='G# Ab'   A="C# Db"   D="F# Gb"   G="B"       B="D# Eb"   id='4'/>
        <Fret E='A'       A="D"       D="G"       G="C"       B="E"       id='5'/>
        <Fret E='A#, Bb'  A="D# Eb"   D="G# Ab"   G="C# Db"   B="F"       id='6'/>
        <Fret E='B'       A="E"       D="A"       G="D"       B="F# Gb"   id='7'/>
        <Fret E='C'       A="F"       D="A# Bb"   G="D# Eb"   B="G"       id='8'/>
        <Fret E='C# Db'   A="F# Gb"   D="B"       G="E"       B="G# Ab"   id='9'/>
        <Fret E='D'       A="G"       D="C"       G="F"       B="A"       id='10'/>
        <Fret E='D# Eb'   A="G# Ab"   D="C# Db"   G="F# Gb"   B="A# Bb"   id='11'/>
        <Fret E='E'       A="A"       D="D"       G="G"       B="B"       id='12'/>
        <Fret E='F'       A="Bb A#"   D="D# Eb"   G="G# Ab"   B="C"       id='13'/>
        <Fret E='F# Gb'   A="B"       D="E"       G="A"       B="C# Db"   id='14'/>
        <Fret E='G'       A="C"       D="F"       G="A# Bb"   B="D"       id='15'/>
      </div>
    </div>
    
  )
}
