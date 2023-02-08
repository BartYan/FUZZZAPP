import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  majorFlag: true,
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
    }
  },
})

// Action creators are generated for each case reducer function
export const { swapKey, setMajorKey, setMinorKey } = chordsSlice.actions

export const selectMajorFlag = (state) => state.chordsSlice.majorFlag;

export default chordsSlice.reducer