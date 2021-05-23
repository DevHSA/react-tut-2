import { createSlice } from "@reduxjs/toolkit";

const authState = { authToken: false };
const authSlice = createSlice({
  name: "authSlice",
  initialState: authState,
  reducers: {
    login(state) {
      state.authToken = true;
    },
    logout(state) {
      state.authToken = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
