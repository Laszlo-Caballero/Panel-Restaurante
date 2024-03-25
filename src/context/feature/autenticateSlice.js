import { createSlice } from "@reduxjs/toolkit";

export const autenticateSlice = createSlice({
  name: "autenticate",
  initialState: false,
  reducers: {
    setAutenticate: (state, action) => {
      return action.payload;
    },
    resetAuth: (state, action) => {
      return false;
    },
  },
});

export const { setAutenticate, resetAuth } = autenticateSlice.actions;
export default autenticateSlice.reducer;
