import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  majorFlag: true,
  halfTones: [0, 4, 7], //major on load
  currChordSounds: ['C', 'E', 'G'] //major on load
}

export const chordsSlice = createSlice({
  name: 'chordsSliceReducer',
  initialState,
  reducers: {
    swapKey: (state) => {
        state.majorFlag = !state.majorFlag;
    },
    setMajorKey: (state) => {
        state.majorFlag = true;
    },
    setMinorKey: (state) => {
        state.majorFlag = false;
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
export const { swapKey, setMajorKey, setMinorKey, setHalfTones, setCurrChord } = chordsSlice.actions

export const selectMajorFlag = (state) => state.chordsSlice.majorFlag;
export const halfTones = (state) => state.chordsSlice.halfTones;
export const currChordSounds = (state) => state.chordsSlice.currChordSounds;

export default chordsSlice.reducer