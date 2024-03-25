import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice.js";
import tokenReducer from "../feature/cookieSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    token: tokenReducer,
  },
});
