import { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { marksFlag, currChordSounds, intervals, halfTones } from '../../slices/chordsSlice';

// import dataChords from '../api/chords.json';
import dataScales from '../api/scales.json';

const useChords = (dataChords) => {
    const [chords, setChords] = useState();
    const [scales, setScales] = useState();

    const chordSoundsRedux = useSelector(currChordSounds);
    const intervalsRedux = useSelector(intervals);

    // const majorFlag = useSelector(selectMajorFlag);
    // const dispatch = useDispatch();

    const soundCheck = (fretSounds) => {
        let sound = false;
        let interval = false;
        let color = '';
        let fretSoundsArr = fretSounds.split(' ');
    
        fretSoundsArr.forEach(el => {
          if (chordSoundsRedux.includes(el)) {
            // if sound is on specific guitar string
            sound = el
            // if interval, find sound index from sounds and take same index from intervals
            interval = intervalsRedux[chordSoundsRedux.indexOf(el)];
            // set color via index
            if (chordSoundsRedux.indexOf(el) == 0) {
              color = 'yellow';
            } else if (chordSoundsRedux.indexOf(el) == 1) {
              color = 'blue';
            } else if (chordSoundsRedux.indexOf(el) == 2) {
              color = 'red';
            } else if (chordSoundsRedux.indexOf(el) == 3) {
              color = 'purple';
            }
          }
        });
    
        return [sound, color, interval]
    }

    useEffect(() => {
        setChords(dataChords);
        setScales(dataScales);
    }, [])

    // //Get chords from API airtable
    // useEffect(() => {
    //     fetch('/api/createChords') //airable api
    //         .then((response) => response.json())
    //         .then((data) => setChords(data))
    //     ;(error) => {
    //         setChords(error)
    //     }
    // }, [])
    // //Get scales from API
    // useEffect(() => {
    //     fetch('/api/createScales') //airtable api
    //         .then((response) => response.json())
    //         .then((data) => setScales(data))
    //     ;(error) => {
    //         setScales(error)
    //     }
    // }, [])


    return { chords, scales, soundCheck }
}

export default useChords
