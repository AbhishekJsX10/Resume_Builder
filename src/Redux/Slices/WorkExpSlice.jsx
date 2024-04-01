

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sections: [],
};

const WorkExpSlice = createSlice({
  name: "workExperience",
  initialState,
  reducers: {
    addSection(state, action) {
      state.sections.push(action.payload);
    },

  },
});

export const { addSection } = WorkExpSlice.actions;
export default WorkExpSlice.reducer;