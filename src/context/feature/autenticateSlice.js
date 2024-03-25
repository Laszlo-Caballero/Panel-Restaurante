import { createSlice } from "@reduxjs/toolkit";

export const autenticateSlice = createSlice({
  name: "autenticate",
  initialState: false,
  reducers: {
    setAutenticate: (state, action) => {
      return action.payload;
    },
  },
});

export const { setAutenticate } = autenticateSlice.actions;
export default autenticateSlice.reducer;
