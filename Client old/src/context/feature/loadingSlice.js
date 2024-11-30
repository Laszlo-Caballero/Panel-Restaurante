import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: true,
  reducers: {
    setLoading: (state, action) => {
      return action.payload;
    },
    resetLoad: (state, action) => {
      return true;
    },
  },
});

export const { setLoading, resetLoad } = loadingSlice.actions;
export default loadingSlice.reducer;
