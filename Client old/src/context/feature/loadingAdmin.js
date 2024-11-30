import { createSlice } from "@reduxjs/toolkit";

export const loadingAdminSlice = createSlice({
  name: "loadingAdmin",
  initialState: true,
  reducers: {
    setLoading: (state, action) => {
      return action.payload;
    },
    resetLoadAdmin: (state, action) => {
      return true;
    },
  },
});

export const { setLoading, resetLoadAdmin } = loadingAdminSlice.actions;
export default loadingAdminSlice.reducer;
