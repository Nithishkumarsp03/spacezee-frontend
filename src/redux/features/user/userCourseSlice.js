import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCourse: null,
};

const userCourseSlice = createSlice({
  name: "userCourse",
  initialState,
  reducers: {
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
  },
});

export const { setSelectedCourse } = userCourseSlice.actions;

export default userCourseSlice.reducer;

export const selectSelectedCourse = (state) => state.userCourse.selectedCourse;
