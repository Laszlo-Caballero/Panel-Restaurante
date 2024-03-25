import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    setUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.splice(0, state.length);
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
