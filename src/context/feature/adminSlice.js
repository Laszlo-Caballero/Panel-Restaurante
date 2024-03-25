import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: false,
  reducers: {
    setAdmin: (state, action) => {
      return action.payload;
    },
    resetAdmin: (state, action) => {
      return false;
    },
  },
});

export const { setAdmin, resetAdmin } = adminSlice.actions;
export default adminSlice.reducer;
