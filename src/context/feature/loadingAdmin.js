import { createSlice } from "@reduxjs/toolkit";

export const loadingAdminSlice = createSlice({
  name: "loadingAdmin",
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

export const { setLoading, reset } = loadingAdminSlice.actions;
export default loadingAdminSlice.reducer;
