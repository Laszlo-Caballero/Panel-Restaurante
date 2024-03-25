import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "nav",
  initialState: true,
  reducers: {
    openClose: (state, action) => {
      return !state;
    },
  },
});

export const { openClose } = navSlice.actions;
export default navSlice.reducer;
