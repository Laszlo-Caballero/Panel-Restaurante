import { createSlice } from "@reduxjs/toolkit";

export const autenticateAdminSlice = createSlice({
  name: "autenticateAdmin",
  initialState: false,
  reducers: {
    setAutenticate: (state, action) => {
      return action.payload;
    },
  },
});

export const { setAutenticate } = autenticateAdminSlice.actions;
export default autenticateAdminSlice.reducer;
