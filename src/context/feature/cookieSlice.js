import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const cookie = Cookies.get();
const initialState = cookie.token || "";

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    resetToken: (state, action) => {
      Cookies.remove("token");
      return "";
    },
  },
});

export const { resetToken } = tokenSlice.actions;
export default tokenSlice.reducer;
