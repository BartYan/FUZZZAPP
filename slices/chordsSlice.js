import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  majorFlag: true,
  marksFlag: true,
  intervals: [ '1', '3', '5' ], //major on load
  halfTones: [0, 4, 7], //major on load
  currChordSounds: ['C', 'E', 'G'] //major on load
  // intervals: [], //on load
  // halfTones: [], //on load
  // currChordSounds: [] //on load
}

export const chordsSlice = createSlice({
  name: 'chordsSliceReducer',
  initialState,
  reducers: {
    swapKey: (state) => {
        state.majorFlag = !state.majorFlag;
    },
    swapMark: (state) => {
        state.marksFlag = !state.marksFlag;
    },
    setMajorKey: (state) => {
        state.majorFlag = true;
    },
    setMinorKey: (state) => {
        state.majorFlag = false;
    },
    setIntervals(state, action) {
      state.intervals = action.payload
    },
    setHalfTones(state, action) {
      state.halfTones = action.payload
    },
    setCurrChord(state, action) {
      state.currChordSounds = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { swapKey, swapMark, setMajorKey, setMinorKey, setIntervals, setHalfTones, setCurrChord } = chordsSlice.actions

export const selectMajorFlag = (state) => state.chordsSlice.majorFlag;
export const marksFlag = (state) => state.chordsSlice.marksFlag;
export const intervals = (state) => state.chordsSlice.intervals;
export const halfTones = (state) => state.chordsSlice.halfTones;
export const currChordSounds = (state) => state.chordsSlice.currChordSounds;

export default chordsSlice.reducer