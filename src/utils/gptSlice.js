import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: { click: false },
  reducers: {
    toggleGptClickEvent: (state, action) => {
      state.click = action.payload;
    },
  },
});

export const { toggleGptClickEvent } = gptSlice.actions;
export default gptSlice.reducer;
