import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProgram: null,
  allPrograms: null,
};

const commonProgramSlice = createSlice({
  name: "commonPrograms",
  initialState,
  reducers: {
    setSelectedProgram: (state, action) => {
      state.selectedProgram = action.payload;
    },
    setAllPrograms: (state, action) => {
      state.allPrograms = action.payload;
    },
  },
});

export const { setSelectedProgram, setAllPrograms } =
  commonProgramSlice.actions;

export default commonProgramSlice.reducer;

export const selectCommonSelectedProgram = (state) =>
  state.commonPrograms.selectedProgram;
