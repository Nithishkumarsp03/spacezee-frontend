import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTask: null,
};

const userTaskSlice = createSlice({
  name: "userTask",
  initialState,
  reducers: {
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
  },
});

export const { setSelectedTask } = userTaskSlice.actions;

export default userTaskSlice.reducer;

export const selectTask = (state) => state.userTask.selectedTask;
