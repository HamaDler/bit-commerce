import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCridentials: (state, action) => {
      state.token = action.payload;
    },
    login: (state, action) => {
      state.token = action.payload.token;
    },
    logout: (state) => {
      localStorage.setItem("token", "");
      state.token = "";
    },
  },
});

export const { setCridentials, logout, login } = authSlice.actions;
export default authSlice.reducer;
