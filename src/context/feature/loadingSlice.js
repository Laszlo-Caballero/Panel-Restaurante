import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: true,
  reducers: {
    setLoading: (state, action) => {
      return action.payload;
    },
    reset: (state, action) => {
      return true;
    },
  },
});

export const { setLoading, reset } = loadingSlice.actions;
export default loadingSlice.reducer;
