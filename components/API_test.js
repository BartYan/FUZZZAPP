// Intervals such as the unison, fourth, fifth, and octave can be classified 
// as “perfect” but never “major” or “minor”. Conversely, 
// the intervals of the second, third, sixth, and seventh 

// can be major or minor but never perfect in quality.

// Perfect Intervals:	Unison, 4th, 5th, 8ve
// Major or Minor Intervals:	2nd, 3rd, 6th, 7th

// Perfect intervals are always natural to natural, sharp to sharp, 
// and flat to flat except for the fourths and fifths between B and F, which involve B to F and B to F.

//Chromatic Scales
const chromAscending = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B','C']
const chromDescending = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B','C']

//key = chord degrees, value = how many halfTones 
const chordsDict = {
    minor : {
        1: 0, //'unison'
        3: 3, //'minor 3rd'
        5: 7, //'perfect 5th'
    },
    major : {
        1: 0, //'unison'
        3: 4, //'major 3rd'
        5: 7, //'perfect 5th'
    }
}

let newChord = [];
const chordFunction = (chord, scale) => {
    Object.entries(chord).forEach(([key, value]) => {
        newChord.push([key, scale[value]])
    });
}
// chordFunction(minor, chromDescending)
chordFunction(chordsDict.major, chromAscending)

// console.log(newChord)

let chordInput = document.getElementById('chords')
let keyInput = document.getElementById('key')

chordInput.addEventListener("input", function(){
    value = chordInput.value
    if(value === 'major') {
        chordFunction(chordsDict.value, chromAscending)
    } else {
        chordFunction(chordsDict.value, chromDescending)
    }
    // console.log(newChord)
});
