import { createSlice } from "@reduxjs/toolkit";

export const autenticateAdminSlice = createSlice({
  name: "autenticateAdmin",
  initialState: false,
  reducers: {
    setAutenticate: (state, action) => {
      return action.payload;
    },
    resetAuthAdmin: (state, action) => {
      return false;
    },
  },
});

export const { setAutenticate, resetAuthAdmin } = autenticateAdminSlice.actions;
export default autenticateAdminSlice.reducer;
