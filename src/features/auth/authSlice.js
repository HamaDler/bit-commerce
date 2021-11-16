import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCridentials: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setCridentials } = authSlice.actions;
export default authSlice.reducer;
