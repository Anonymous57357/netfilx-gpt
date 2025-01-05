import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en", // state (variable)
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload; // updating state using reducer like (setState)
    },
  },
});

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;
