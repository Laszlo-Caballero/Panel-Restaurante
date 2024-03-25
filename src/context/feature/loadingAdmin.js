import { createSlice } from "@reduxjs/toolkit";

export const loadingAdminSlice = createSlice({
  name: "loadingAdmin",
  initialState: true,
  reducers: {
    setLoading: (state, action) => {
      return action.payload;
    },
  },
});

export const { setLoading } = loadingAdminSlice.actions;
export default loadingAdminSlice.reducer;
