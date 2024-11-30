import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice.js";
import tokenReducer from "../feature/cookieSlice.js";
import navReducer from "../feature/navSlice.js";
import autenticateReducer from "../feature/autenticateSlice.js";
import loadingReducer from "../feature/loadingSlice.js";
import adminReducer from "../feature/adminSlice.js";
import loadingAdminReducer from "../feature/loadingAdmin.js";
import autenticateAdminReducer from "../feature/autenticateAdminSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    token: tokenReducer,
    nav: navReducer,
    autenticate: autenticateReducer,
    loading: loadingReducer,
    admin: adminReducer,
    loadingAdmin: loadingAdminReducer,
    autenticateAdmin: autenticateAdminReducer,
  },
});
