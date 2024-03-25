import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const cookie = Cookies.get();
const initialState = cookie.token || "";

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    reset: (state, action) => {
      state = "";
    },
  },
});

export const { reset } = tokenSlice.actions;
export default tokenSlice.reducer;
