import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUserSession: false,
  currentUser: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    USER_SESSION: (state, action) => {
      state.currentUserSession = action.payload;
    },
    SET_CURRENT_USER: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function.
export const { USER_SESSION, SET_CURRENT_USER } = userSlice.actions;
// Exports the slice's reducer.
export default userSlice.reducer;
