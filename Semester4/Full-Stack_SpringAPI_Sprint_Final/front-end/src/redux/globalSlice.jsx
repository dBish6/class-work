import { createSlice } from "@reduxjs/toolkit";

// This redux store is just for anything; miscellaneous.
const initialState = {
  searchResults: [],
};
const globalSlice = createSlice({
  name: "globalStore",
  initialState,
  reducers: {
    STORE_PRODUCTS_SEARCHED: (state, action) => {
      state.searchResults = action.payload;
    },
    CLEAR_SEARCH: (state) => {
      state.searchResults = [];
    },
  },
});

// Action creators are generated for each case reducer function.
export const { STORE_PRODUCTS_SEARCHED } = globalSlice.actions;
// Exports the slice's reducer.
export default globalSlice.reducer;
